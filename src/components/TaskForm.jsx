import { useState } from 'react'
import { Plus, Check } from 'lucide-react'
import Button from './Button'
import FormField from './FormField'
import Input from './Input'
import ColorPicker from './ColorPicker'

const TaskForm = ({ 
  initialTitle = '', 
  initialColor = '', 
  onSubmit, 
  submitText = 'Add Task',
  loadingText = 'Adding Task...',
  isEdit = false 
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [color, setColor] = useState(initialColor)
  const [loading, setLoading] = useState(false)

  const isFormComplete = title.trim() && color

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return

    setLoading(true)
    try {
      await onSubmit({ title: title.trim(), color })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const getButtonText = () => {
    if (loading) return loadingText
    if (isEdit) return 'Save'
    return isFormComplete ? 'Save' : submitText
  }

  const getButtonIcon = () => {
    if (loading) return <Check size={16} />
    if (isEdit) return <Check size={20} />
    return isFormComplete ? <Check size={20} /> : <Plus size={20} className='border-2 rounded-full' />
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField label="Title" required>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex. Brush your teeth"
          required
        />
      </FormField>

      <FormField label="Color">
        <ColorPicker selectedColor={color} onColorChange={setColor} />
      </FormField>

      <Button
        type="submit"
        className="w-full"
        loading={loading}
      >
        <span>{getButtonText()}</span>
        {getButtonIcon()}
      </Button>
    </form>
  )
}

export default TaskForm