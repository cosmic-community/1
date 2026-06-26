export default function Snowfall() {
  const flakes = Array.from({ length: 24 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {flakes.map((_, i) => {
        const left = (i * 37) % 100
        const delay = (i % 10) * 1.1
        const duration = 8 + (i % 6) * 2
        const size = 2 + (i % 4)
        return (
          <span
            key={i}
            className="absolute top-0 rounded-full bg-snow-100/70 animate-snow-fall"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        )
      })}
    </div>
  )
}