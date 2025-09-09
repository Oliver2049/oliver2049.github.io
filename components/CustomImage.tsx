interface CustomImageProps {
  src: string
  alt: string
  size: 'small' | 'medium' | 'large' | 'full'
  caption?: string
}

const CustomImage = ({ src, alt, size, caption }: CustomImageProps) => {
  const sizeClasses = {
    small: 'max-w-xs', // 300px
    medium: 'max-w-md', // 500px
    large: 'max-w-2xl', // 700px
    full: 'w-full', // 100%
  }

  const sizeClass = sizeClasses[size] || sizeClasses.medium

  // Ensure proper image path
  const imageSrc = src.startsWith('/') ? src : `/${src}`

  return (
    <div className="flex flex-col items-center my-6">
      <img
        src={imageSrc}
        alt={alt}
        className={`${sizeClass} h-auto rounded-lg shadow-lg mx-auto`}
        onError={(e) => {
          console.error('Image failed to load:', imageSrc)
          e.currentTarget.style.display = 'none'
        }}
      />
      {caption && (
        <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2 text-center max-w-lg">
          {caption}
        </p>
      )}
    </div>
  )
}

export default CustomImage
