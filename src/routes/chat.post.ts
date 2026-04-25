import { Hono } from "hono";
import { chatController } from "../controllers/chat.controller.js";

const router = new Hono();

router.post("/", chatController);

export default router;