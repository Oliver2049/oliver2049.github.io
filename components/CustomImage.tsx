interface CustomImageProps {
  src: string
  alt: string
  size: 'small' | 'medium' | 'large' | 'full'
  caption?: string
}

const CustomImage = ({ src, alt, size, caption }: CustomImageProps) => {
  const sizeClasses = {
    small: 'max-w-xs',      // 300px
    medium: 'max-w-md',     // 500px
    large: 'max-w-2xl',     // 700px
    full: 'w-full'          // 100%
  }

  const sizeClass = sizeClasses[size] || sizeClasses.medium

  return (
    <div className="flex flex-col items-center my-6">
      <img
        src={src}
        alt={alt}
        className={`${sizeClass} h-auto rounded-lg shadow-lg mx-auto`}
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
