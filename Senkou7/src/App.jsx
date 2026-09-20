import './App.css'

const skills = [
  'React',
  'JavaScript',
  'Vite',
  'UI/UX',
  'HTML5',
  'CSS3',
  'Responsive Design',
]

const stats = [
  { value: '2+', label: 'Years of learning' },
  { value: '8+', label: 'Projects built' },
  { value: '100%', label: 'Focus on UX' },
]

const projects = [
  {
    title: 'Portfolio Showcase',
    text: 'A clean personal portfolio designed to highlight projects, experience, and contact information.',
    tag: 'UI/UX',
  },
  {
    title: 'Landing Page',
    text: 'A modern landing page built for product promotion with strong calls to action and visual hierarchy.',
    tag: 'Marketing',
  },
  {
    title: 'Dashboard Mockup',
    text: 'A sleek dashboard concept focused on readability, metrics, and productivity-friendly design.',
    tag: 'Dashboard',
  },
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Senkou7</div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn-primary" href="#contact">
          Let’s talk
        </a>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer</p>
            <h1>
              Hi, I’m <span>Abdennour Amlaki</span>
            </h1>
            <p className="lead">
              I design and build modern web experiences with a strong focus on
              clean interfaces, user experience, and performance.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-secondary" href="#about">
                About me
              </a>
            </div>

            <ul className="mini-list">
              <li>Responsive layouts</li>
              <li>UI/UX focused</li>
              <li>React & Vite</li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="avatar">AA</div>
            <h3>Abdennour Amlaki</h3>
            <p>Frontend Developer</p>
            <div className="pill-row">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Building simple, thoughtful digital experiences.</h2>
          </div>

          <div className="about-grid">
            <p>
              I’m a frontend developer passionate about turning ideas into clean,
              responsive, and engaging user interfaces. I enjoy working on design
              systems, landing pages, and polished web apps that feel modern and
              easy to use.
            </p>
            <p>
              My goal is to combine strong visual design with practical usability,
              so every project feels both beautiful and effective.
            </p>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>What I work with.</h2>
          </div>

          <div className="tags">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-box">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s create something great together.</h2>
          </div>

          <a className="btn btn-primary" href="mailto:abdennouramlaki@gmail.com">
            abdennouramlaki@gmail.com
          </a>
        </section>
      </main>
    </div>
  )
}
