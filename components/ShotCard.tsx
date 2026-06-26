import Link from 'next/link'
import { Shot } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ShotCardProps {
  shot: Shot
}

export default function ShotCard({ shot }: ShotCardProps) {
  const title = getMetafieldValue(shot.metadata?.title) || shot.title
  const timeRange = getMetafieldValue(shot.metadata?.time_range)
  const shotType = getMetafieldValue(shot.metadata?.shot_type)
  const cameraTechnique = getMetafieldValue(shot.metadata?.camera_technique)
  const dialogue = getMetafieldValue(shot.metadata?.dialogue)
  const description = getMetafieldValue(shot.metadata?.visual_description)

  return (
    <Link href={`/shots/${shot.slug}`} className="card-glow p-5 block group animate-fade-up">
      <div className="flex items-center gap-2 flex-wrap mb-3">
        {timeRange && (
          <span className="tag bg-night-600 text-moon-glow font-mono">{timeRange}</span>
        )}
        {shotType && (
          <span className="tag bg-crimson-dark/40 text-crimson-light border border-crimson/30">
            {shotType}
          </span>
        )}
        {cameraTechnique && (
          <span className="tag bg-night-600 text-moon">{cameraTechnique}</span>
        )}
      </div>
      <h3 className="font-serif font-semibold text-base text-snow-50 group-hover:text-crimson-light transition-colors">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-moon line-clamp-2">{description}</p>
      )}
      {dialogue && (
        <p className="mt-3 text-sm text-snow-100 italic border-l-2 border-crimson pl-3">
          「{dialogue}」
        </p>
      )}
    </Link>
  )
}