export interface SubProject {
  title: string
  stack?: string
  bullets: string[]
  stats?: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  dates: string
  subProjects: SubProject[]
}

export interface Project {
  name: string
  stack: string
  bullets: string[]
  repo?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Siwani Sinha',
  role: 'Software Developer — brewed on Golang & React',
  location: 'Mumbai, Maharashtra, India',
  email: 'siwanisinhaa@gmail.com',
  github: 'https://github.com/Siwani-tech',
  linkedin: 'https://linkedin.com/in/siwani-sinha-564a03191',
  summary:
    "I build authentication systems, developer platforms, and internal tooling at Reliance — the kind of work that's mostly invisible when it's done right. This is that work, poured out.",
  longSummary:
    'Software Developer with 2.9 years of experience building scalable web applications, authentication systems, developer platforms, and internal tooling at Reliance. Proficient in React.js, Next.js, TypeScript, and Golang.',
}

export const education = {
  degree: 'B.Tech, Computer Science',
  school: 'Nutan College of Engineering and Research, Pune',
  dates: '2019 – 2023',
  cgpa: '8.22 / 10',
}

export const certifications: string[] = [
  'Meta Frontend Developer Professional Certificate',
  'Meta Back-End Developer: APIs',
]

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Golang', 'Python'] },
  { label: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3 / SCSS', 'ReactFlow'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC'] },
  { label: 'Databases', items: ['MongoDB', 'Redis'] },
  {
    label: 'Concepts',
    items: ['System Design', 'API Design', 'Caching', 'Performance Optimization', 'Microservices'],
  },
  { label: 'Tools', items: ['Git / GitHub', 'Postman', 'Lighthouse', 'Razorpay', 'Gemini AI'] },
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Developer (SD-1)',
    company: 'Reliance Platforms Limited, Mumbai',
    dates: 'Oct 2023 – Present',
    subProjects: [
      {
        title: 'JioCX Developer Portal',
        stack: 'React.js · TypeScript · REST APIs',
        bullets: [
          'Led end-to-end development of API onboarding and key management workflows for enterprise developers',
          'Built a reusable UI component library, reducing feature development effort',
          'Improved onboarding flows and documentation, reducing integration errors',
        ],
        stats: ['4.2s → 2.8s page load (−33%)', '40% less feature effort', '25% fewer integration errors'],
      },
      {
        title: 'WhatsApp Customer Onboarding Platform',
        stack: 'Golang · React.js · Razorpay · REST APIs',
        bullets: [
          'Built multi-tenant onboarding workflows for enterprise WhatsApp Business account activation',
          'Designed and implemented authentication and authorization services in Golang',
          'Built backend APIs supporting the full customer lifecycle — onboarding to billing',
        ],
        stats: ['30% faster publishing', '35% less manual finance effort'],
      },
      {
        title: 'Observability Platform',
        stack: 'Golang · React.js  · REST APIs',
        bullets: [
          'Built log dashboards and operational monitoring interfaces for internal engineering teams',
          'Developed authentication and RBAC access-control features in Golang',
        ],
        stats: ['45% faster debugging', '50% lower rendering cost'],
      },
      {
        title: 'Jio Examination & Proctoring Platform',
        stack: 'React.js · TypeScript · Golang',
        bullets: [
          'Developed candidate-facing examination workflows and secure session management',
          'Implemented anti-tampering and session integrity mechanisms for high-concurrency exams',
        ],
      },
      // {
      //   title: 'Mentorship',
      //   bullets: ['Mentored software engineering interns through feature development, code reviews, and debugging'],
      // },
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'HexaHash Technologies, Bengaluru',
    dates: 'May 2022 – Jun 2022',
    subProjects: [
      {
        title: '',
        stack: 'React.js · JavaScript',
        bullets: [
          'Developed frontend features using React.js and JavaScript within an agile engineering team',
          'Participated in code reviews, testing cycles, and iterative implementation',
        ],
      },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Text2ArchFlow',
    stack: 'React · TypeScript · Golang · Gemini AI · ReactFlow',
    bullets: [
      'AI-powered system design generator that converts natural language prompts into interactive architecture diagrams',
      'Go backend integrating Gemini AI to produce components, data flow, DB/caching recommendations, and scaling insights',
    ],
    repo: 'https://github.com/Siwani-tech/Text2ArchFlow',
  },
  {
    name: 'GoAuth-Lite',
    stack: 'Golang · JWT · REST APIs',
    bullets: [
      'Production-ready authentication service with registration, login, JWT issuance, and protected route middleware',
      'Modular architecture with clean separation of concerns for scalability and maintainability',
    ],
    repo: 'https://github.com/Siwani-tech/GoAuth-Lite',
  },
  {
    name: 'GoNotify',
    stack: 'Golang · REST APIs',
    bullets: [
      'Notification service exposing REST APIs for triggering and managing event-driven notifications',
      'Extensible backend architecture ready for multi-channel integration (email, SMS, push)',
    ],
    repo: 'https://github.com/Siwani-tech/GoNotify',
  },
]
