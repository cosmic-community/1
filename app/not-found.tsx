import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <div className="text-6xl mb-6">❄️</div>
      <h1 className="font-serif font-black text-3xl text-snow-50">刹那芳华，此页不见</h1>
      <p className="text-moon mt-4">你寻找的内容如雪花般消散在风雪之中。</p>
      <Link
        href="/"
        className="mt-8 inline-block px-6 py-3 rounded-lg bg-crimson hover:bg-crimson-light text-snow-50 font-medium transition-colors"
      >
        返回首页
      </Link>
    </div>
  )
}