import { Hono } from "hono";
import chatPost from "./chat.post.js";
import chatStream from "./chat.stream.js";

const chatRouter = new Hono();

const routes = [
  chatPost,
  chatStream
];

routes.forEach((route) => {
  chatRouter.route("/chat", route);
});

export default chatRouter;