import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useTasks } from '../hooks/useTasks'
import Layout from '../components/Layout'
import Button from '../components/Button'
import TaskCard from '../components/TaskCard'
import TaskStats from '../components/TaskStats'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'

const HomePage = () => {
  const navigate = useNavigate()
  const { tasks, loading, toggleTaskComplete, deleteTask } = useTasks()

  const handleToggleComplete = (taskId, completed) => {
    toggleTaskComplete(taskId, completed)
  }

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId)
    }
  }

  const handleTaskClick = (taskId) => {
    navigate(`/edit/${taskId}`)
  }

  const completedTasks = tasks.filter(task => task.completed).length

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <Layout>
      <Button
        onClick={() => navigate('/create')}
        className="w-full mb-8"
      >
        <span>Create Task</span>
        <Plus size={20} />
      </Button>

      <TaskStats totalTasks={tasks.length} completedTasks={completedTasks} />

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <EmptyState
            title="You don't have any tasks registered yet."
            description="Create tasks and organize your to-do items."
          />
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onClick={handleTaskClick}
            />
          ))
        )}
      </div>
    </Layout>
  )
}

export default HomePage