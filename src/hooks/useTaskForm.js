import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTasks } from './useTasks'

export const useTaskForm = (taskId = null) => {
  const [initialData, setInitialData] = useState({ title: '', color: 'blue' })
  const [fetchLoading, setFetchLoading] = useState(!!taskId)
  const navigate = useNavigate()
  const { createTask, updateTask, getTask } = useTasks()

  const isEdit = !!taskId

  useEffect(() => {
    if (taskId) {
      fetchTask()
    }
  }, [taskId])

  const fetchTask = async () => {
    try {
      const task = await getTask(taskId)
      setInitialData({ title: task.title, color: task.color })
    } catch (error) {
      console.error('Error fetching task:', error)
      navigate('/')
    } finally {
      setFetchLoading(false)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (isEdit) {
        await updateTask(taskId, formData)
      } else {
        await createTask({ ...formData, completed: false })
      }
      navigate('/')
    } catch (error) {
      console.error('Error submitting task:', error)
      throw error
    }
  }

  return {
    initialData,
    fetchLoading,
    isEdit,
    handleSubmit
  }
}