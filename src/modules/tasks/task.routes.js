import { Router } from "express";
import { ValidationMiddleware } from "../../middlewares/validation.middleware.js";
import { createTaskSchema } from "./dtos/create-task.dto.js";
import taskController from "./task.controller.js";

const router = Router();
router.post(
  "/",
  ValidationMiddleware(createTaskSchema),
  taskController.createTask
);

router.delete("/:id", taskController.deleteTask);

export default router;