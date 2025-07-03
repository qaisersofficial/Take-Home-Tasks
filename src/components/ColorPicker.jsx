const ColorPicker = ({ selectedColor, onColorChange }) => {
  const colors = [
    { name: 'red', class: 'bg-[#FF3B30]' },
    { name: 'orange', class: 'bg-[#FF9500]' },
    { name: 'yellow', class: 'bg-[#FFCC00]' },
    { name: 'green', class: 'bg-[#34C759]' },
    { name: 'blue', class: 'bg-[#007AFF]' },
    { name: 'indigo', class: 'bg-[#5856D6]' },
    { name: 'purple', class: 'bg-[#AF52DE]' },
    { name: 'pink', class: 'bg-[#FF2D55]' },
    { name: 'brown', class: 'bg-[#A2845E]' }
  ]

  return (
    <div className="flex space-x-3">
      {colors.map((color) => (
        <button
          key={color.name}
          type="button"
          onClick={() => onColorChange(color.name)}
          className={`w-8 h-8 rounded-full ${color.class} border-2 transition-all ${
            selectedColor === color.name 
              ? 'border-white scale-110' 
              : 'border-transparent hover:scale-105'
          }`}
        >
        </button>
      ))}
    </div>
  )
}

export default ColorPicker