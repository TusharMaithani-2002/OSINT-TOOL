import { Hono } from 'hono'
import { serve } from 'bun'
import { scanRoute } from './routes/scan'

const app = new Hono()

app.get('/', (c) => c.text('Hono server running, dope'))

app.route('/scan', scanRoute)

serve({
  fetch: app.fetch,
  port: 4000
})

console.log('Hono backend is running on http://localhost:4000')
