import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import tasksRoute from './routes/tasks'

const app = new Hono()

app.use('/*', cors({
    origin: 'http://localhost:3000',
}))

app.route('/tasks', tasksRoute)

serve({
    fetch: app.fetch,
    port: 8080,
}, (info) => {
    console.log(`Server running at http://localhost:${info.port}`)
})
