import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BackButton = ({ to = '/', className = '' }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      className={`flex items-center space-x-2 text-gray-300 hover:text-white mt-20 mb-8 transition-colors ${className}`}
    >
      <ArrowLeft size={20} className='hover:text-gray-400' />
    </button>
  )
}

export default BackButton