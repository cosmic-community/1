import Link from 'next/link'
import { getVideos, getCharacters } from '@/lib/cosmic'
import VideoCard from '@/components/VideoCard'
import CharacterCard from '@/components/CharacterCard'
import Snowfall from '@/components/Snowfall'

export default async function HomePage() {
  const [videos, characters] = await Promise.all([getVideos(), getCharacters()])
  const featuredVideos = videos.slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-night-600">
        <Snowfall />
        <div className="container-page relative py-24 sm:py-32 text-center">
          <p className="text-crimson-light font-serif tracking-widest text-sm mb-4">华山之巅 · 雪夜对决</p>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-snow-50 leading-tight">
            华山论剑
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-moon text-base sm:text-lg leading-relaxed">
            千仞绝壁之上，月色如银。谢惊鸿与空相的十年之约，逐镜呈现的武侠分镜。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/videos"
              className="px-6 py-3 rounded-lg bg-crimson hover:bg-crimson-light text-snow-50 font-medium transition-colors"
            >
              浏览视频
            </Link>
            <Link
              href="/characters"
              className="px-6 py-3 rounded-lg border border-night-500 hover:border-crimson text-snow-100 font-medium transition-colors"
            >
              认识角色
            </Link>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-snow-50">视频 · Videos</h2>
            <p className="text-moon mt-1 text-sm">逐集呈现这场雪夜之战</p>
          </div>
          <Link href="/videos" className="text-crimson-light hover:text-crimson text-sm font-medium">
            查看全部 →
          </Link>
        </div>
        {featuredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-moon">暂无视频内容。</p>
        )}
      </section>

      {/* Characters */}
      {characters.length > 0 && (
        <section className="container-page py-16 border-t border-night-600">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-snow-50">角色 · Characters</h2>
              <p className="text-moon mt-1 text-sm">剑客与僧人，恩怨十年</p>
            </div>
            <Link href="/characters" className="text-crimson-light hover:text-crimson text-sm font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}