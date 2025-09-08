interface YouTubeProps {
  id: string
  title?: string
  width?: number
  height?: number
  className?: string
}

const YouTube = ({
  id,
  title,
  width = 560,
  height = 315,
  className = 'my-6 mx-auto',
}: YouTubeProps) => {
  if (!id) {
    return <div className="text-red-500">Error: YouTube video ID is required</div>
  }

  return (
    <div className={className}>
      {title && <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>}
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title || `YouTube video ${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}

export default YouTube
