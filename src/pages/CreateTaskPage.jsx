import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import TaskForm from '../components/TaskForm'
import { useTaskForm } from '../hooks/useTaskForm'

const CreateTaskPage = () => {
  const { handleSubmit } = useTaskForm()

  return (
    <Layout>
      <BackButton />
      <TaskForm 
        onSubmit={handleSubmit}
        submitText="Add Task"
        loadingText="Adding Task..."
      />
    </Layout>
  )
}

export default CreateTaskPage