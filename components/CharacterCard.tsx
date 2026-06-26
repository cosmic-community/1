import Link from 'next/link'
import { Character } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const portrait = character.metadata?.portrait
  const name = getMetafieldValue(character.metadata?.name) || character.title
  const signature = getMetafieldValue(character.metadata?.signature)
  const description = getMetafieldValue(character.metadata?.description)

  return (
    <Link href={`/characters/${character.slug}`} className="card-glow overflow-hidden block group animate-fade-up">
      <div className="relative aspect-[3/4] overflow-hidden bg-night-700">
        {portrait ? (
          <img
            src={`${portrait.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">👤</div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-900 to-transparent p-4">
          <h3 className="font-serif font-bold text-lg text-snow-50">{name}</h3>
          {signature && <p className="text-xs text-crimson-light mt-1">{signature}</p>}
        </div>
      </div>
      {description && (
        <div className="p-4">
          <p className="text-sm text-moon line-clamp-2">{description}</p>
        </div>
      )}
    </Link>
  )
}