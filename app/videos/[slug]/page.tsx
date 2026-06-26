// app/videos/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getVideo, getShotsForVideo, getMetafieldValue } from '@/lib/cosmic'
import ShotCard from '@/components/ShotCard'

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const video = await getVideo(slug)

  if (!video) {
    notFound()
  }

  const shots = await getShotsForVideo(video.id)
  const image = video.metadata?.featured_image
  const title = getMetafieldValue(video.metadata?.title) || video.title
  const scene = getMetafieldValue(video.metadata?.scene)
  const synopsis = getMetafieldValue(video.metadata?.synopsis)
  const duration = getMetafieldValue(video.metadata?.total_duration)
  const order = video.metadata?.episode_order
  const characters = video.metadata?.characters || []

  return (
    <div>
      {/* Banner */}
      <section className="relative border-b border-night-600">
        {image && (
          <div className="absolute inset-0">
            <img
              src={`${image.imgix_url}?w=1600&h=700&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/60 to-night-900/40" />
          </div>
        )}
        <div className="container-page relative py-20">
          <Link href="/videos" className="text-crimson-light hover:text-crimson text-sm mb-4 inline-block">
            ← 返回视频列表
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {order !== undefined && order !== null && (
              <span className="tag bg-crimson text-snow-50">第 {order} 集</span>
            )}
            {duration && <span className="tag bg-night-700 text-moon-glow">{duration}</span>}
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-snow-50">{title}</h1>
          {scene && <p className="mt-4 text-moon-glow max-w-2xl">{scene}</p>}
          {synopsis && <p className="mt-4 text-moon max-w-2xl leading-relaxed">{synopsis}</p>}
        </div>
      </section>

      {/* Characters */}
      {characters.length > 0 && (
        <section className="container-page py-10 border-b border-night-600">
          <h2 className="font-serif font-bold text-xl text-snow-50 mb-4">出场角色</h2>
          <div className="flex flex-wrap gap-3">
            {characters.map((char) => {
              const name = getMetafieldValue(char.metadata?.name) || char.title
              return (
                <Link
                  key={char.id}
                  href={`/characters/${char.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-night-700 hover:bg-night-600 border border-night-500 transition-colors"
                >
                  {char.metadata?.portrait && (
                    <img
                      src={`${char.metadata.portrait.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                      alt={name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  )}
                  <span className="text-sm text-snow-100">{name}</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Shots */}
      <section className="container-page py-12">
        <h2 className="font-serif font-bold text-2xl text-snow-50 mb-6">
          分镜 · Shots <span className="text-moon text-base font-normal">({shots.length})</span>
        </h2>
        {shots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shots.map((shot) => (
              <ShotCard key={shot.id} shot={shot} />
            ))}
          </div>
        ) : (
          <p className="text-moon">该视频暂无分镜信息。</p>
        )}
      </section>
    </div>
  )
}