import { profile } from '../../data/resumeData'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="eyebrow">Portfolio · est. 2023</div>
      <h1>
        Siwani
        <br />
        Sinha
      </h1>
      <div className="role">{profile.role}</div>
      <p className="desc">{profile.summary}</p>
      <div className="meta">
        <span>MUMBAI, IN</span>
        <span>·</span>
        <span>2.9Y EXPERIENCE</span>
        <span>·</span>
        <span>SD-1 @ RELIANCE</span>
      </div>

      <div className="cup-scene" aria-hidden="true">
        <svg viewBox="0 0 220 260">
          <g className="steam-wisp w1">
            <path
              d="M90 60 Q80 45 92 32 Q104 20 92 6"
              stroke="#f3e6d5"
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              opacity={0.5}
            />
          </g>
          <g className="steam-wisp w2">
            <path
              d="M120 60 Q110 45 122 32 Q134 20 122 6"
              stroke="#f3e6d5"
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              opacity={0.5}
            />
          </g>
          <g className="steam-wisp w3">
            <path
              d="M105 55 Q95 40 107 27 Q119 15 107 2"
              stroke="#f3e6d5"
              strokeWidth={2.5}
              fill="none"
              strokeLinecap="round"
              opacity={0.4}
            />
          </g>
          <path
            d="M50 90 H160 L148 210 Q146 226 130 226 H80 Q64 226 62 210 Z"
            fill="#3d2418"
            stroke="#c8a074"
            strokeWidth={2.5}
          />
          <ellipse cx={105} cy={90} rx={55} ry={10} fill="#6f4522" />
          <ellipse cx={105} cy={90} rx={47} ry={7} fill="#b8733a" />
          <path d="M160 105 Q192 105 192 135 Q192 165 160 158" fill="none" stroke="#c8a074" strokeWidth={3} />
        </svg>
      </div>

      <div className="scroll-cue">SCROLL TO BREW ↓</div>
    </section>
  )
}
