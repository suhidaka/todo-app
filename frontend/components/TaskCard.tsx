import { Task } from '../types/task'

type Props = {
    task: Task
    onToggle: (id: number, is_done: boolean) => void
    onDelete: (id: number) => void
}

export const TaskCard = ({ task, onToggle, onDelete }: Props) => {
    return (
        <div className="flex items-center justify-between p-4 border rounded-lg mb-2">
        <div className="flex items-center gap-3">
            <input
            type="checkbox"
            checked={task.is_done}
            onChange={() => onToggle(task.id, task.is_done)}
            className="w-5 h-5 cursor-pointer"
        />
        <span className={task.is_done ? 'line-through text-gray-400' : ''}>
            {task.name}
        </span>
            </div>
            <button
            onClick={() => onDelete(task.id)}
            className="text-red-400 hover:text-red-600"
        >
            削除
        </button>
    </div>
    )
}
