import { useEffect, useState } from 'react'

const MAX_FILL_HEIGHT = 42

export default function ScrollGauge() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? Math.min(1, scrollTop / max) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const fillHeight = MAX_FILL_HEIGHT * pct

  return (
    <div className="gauge" aria-hidden="true">
      <div className="gauge-label">{Math.round(pct * 100)}%</div>
      <svg viewBox="0 0 52 60">
        <path
          d="M8 14 H40 L36 52 Q36 56 32 56 H16 Q12 56 12 52 Z"
          fill="none"
          stroke="#c8a074"
          strokeWidth={2}
        />
        <clipPath id="cupClip">
          <path d="M8 14 H40 L36 52 Q36 56 32 56 H16 Q12 56 12 52 Z" />
        </clipPath>
        <rect
          x={8}
          y={56 - fillHeight}
          width={32}
          height={fillHeight}
          fill="#b8733a"
          clipPath="url(#cupClip)"
        />
        <path d="M40 20 Q50 20 50 30 Q50 40 40 38" fill="none" stroke="#c8a074" strokeWidth={2} />
      </svg>
    </div>
  )
}
