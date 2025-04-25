import { Router } from "express";
import {
  createTask,
  getTasks,
  getUserTasks,
  updateTask,
} from "../controllers/task.controller";
const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTask);
router.get("/user/:userId", getUserTasks);

export default router;
