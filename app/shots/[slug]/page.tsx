// app/shots/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getShot, getMetafieldValue } from '@/lib/cosmic'
import { Video } from '@/types'

function DetailRow({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <div className="py-4 border-b border-night-600">
      <dt className="text-xs uppercase tracking-wider text-crimson-light mb-1">{label}</dt>
      <dd className="text-snow-100 leading-relaxed whitespace-pre-line">{value}</dd>
    </div>
  )
}

export default async function ShotDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const shot = await getShot(slug)

  if (!shot) {
    notFound()
  }

  const title = getMetafieldValue(shot.metadata?.title) || shot.title
  const timeRange = getMetafieldValue(shot.metadata?.time_range)
  const shotType = getMetafieldValue(shot.metadata?.shot_type)
  const cameraTechnique = getMetafieldValue(shot.metadata?.camera_technique)
  const cameraAngle = getMetafieldValue(shot.metadata?.camera_angle)
  const description = getMetafieldValue(shot.metadata?.visual_description)
  const dialogue = getMetafieldValue(shot.metadata?.dialogue)
  const soundEffects = getMetafieldValue(shot.metadata?.sound_effects)
  const visualEffects = getMetafieldValue(shot.metadata?.visual_effects)

  const videoMeta = shot.metadata?.video
  const video = typeof videoMeta === 'object' && videoMeta !== null ? (videoMeta as Video) : null

  return (
    <div className="container-page py-16 max-w-3xl">
      {video ? (
        <Link href={`/videos/${video.slug}`} className="text-crimson-light hover:text-crimson text-sm mb-4 inline-block">
          ← 返回 {getMetafieldValue(video.metadata?.title) || video.title}
        </Link>
      ) : (
        <Link href="/shots" className="text-crimson-light hover:text-crimson text-sm mb-4 inline-block">
          ← 返回分镜列表
        </Link>
      )}

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {timeRange && <span className="tag bg-night-600 text-moon-glow font-mono">{timeRange}</span>}
        {shotType && (
          <span className="tag bg-crimson-dark/40 text-crimson-light border border-crimson/30">{shotType}</span>
        )}
      </div>

      <h1 className="font-serif font-black text-3xl sm:text-4xl text-snow-50 mb-2">{title}</h1>

      {dialogue && (
        <blockquote className="my-6 border-l-4 border-crimson pl-5 py-2 bg-night-800 rounded-r-lg">
          <p className="font-serif text-lg text-snow-50 italic">「{dialogue}」</p>
        </blockquote>
      )}

      <dl>
        <DetailRow label="画面描述 Visual Description" value={description} />
        <DetailRow label="运镜技巧 Camera Technique" value={cameraTechnique} />
        <DetailRow label="拍摄角度 Camera Angle" value={cameraAngle} />
        <DetailRow label="音效 Sound Effects" value={soundEffects} />
        <DetailRow label="视觉特效 Visual Effects" value={visualEffects} />
      </dl>
    </div>
  )
}