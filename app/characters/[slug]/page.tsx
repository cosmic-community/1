// app/characters/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCharacter, getMetafieldValue } from '@/lib/cosmic'

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const character = await getCharacter(slug)

  if (!character) {
    notFound()
  }

  const portrait = character.metadata?.portrait
  const name = getMetafieldValue(character.metadata?.name) || character.title
  const description = getMetafieldValue(character.metadata?.description)
  const costume = getMetafieldValue(character.metadata?.costume)
  const signature = getMetafieldValue(character.metadata?.signature)

  return (
    <div className="container-page py-16">
      <Link href="/characters" className="text-crimson-light hover:text-crimson text-sm mb-6 inline-block">
        ← 返回角色列表
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="card-glow overflow-hidden">
          {portrait ? (
            <img
              src={`${portrait.imgix_url}?w=1000&h=1300&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="aspect-[3/4] flex items-center justify-center text-6xl bg-night-700">👤</div>
          )}
        </div>
        <div>
          <h1 className="font-serif font-black text-4xl text-snow-50">{name}</h1>
          {signature && (
            <p className="mt-3 inline-block tag bg-crimson-dark/40 text-crimson-light border border-crimson/30">
              {signature}
            </p>
          )}
          {description && (
            <div className="mt-6">
              <h2 className="text-xs uppercase tracking-wider text-crimson-light mb-2">人物简介</h2>
              <p className="text-snow-100 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
          )}
          {costume && (
            <div className="mt-6">
              <h2 className="text-xs uppercase tracking-wider text-crimson-light mb-2">服饰造型</h2>
              <p className="text-snow-100 leading-relaxed whitespace-pre-line">{costume}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}