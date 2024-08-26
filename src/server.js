import express from "express";
import { ErrorHandlerMiddleware } from "./middlewares/error-handler.middleware.js";
import { mongo } from "./db/mongo.db.js";
import appConfig from "./config/app.config.js";
import path from "path";
import methodOverride from "method-override";
import router from "./routes/index.routes.js";
import { Task } from "./modules/tasks/task.schema.js";

const app = express();

// malumotni qaysi tipda almashishi
app.use(express.json());

// mongoDB ni ulash
await mongo();

// ejs ni ishlatish
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(process.cwd(), "public")));

// front qismini qaytarish
app.get("/", async(req, res) => {
    const tasks = await Task.find(); 
    res.render("index", {tasks})
})

// main end point
app.use("/api/v1", router);

// noto'g'ri urlga kelgan so'rovga javob
app.use("*", (req, res) => {
  res.status(404).send({
    message: "Url is not found",
  });
});

// error handler middleware
app.use(ErrorHandlerMiddleware);

// portni ishga tushirish
app.listen(appConfig.port, appConfig.host, () => {
  console.log(`Server is running on port: ${appConfig.port}`);
});
