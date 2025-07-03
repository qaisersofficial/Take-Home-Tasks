import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import TaskForm from '../components/TaskForm'
import LoadingSpinner from '../components/LoadingSpinner'
import { useTaskForm } from '../hooks/useTaskForm'

const EditTaskPage = () => {
  const { id } = useParams()
  const { initialData, fetchLoading, isEdit, handleSubmit } = useTaskForm(id)

  if (fetchLoading) {
    return <LoadingSpinner message="Loading task..." />
  }

  return (
    <Layout>
      <BackButton />
      <TaskForm 
        initialTitle={initialData.title}
        initialColor={initialData.color}
        onSubmit={handleSubmit}
        submitText="Save"
        loadingText="Saving..."
        isEdit={isEdit}
      />
    </Layout>
  )
}

export default EditTaskPage