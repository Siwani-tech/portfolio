import { Link } from 'react-router-dom'
import { profile } from '../../data/resumeData'

export default function Sip() {
  return (
    <section className="sip" id="sip">
      <div className="eyebrow center">05 — Enjoy</div>
      <h2 className="sip-title">Let's grab a coffee.</h2>
      <p className="sip-desc">
        Open to full-stack and backend roles where I can keep building things people rely on without thinking about.
      </p>
      <div className="contact-row">
        <a className="contact-btn primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="contact-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="contact-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="alt-link">
        <Link to="/terminal">or, run it as a terminal →</Link>
      </p>
    </section>
  )
}
