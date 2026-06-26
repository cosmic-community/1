import { getShots } from '@/lib/cosmic'
import ShotCard from '@/components/ShotCard'

export const metadata = {
  title: '分镜 Shots · 华山论剑',
}

export default async function ShotsPage() {
  const shots = await getShots()

  return (
    <div className="container-page py-16">
      <header className="mb-10">
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-snow-50">分镜 · Shots</h1>
        <p className="text-moon mt-2">全部 {shots.length} 个镜头，含运镜、台词、音效与特效</p>
      </header>
      {shots.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shots.map((shot) => (
            <ShotCard key={shot.id} shot={shot} />
          ))}
        </div>
      ) : (
        <p className="text-moon">暂无分镜内容。</p>
      )}
    </div>
  )
}