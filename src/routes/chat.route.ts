import { Hono } from "hono";
import chatPost from "./chat.post.js";

const chatRouter = new Hono();

const routes = [
  chatPost
];

routes.forEach((route) => {
  chatRouter.route("/chat", route);
});

export default chatRouter;