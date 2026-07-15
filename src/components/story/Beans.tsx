import Reveal from './Reveal'
import { education, certifications } from '../../data/resumeData'

export default function Beans() {
  return (
    <Reveal id="beans">
      <section>
        <div className="eyebrow">01 — Origin</div>
        <h2 className="section-title">Beans</h2>
        <p className="section-sub">Every cup starts somewhere. Here's the foundation everything else was ground from.</p>

        <div className="beans-grid">
          <div className="origin-card">
            <h3>{education.degree}</h3>
            <div className="sub">
              {education.school} · {education.dates}
            </div>
            <div className="mono cgpa">CGPA {education.cgpa}</div>
          </div>
          <div className="origin-card">
            <h3>Certifications</h3>
            <div className="sub">Roasted and verified</div>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
