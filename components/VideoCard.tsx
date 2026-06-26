import Link from 'next/link'
import { Video } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  const image = video.metadata?.featured_image
  const title = getMetafieldValue(video.metadata?.title) || video.title
  const synopsis = getMetafieldValue(video.metadata?.synopsis)
  const duration = getMetafieldValue(video.metadata?.total_duration)
  const order = video.metadata?.episode_order

  return (
    <Link href={`/videos/${video.slug}`} className="card-glow overflow-hidden block group animate-fade-up">
      <div className="relative aspect-video overflow-hidden bg-night-700">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🎬</div>
        )}
        {order !== undefined && order !== null && (
          <span className="absolute top-3 left-3 tag bg-crimson text-snow-50">
            第 {order} 集
          </span>
        )}
        {duration && (
          <span className="absolute bottom-3 right-3 tag bg-night-900/80 text-moon-glow">
            {duration}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif font-bold text-lg text-snow-50 group-hover:text-crimson-light transition-colors">
          {title}
        </h3>
        {synopsis && (
          <p className="mt-2 text-sm text-moon line-clamp-3">{synopsis}</p>
        )}
      </div>
    </Link>
  )
}