const FormField = ({ 
  label, 
  children, 
  required = false,
  className = '' 
}) => {
  return (
    <div className={className}>
      <label className="block text-[#4EA8DE] text-sm font-medium mb-3">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

export default FormField