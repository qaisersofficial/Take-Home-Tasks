const TaskStats = ({ totalTasks, completedTasks }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-3">
        <span className="text-[#4EA8DE] text-sm font-bold">Tasks</span>
        <code className="bg-[#333333] text-white px-2 py-0.5 rounded-xl text-sm font-mono">
          {totalTasks}
        </code>
      </div>
      
      <div className="flex items-center space-x-3">
        <span className="text-[#8284FA] text-sm font-bold">Completed</span>
        <code className="bg-[#333333] text-white px-2 py-0.5 rounded-xl text-sm font-mono">
          {completedTasks} de {totalTasks}
        </code>
      </div>
    </div>
  )
}

export default TaskStats