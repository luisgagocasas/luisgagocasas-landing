import { contacts, experience, navLinks, profile, projects, skills } from './content/site'

function App() {
  return (
    <div className="page-shell">

      {/* ── NAVEGACIÓN STICKY ─────────────────── */}
      <header className="site-header">
        <div className="nav-inner wrap-full">
          <a className="brand" href="#inicio" aria-label="Inicio">
            <span className="brand-mark">LG</span>
            <span className="brand-name">Luis Gago Casas</span>
          </a>
          <div className="nav-right">
            <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
            <label htmlFor="nav-toggle" className="nav-toggle-btn" aria-label="Abrir menú de navegación">
              <span />
              <span />
              <span />
            </label>
            <nav className="nav-links" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
              <a
                className="nav-cta"
                href={profile.contactUrl}
                target="_blank"
                rel="noreferrer me"
              >
                Contactar
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────── */}
      <section className="hero-section" id="inicio">
        <div className="hero-topbar wrap-full">
          <span className="available-pill">
            <span className="pulse-dot" />
            Disponible para proyectos
          </span>
          <div className="topbar-links">
            <a href={profile.contactUrl} target="_blank" rel="noreferrer me">LinkedIn</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer me">GitHub</a>
          </div>
        </div>

        <div className="hero-card wrap-full">
          <div className="hero-body">
            <div className="hero-left">
              <p className="hero-eyebrow">Arequipa, Perú — CEO &amp; CTO</p>
              <h1 className="hero-title">
                SOFTWARE<sup>+</sup> CLOUD<sup>+</sup>
                <br />
                PRODUCTO<sup>+</sup> API<sup>+</sup>
              </h1>
              <p className="hero-bio">{profile.intro}</p>
              <div className="hero-ctas">
                <a className="btn-outline-dark" href="#experiencia">
                  Ver experiencia
                </a>
                <a
                  className="btn-purple"
                  href={profile.contactUrl}
                  target="_blank"
                  rel="noreferrer me"
                >
                  Contactar por LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-photo-panel">
              <img
                src="/luisgagocasas.png"
                alt="Luis Gago Casas — CEO y CTO de Ayphu"
                className="portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE MÍ ──────────────────────────── */}
      <section className="section" id="sobre-mi">
        <div className="wrap">
          <p className="section-tag">Sobre mí</p>
          <div className="about-grid">
            <p className="about-bio">{profile.summary}</p>
            <div className="skills-block">
              <p className="skills-label">Habilidades</p>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA ───────────────────────── */}
      <section className="section section-soft" id="experiencia">
        <div className="wrap">
          <p className="section-tag">Experiencia</p>
          <div className="exp-list">
            {experience.map((item) => (
              <article className="exp-item" key={item.company}>
                <div className="exp-meta">
                  <span className="exp-badge">{item.type}</span>
                  <p className="exp-period">{item.period}</p>
                  <p className="exp-company">{item.company}</p>
                  {item.url && (
                    <a
                      href={item.url}
                      className="exp-ext-link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Visitar ↗
                    </a>
                  )}
                  <a
                    href={profile.contactUrl}
                    className="exp-linkedin-link"
                    target="_blank"
                    rel="noreferrer me"
                  >
                    Más en LinkedIn ↗
                  </a>
                </div>
                <div className="exp-body">
                  <p className="exp-role">{item.role}</p>
                  <p className="exp-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ─────────────────────────── */}
      <section className="section" id="proyectos">
        <div className="wrap">
          <p className="section-tag">Proyectos</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-label">{project.label}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project-link"
                  >
                    ↗
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="stack-list">
                  {project.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="project-card project-soon">
              <span className="project-label">Próximamente</span>
              <h3>Más proyectos</h3>
              <p>Nuevos productos y herramientas en desarrollo continuo.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────── */}
      <footer className="site-footer" id="contacto">
        <div className="wrap">
          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-col-label">Ubicación</p>
              <p>Arequipa</p>
              <p>Perú</p>
            </div>
            <div className="footer-col">
              <p className="footer-col-label">Conectar</p>
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer me"
                  className="footer-link"
                >
                  {c.label}
                </a>
              ))}
            </div>
            <div className="footer-col">
              <p className="footer-col-label">Contacto directo</p>
              <a
                href={profile.contactUrl}
                className="btn-footer"
                target="_blank"
                rel="noreferrer me"
              >
                Escribir por LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Luis Gago Casas</span>
            <a
              href="https://ayphu.com"
              className="ayphu-shield"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Sitio protegido por Ayphu Cloud"
            >
              <svg className="shield-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1.5L2.5 4.5v5c0 4.142 3.134 7.82 7.5 8.5 4.366-.68 7.5-4.358 7.5-8.5v-5L10 1.5z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Protegido por Ayphu
            </a>
            <span>luisgagocasas.com</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
