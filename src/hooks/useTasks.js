import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleError = (error, operation) => {
    console.error(`Error ${operation}:`, error)
    setError(error.message || `Failed to ${operation}`)
  }

  const fetchTasks = async () => {
    try {
      setError(null)
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setTasks(data || [])
    } catch (error) {
      handleError(error, 'fetch tasks')
    } finally {
      setLoading(false)
    }
  }

  const toggleTaskComplete = async (taskId, completed) => {
    try {
      setError(null)
      const { error } = await supabase
        .from('tasks')
        .update({ completed })
        .eq('id', taskId)

      if (error) throw error
      
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId ? { ...task, completed } : task
        )
      )
    } catch (error) {
      handleError(error, 'update task')
    }
  }

  const deleteTask = async (taskId) => {
    try {
      setError(null)
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)

      if (error) throw error
      
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
    } catch (error) {
      handleError(error, 'delete task')
    }
  }

  const createTask = async (taskData) => {
    try {
      setError(null)
      const { error } = await supabase
        .from('tasks')
        .insert([taskData])

      if (error) throw error
      
      // Refresh tasks after creation
      await fetchTasks()
    } catch (error) {
      handleError(error, 'create task')
      throw error
    }
  }

  const updateTask = async (taskId, taskData) => {
    try {
      setError(null)
      const { error } = await supabase
        .from('tasks')
        .update(taskData)
        .eq('id', taskId)

      if (error) throw error
    } catch (error) {
      handleError(error, 'update task')
      throw error
    }
  }

  const getTask = async (taskId) => {
    try {
      setError(null)
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('id', taskId)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      handleError(error, 'fetch task')
      throw error
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    toggleTaskComplete,
    deleteTask,
    createTask,
    updateTask,
    getTask
  }
}