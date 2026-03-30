import { Hono } from 'hono'
import { pool } from '../db'

const app = new Hono()

// タスク一覧取得
app.get('/', async (c) => {
  const [rows] = await pool.query('SELECT * FROM tasks')
    return c.json(rows)
})

// タスク追加
app.post('/', async (c) => {
    const { name } = await c.req.json()
    const [result] = await pool.query(
        'INSERT INTO tasks (name, is_done) VALUES (?, ?)',
        [name, false]
    )
    return c.json({ id: (result as any).insertId, name, is_done: false })
})

// タスク完了/未完了の切り替え
app.put('/:id', async (c) => {
    const id = c.req.param('id')
    const { is_done } = await c.req.json()
    await pool.query('UPDATE tasks SET is_done = ? WHERE id = ?', [is_done, id])
    return c.json({ message: 'updated' })
})

// タスク削除
app.delete('/:id', async (c) => {
    const id = c.req.param('id')
    await pool.query('DELETE FROM tasks WHERE id = ?', [id])
    return c.json({ message: 'deleted' })
})

export default app
