const Input = ({ 
  className = '',
  ...props 
}) => {
  return (
    <input
      className={`w-full bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none shadow-[#0000000F] transition-colors ${className}`}
      {...props}
    />
  )
}

export default Input