import 'dotenv/config'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import chatRouter from './routes/chat.route.js';
import { cors } from 'hono/cors';

const app = new Hono()
app.use("*", cors());
app.route("/", chatRouter);

app.get('/', (c) => c.text('Hologram API running 🚀'))

const port = Number(process.env.PORT) || 3001

serve({
  fetch: app.fetch,
  port
})

console.log(`🚀 Server running on http://localhost:${port}`)