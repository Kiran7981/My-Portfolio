import "./App.css";

export default function NexoWalletPage() {
  return (
    <main className="project-page-shell">
      <article className="project-page">
        <header className="project-page-header">
          <a className="back-button" href="#projects">
            <span aria-hidden="true">←</span>
            Back to projects
          </a>
          <span className="project-page-type">UNIVERSITY SPECIAL PROJECT · MOBILE APP</span>
        </header>

        <section className="project-hero project-hero-nexo">
          <div>
            <span className="project-hero-kicker">MOBILE BANKING APPLICATION</span>
            <h1>Nexo Wallet</h1>
            <p>Online payment system with a clear, secure and easy-to-use mobile experience.</p>
          </div>
          <div className="project-hero-number" aria-hidden="true">01</div>
        </section>

        <div className="project-details">
          <section>
            <span className="project-detail-label">ROLE</span>
            <h2>Project Leader</h2>
          </section>
          <section>
            <span className="project-detail-label">CONTRIBUTION</span>
            <ul>
              <li>Designed the system flow</li>
              <li>Developed the mobile banking application</li>
              <li>Created simple access to financial features</li>
            </ul>
          </section>
          <section>
            <span className="project-detail-label">PROJECT FOCUS</span>
            <div className="project-tags">
              <span>Mobile App</span>
              <span>Payment System</span>
              <span>UI / UX</span>
            </div>
          </section>
        </div>
        <section className="project-repository" aria-label="Project source code">
          <span className="project-detail-label">SOURCE CODE</span>
          <a
            className="repository-link"
            href="https://github.com/Alastor428/Sepcial-Project-MIIT-2025--2026-.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub repository <span aria-hidden="true">Nexo Wallet</span>
          </a>
        </section>
      </article>
    </main>
  );
}
