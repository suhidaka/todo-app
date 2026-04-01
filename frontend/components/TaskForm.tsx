import { useState } from 'react'

type Props = {
    onAdd: (name: string) => void
}

export const TaskForm = ({ onAdd }: Props) => {
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return
        onAdd(name)
        setName('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="タスクを入力..."
            className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
            追加
        </button>
        </form>
    )
}
