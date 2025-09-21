import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md', 
  className = '' 
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'px-3 py-1 text-sm'
      case 'large':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2 text-base'
    }
  }

  const baseClasses = 'font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer border-none outline-none'
  const sizeClasses = getSizeClasses(size)
  const shapeClasses = shape
  const allClasses = `${baseClasses} ${sizeClasses} ${shapeClasses} ${className}`.trim()

  return (
    <button className={allClasses}>
      {title}
    </button>
  )
}

export default Button;