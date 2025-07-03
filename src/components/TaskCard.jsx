import { Check, Trash2 } from 'lucide-react'

const TaskCard = ({ task, onToggleComplete, onDelete, onClick }) => {
  const colorClasses = {
    red: 'bg-red-500 border-red-500',
    orange: 'bg-orange-500 border-orange-500',
    yellow: 'bg-yellow-500 border-yellow-500',
    green: 'bg-green-500 border-green-500',
    blue: 'bg-blue-500 border-blue-500',
    indigo: 'bg-indigo-500 border-indigo-500',
    purple: 'bg-purple-500 border-purple-500',
    pink: 'bg-pink-500 border-pink-500',
    brown: 'bg-amber-700 border-amber-700'
  }

  const hoverColorClasses = {
    red: 'hover:border-red-400',
    orange: 'hover:border-orange-400',
    yellow: 'hover:border-yellow-400',
    green: 'hover:border-green-400',
    blue: 'hover:border-blue-400',
    indigo: 'hover:border-indigo-400',
    purple: 'hover:border-purple-400',
    pink: 'hover:border-pink-400',
    brown: 'hover:border-amber-600'
  }

  const handleToggleComplete = (e) => {
    e.stopPropagation()
    onToggleComplete(task.id, !task.completed)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id)
    }
  }

  return (
    <div 
      className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-750 transition-colors"
      onClick={() => onClick(task.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={handleToggleComplete}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed 
                ? `${colorClasses[task.color] || 'bg-blue-500 border-blue-500'} text-white` 
                : `border-gray-400 ${hoverColorClasses[task.color] || 'hover:border-blue-400'}`
            }`}
          >
            {task.completed && <Check size={14} />}
          </button>
          <span className={`text-gray-200 ${task.completed ? 'line-through opacity-60' : ''}`}>
            {task.title}
          </span>
        </div>
        <button
          onClick={handleDelete}
          className="text-gray-400 hover:text-red-400 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}

export default TaskCard