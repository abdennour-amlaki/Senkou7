import './App.css'

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'HTML5', icon: '🔷' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'UI/UX', icon: '✨' },
  { name: 'Responsive', icon: '📱' },
  { name: 'GitHub', icon: '🐙' },
]

const stats = [
  { value: 'React', label: 'Main stack', icon: '⚛️' },
  { value: '100%', label: 'Responsive approach', icon: '📱' },
  { value: 'Open', label: 'Available for projects', icon: '🚀' },
]

const projects = [
  {
    title: 'Senkou7 Portfolio',
    text: 'A modern personal portfolio built with React and Vite to present my skills, selected work, and contact details.',
    tag: 'React + Vite',
    icon: '💼',
  },
  {
    title: 'Responsive Interfaces',
    text: 'Clean, responsive interfaces designed to work smoothly across desktop, tablet, and mobile screens.',
    tag: 'Frontend',
    icon: '📐',
  },
  {
    title: 'UI/UX Concepts',
    text: 'Simple and useful interface concepts that focus on clear content, visual hierarchy, and a comfortable user experience.',
    tag: 'UI/UX',
    icon: '🎯',
  },
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Senkou7 home">
          Senkou7
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn-primary" href="mailto:abdennouramlaki@gmail.com">
          Let’s talk
        </a>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer · Morocco</p>
            <h1>
              Hi, I’m <span>Abdennour Amlaki</span>
            </h1>
            <p className="lead">
              I build modern, responsive websites with React, JavaScript, and a
              strong eye for clean UI/UX. I turn ideas into fast and useful web
              experiences.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View my work
              </a>
              <a className="btn btn-secondary" href="mailto:abdennouramlaki@gmail.com">
                Start a project
              </a>
            </div>

            <ul className="mini-list">
              <li>📍 Available for freelance</li>
              <li>⚛️ React & Vite</li>
              <li>📱 Mobile-first</li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="avatar">AA</div>
            <h3>Abdennour Amlaki</h3>
            <p>Frontend Developer & UI enthusiast</p>
            <div className="pill-row">
              <span>⚛️ React</span>
              <span>🟨 JS</span>
              <span>🎨 UI/UX</span>
            </div>
          </div>
        </section>

        <section className="stats-grid" aria-label="Portfolio highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <div className="stat-icon">{stat.icon}</div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Designing with purpose, coding with care.</h2>
          </div>

          <div className="about-grid">
            <p>
              I’m Abdennour, a frontend developer from Morocco. I enjoy creating
              polished interfaces that are easy to understand, pleasant to use,
              and ready for every screen size.
            </p>
            <p>
              My approach combines thoughtful design, reusable React components,
              and clean code. I’m always learning and looking for better ways to
              turn a concept into a real digital product.
            </p>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">My toolkit</p>
            <h2>Technologies I use.</h2>
          </div>

          <div className="tags">
            {skills.map((skill) => (
              <span key={skill.name} className="tag">
                <span className="tag-icon">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects made with attention to detail.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-icon">{project.icon}</div>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-box">
          <div>
            <p className="eyebrow">Have an idea?</p>
            <h2>Let’s build something useful together.</h2>
          </div>

          <a className="btn btn-primary" href="mailto:abdennouramlaki@gmail.com">
            Contact me
          </a>
        </section>
      </main>
    </div>
  )
}
