import { getVideos } from '@/lib/cosmic'
import VideoCard from '@/components/VideoCard'

export const metadata = {
  title: '视频 Videos · 华山论剑',
}

export default async function VideosPage() {
  const videos = await getVideos()

  return (
    <div className="container-page py-16">
      <header className="mb-10">
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-snow-50">视频 · Videos</h1>
        <p className="text-moon mt-2">全部 {videos.length} 集，逐集呈现华山雪夜对决</p>
      </header>
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <p className="text-moon">暂无视频内容。</p>
      )}
    </div>
  )
}