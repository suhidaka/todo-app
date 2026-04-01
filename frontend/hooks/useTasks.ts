import { useState, useEffect } from 'react'
import { Task } from '../types/task'

const API_URL = 'http://localhost:8080/tasks'

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([])

    const fetchTasks = async () => {
        const res = await fetch(API_URL)
        const data = await res.json()
        setTasks(data)
    }

    const addTask = async (name: string) => {
        await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
        })
        fetchTasks()
    }

    const toggleTask = async (id: number, is_done: boolean) => {
        await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_done: !is_done }),
        })
        fetchTasks()
    }

    const deleteTask = async (id: number) => {
        await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        })
        fetchTasks()
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return { tasks, addTask, toggleTask, deleteTask }
}
