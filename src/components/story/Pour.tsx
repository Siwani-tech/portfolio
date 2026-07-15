import Reveal from './Reveal'
import { projects } from '../../data/resumeData'

export default function Pour() {
  return (
    <Reveal id="pour">
      <section>
        <div className="eyebrow">04 — Serve</div>
        <h2 className="section-title">Pour</h2>
        <p className="section-sub">Personal projects, built and poured outside of working hours.</p>

        <div className="pour-grid">
          {projects.map((project) => (
            <div className="pour-card" key={project.name}>
              <h3>{project.name}</h3>
              <div className="stack">{project.stack}</div>
              {project.bullets.map((bullet) => (
                <p key={bullet}>{bullet}</p>
              ))}
              {project.repo && (
                <a className="repo" href={project.repo} target="_blank" rel="noopener noreferrer">
                  {project.repo.replace('https://', '')} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
