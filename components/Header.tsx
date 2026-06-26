import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-night-900/80 border-b border-night-600">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🎬</span>
          <span className="font-serif font-bold text-lg text-snow-50 group-hover:text-crimson-light transition-colors">
            华山论剑
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/videos" className="text-moon hover:text-snow-50 transition-colors">
            视频 Videos
          </Link>
          <Link href="/shots" className="text-moon hover:text-snow-50 transition-colors">
            分镜 Shots
          </Link>
          <Link href="/characters" className="text-moon hover:text-snow-50 transition-colors">
            角色 Characters
          </Link>
        </nav>
      </div>
    </header>
  )
}