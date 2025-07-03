import { Check, Trash2 } from 'lucide-react'

const TaskCard = ({ task, onToggleComplete, onDelete, onClick }) => {
  const colorClasses = {
    red: 'bg-[#FF3B30] border-[#FF3B30]',
    orange: 'bg-[#FF9500] border-[#FF9500]',
    yellow: 'bg-[#FFCC00] border-[#FFCC00]',
    green: 'bg-[#34C759] border-[#34C759]',
    blue: 'bg-[#007AFF] border-[#007AFF]',
    indigo: 'bg-[#5856D6] border-[#5856D6]',
    purple: 'bg-[#AF52DE] border-[#AF52DE]',
    pink: 'bg-[#FF2D55] border-[#FF2D55]',
    brown: 'bg-[#A2845E] border-[#A2845E]'
  }

  const hoverColorClasses = {
    red: 'hover:border-[#FF3B30]',
    orange: 'hover:border-[#FF9500]',
    yellow: 'hover:border-[#FFCC00]',
    green: 'hover:border-[#34C759]',
    blue: 'hover:border-[#007AFF]',
    indigo: 'hover:border-[#5856D6]',
    purple: 'hover:border-[#AF52DE]',
    pink: 'hover:border-[#FF2D55]',
    brown: 'hover:border-[#A2845E]'
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
      className="bg-[#262626] border-2 border-[#333333] rounded-lg p-4 cursor-pointer hover:bg-[#0000000F] transition-colors"
      onClick={() => onClick(task.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={handleToggleComplete}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed 
                ? `${colorClasses[task.color] || 'bg-[#007AFF] border-[#007AFF]'} text-white` 
                : `border-[#4EA8DE] ${hoverColorClasses[task.color] || 'hover:border-[#007AFF]'}`
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