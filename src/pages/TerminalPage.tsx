import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { profile, education, certifications, skills, experience, projects } from '../data/resumeData'
import './TerminalPage.css'

interface HistoryLine {
  id: number
  kind: 'echo' | 'output'
  content: ReactNode
}

const ASCII_CUP = `
        (  )   (   )  )
         ) (   )  (  (
         ( )  (    ) )
       _____________
      <_____________> ___
      |             |/ _ \\
      |               | | |
      |               |_| |
   ___|             |\\___/
  /    \\___________/    \\
  \\_____________________/
`

function HelpOutput() {
  return (
    <div>
      <div className="heading">Available commands</div>
      <div className="dim">(type any of these and press enter)</div>
      <br />
      <div>
        <span className="accent">whoami</span> &nbsp;&nbsp;&nbsp;&nbsp;who you're talking to
      </div>
      <div>
        <span className="accent">about</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the short version
      </div>
      <div>
        <span className="accent">experience</span> &nbsp;work history &amp; impact
      </div>
      <div>
        <span className="accent">projects</span> &nbsp;&nbsp;things I built on my own time
      </div>
      <div>
        <span className="accent">skills</span> &nbsp;&nbsp;&nbsp;&nbsp;languages, frameworks, tools
      </div>
      <div>
        <span className="accent">education</span> degree &amp; certifications
      </div>
      <div>
        <span className="accent">contact</span> &nbsp;&nbsp;how to reach me
      </div>
      <div>
        <span className="accent">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wipe the screen
      </div>
      <div>
        <span className="accent">sudo make-coffee</span> (try it)
      </div>
    </div>
  )
}

function WhoamiOutput() {
  return (
    <div className="out">
      {profile.name} — {profile.role.split('—')[0].trim()}, {profile.location}.
      <br />
      Currently SD-1 at Reliance Platforms, building developer platforms and auth systems.
      <br />
      2.9 years of turning "it should probably scale" into things that actually do.
    </div>
  )
}

function AboutOutput() {
  return (
    <div className="out">
      {profile.longSummary}
      <br />
      <br />
      Track record: <span className="stat">33%</span> faster page loads, <span className="stat">50%</span> lower
      frontend rendering cost, <span className="stat">45%</span> better debugging efficiency.
    </div>
  )
}

function EducationOutput() {
  return (
    <div>
      <div className="heading">Education</div>
      <div className="out">
        {education.degree} — {education.school}
        <br />
        {education.dates} · CGPA {education.cgpa}
      </div>
      <br />
      <div className="heading">Certifications</div>
      <div className="out">
        {certifications.map((c) => (
          <div key={c}>- {c}</div>
        ))}
      </div>
    </div>
  )
}

function SkillsOutput() {
  return (
    <div>
      {skills.map((group) => (
        <div key={group.label}>
          <span className="heading">{group.label.padEnd(12, ' ')}</span> <span className="out">{group.items.join(', ')}</span>
        </div>
      ))}
    </div>
  )
}

