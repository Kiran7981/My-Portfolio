import "./App.css";

export default function MyanmarCoastalJourneyPage() {
  return (
    <main className="project-page-shell">
      <article className="project-page">
        <header className="project-page-header">
          <a className="back-button" href="#projects">
            <span aria-hidden="true">←</span>
            Back to projects
          </a>
          <span className="project-page-type">TRAVEL PROJECT · MOBILE APP</span>
        </header>

        <section className="project-hero project-hero-coastal">
          <div>
            <span className="project-hero-kicker">COASTAL TRAVEL GUIDE</span>
            <h1>Myanmar Coastal Journey</h1>
            <p>A helpful mobile guide for exploring Myanmar&apos;s coastal destinations.</p>
          </div>
          <div className="project-hero-number" aria-hidden="true">02</div>
        </section>

        <div className="project-details">
          <section>
            <span className="project-detail-label">ROLE</span>
            <h2>Project Leader</h2>
          </section>
          <section>
            <span className="project-detail-label">CONTRIBUTION</span>
            <ul>
              <li>Designed the travel guide system flow</li>
              <li>Developed the mobile application</li>
              <li>Included Myanmar coastal destination information</li>
            </ul>
          </section>
          <section>
            <span className="project-detail-label">PROJECT FOCUS</span>
            <div className="project-tags">
              <span>Mobile App</span>
              <span>Travel Guide</span>
              <span>UI / UX</span>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
