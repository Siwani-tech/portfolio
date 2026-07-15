import Reveal from './Reveal'
import { experience } from '../../data/resumeData'

export default function Brew() {
  return (
    <Reveal id="brew">
      <section>
        <div className="eyebrow">03 — Extraction</div>
        <h2 className="section-title">Brew</h2>
        <p className="section-sub">
          Where the real flavor comes out — two and a half years of steeping through production systems.
        </p>

        <div className="brew-line">
          {experience.map((entry) => (
            <div className="brew-entry" key={entry.role + entry.company}>
              <h3>{entry.role}</h3>
              <div className="role-meta">
                {entry.company} · {entry.dates}
              </div>

              {entry.subProjects.map((sub) => (
                <div className="sub-project" key={sub.title || sub.bullets[0]}>
                  {sub.title && <h4>{sub.title}</h4>}
                  {sub.stack && <span className="stack">{sub.stack}</span>}
                  <ul>
                    {sub.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {sub.stats && (
                    <div className="stat-row">
                      {sub.stats.map((stat) => {
                        const [bold, ...rest] = stat.split(' ')
                        return (
                          <div className="stat" key={stat}>
                            <b>{bold}</b> {rest.join(' ')}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
