import Reveal from './Reveal'
import { skills } from '../../data/resumeData'

export default function Grind() {
  return (
    <Reveal id="grind">
      <section>
        <div className="eyebrow">02 — Consistency</div>
        <h2 className="section-title">Grind</h2>
        <p className="section-sub">The right grind size for the right extraction. These are the tools I reach for daily.</p>

        <div className="grind-board">
          {skills.map((group) => (
            <div className="grind-row" key={group.label}>
              <div className="label">{group.label}</div>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
