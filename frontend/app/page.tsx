'use client'

import { useTasks } from '../hooks/useTasks'
import { TaskCard } from '../components/TaskCard'
import { TaskForm } from '../components/TaskForm'

export default function Home() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()

  return (
    <main className="max-w-xl mx-auto mt-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">📝 ToDo App</h1>
      <TaskForm onAdd={addTask} />
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">タスクがありません</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </main>
  )
}