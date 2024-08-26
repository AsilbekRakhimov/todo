import { Router } from "express";
import taskRouter from "../modules/tasks/task.routes.js";

const router = Router();

router.use("/task", taskRouter);

export default router;