function ExperienceOutput() {
  return (
    <div>
      {experience.map((entry) => (
        <div key={entry.role + entry.company} style={{ marginBottom: 18 }}>
          <span className="heading">{entry.role}</span> <span className="dim">{entry.company} · {entry.dates}</span>
          {entry.subProjects.map((sub) => (
            <div key={sub.title || sub.bullets[0]} style={{ marginTop: 8 }}>
              {sub.title && (
                <div>
                  <span className="accent">{sub.title}</span>{' '}
                  {sub.stack && <span className="dim">{sub.stack}</span>}
                </div>
              )}
              <ul className="out-list">
                {sub.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {sub.stats && (
                <div className="out">
                  {sub.stats.map((s) => (
                    <span key={s} className="stat" style={{ marginRight: 14 }}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function ProjectsOutput() {
  return (
    <div>
      {projects.map((p) => (
        <div key={p.name} style={{ marginBottom: 14 }}>
          <span className="accent">{p.name}</span> <span className="dim">{p.stack}</span>
          <ul className="out-list">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer">
              {p.repo}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

function ContactOutput() {
  return (
    <div className="out">
      Email &nbsp;&nbsp;&nbsp;<a href={`mailto:${profile.email}`}>{profile.email}</a>
      <br />
      <br />
      Location {profile.location}
      <br />
      GitHub &nbsp;&nbsp;
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        {profile.github === '#' ? 'github.com/Siwani-tech' : profile.github}
      </a>
      <br />
      LinkedIn{' '}
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        {profile.linkedin === '#' ? 'linkedin.com/in/siwani-sinha-564a03191' : profile.linkedin}
      </a>
    </div>
  )
}

const COMMANDS: Record<string, () => ReactNode> = {
  help: () => <HelpOutput />,
  menu: () => <HelpOutput />,
  whoami: () => <WhoamiOutput />,
  about: () => <AboutOutput />,
  education: () => <EducationOutput />,
  skills: () => <SkillsOutput />,
  experience: () => <ExperienceOutput />,
  projects: () => <ProjectsOutput />,
  contact: () => <ContactOutput />,
}

let idCounter = 0
function nextId() {
  idCounter += 1
  return idCounter
}

export default function TerminalPage() {
  const [lines, setLines] = useState<HistoryLine[]>([])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = 'siwani@terminal ~'
    setLines([
      {
        id: nextId(),
        kind: 'output',
        content: (
          <div>
            <div className="heading">{profile.name}</div>
            <div className="dim">— full-stack engineer, brewed on Golang &amp; React</div>
            <div className="dim">type 'help' or 'menu' to see what's on order.</div>
          </div>
        ),
      },
    ])
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    screenRef.current?.scrollTo(0, screenRef.current.scrollHeight)
    window.scrollTo(0, document.body.scrollHeight)
  }, [lines])

  function runCommand(raw: string) {
    const cmd = raw.trim()
    if (cmd === '') return

    setLines((prev) => [...prev, { id: nextId(), kind: 'echo', content: cmd }])

    const key = cmd.toLowerCase()

    if (key === 'clear' || key === 'cls') {
      setLines([])
      return
    }
    if (key === 'sudo make-coffee') {
      setLines((prev) => [
        ...prev,
        {
          id: nextId(),
          kind: 'output',
          content: (
            <div>
              <pre className="ascii">{ASCII_CUP}</pre>
              <span className="out accent">brewing... done. here's your coffee. ☕</span>
            </div>
          ),
        },
      ])
      return
    }
    if (COMMANDS[key]) {
      setLines((prev) => [...prev, { id: nextId(), kind: 'output', content: COMMANDS[key]() }])
      return
    }
    setLines((prev) => [
      ...prev,
      {
        id: nextId(),
        kind: 'output',
        content: (
          <span className="out">
            command not found: <span className="accent">{cmd}</span> — type <span className="accent">help</span> to
            see what's on the menu.
          </span>
        ),
      },
    ])
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      runCommand(value)
      if (value.trim() !== '') setHistory((h) => [...h, value])
      setHistoryIdx(history.length + 1)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1
        setHistoryIdx(newIdx)
        setValue(history[newIdx] ?? '')
      }
      e.preventDefault()
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1
        setHistoryIdx(newIdx)
        setValue(history[newIdx] ?? '')
      } else {
        setHistoryIdx(history.length)
        setValue('')
      }
      e.preventDefault()
    }
  }

  return (
    <div className="terminal-page" onClick={() => inputRef.current?.focus()}>
      <div className="titlebar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="name">siwani@coffee-terminal — 92x30</span>
      </div>

      <div id="screen" ref={screenRef}>
        {lines.map((line) =>
          line.kind === 'echo' ? (
            <div className="prompt-line" key={line.id}>
              <span className="prompt">barista@siwani:~$</span>
              <span className="cmd-echo">{line.content}</span>
            </div>
          ) : (
            <div className="line" key={line.id}>
              {line.content}
            </div>
          ),
        )}
      </div>

      <div className="input-row">
        <span className="prompt">barista@siwani:~$</span>
        <input
          ref={inputRef}
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="terminal command input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="cursor" />
      </div>

      <div className="footer-link">
        prefer scrolling? <Link to="/">back to the story version →</Link>
        <br />
        <span className="copyright-icon">©</span> {new Date().getFullYear()} Built &amp; Designed by Siwani Sinha ·
        All rights reserved
      </div>
    </div>
  )
}
