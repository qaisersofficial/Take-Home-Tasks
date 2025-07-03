const EmptyState = ({ 
  title = "No items found",
  description = "Get started by creating your first item.",
  className = ''
}) => {
  return (
    <div className={`text-center py-12 border-t border-gray-600 pt-12 rounded-md ${className}`}>
      <img 
        className="mx-auto text-gray-400 mb-4" 
        src="Document-icon.png" 
        width="56" 
        height="56"
        alt="Empty state"
      />
      <h3 className="text-gray-300 text-base mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default EmptyState