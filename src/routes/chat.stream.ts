import { Hono } from "hono";
import { chatControllerStream } from "../controllers/chat.controller.stream.js";

const router = new Hono();

router.post("/stream", chatControllerStream);

export default router;