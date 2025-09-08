import Image from './Image'

interface CustomImageProps {
  src: string
  alt: string
  size: 'small' | 'medium' | 'large' | 'full'
  caption?: string
}

const CustomImage = ({ src, alt, size, caption }: CustomImageProps) => {
  const sizeClasses = {
    small: 'max-w-xs',     // 300px
    medium: 'max-w-md',    // 500px  
    large: 'max-w-2xl',    // 700px
    full: 'w-full'         // 100%
  }

  const sizeClass = sizeClasses[size] || sizeClasses.medium

  return (
    <div className="flex flex-col items-center my-6">
      <div className={`${sizeClass} mx-auto`}>
        <Image
          src={src}
          alt={alt}
          width={size === 'small' ? 300 : size === 'medium' ? 500 : size === 'large' ? 700 : 800}
          height={size === 'small' ? 200 : size === 'medium' ? 333 : size === 'large' ? 467 : 533}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2 text-center max-w-lg">
          {caption}
        </p>
      )}
    </div>
  )
}

export default CustomImage
