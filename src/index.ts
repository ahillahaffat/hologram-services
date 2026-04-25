import 'dotenv/config'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import chatRouter from './routes/chat.route.js';

const app = new Hono()
app.route("/", chatRouter);

app.get('/', (c) => c.text('Hologram API running 🚀'))

const port = Number(process.env.PORT) || 3000

serve({
  fetch: app.fetch,
  port
})

console.log(`🚀 Server running on http://localhost:${port}`)