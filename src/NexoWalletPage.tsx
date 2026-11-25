import "./App.css";
import nexo1 from "./assets/nexo1.jpg";
import nexo2 from "./assets/nexo2.png";
import nexo3 from "./assets/nexo3.png";
import nexo4 from "./assets/nexo4.png";
import nexo5 from "./assets/nexo5.png";
import nexo6 from "./assets/nexo6.png";
import nexo7 from "./assets/nexo7.png";
import nexo8 from "./assets/nexo8.png";
import nexo9 from "./assets/nexo9.png";
import nexologo from "./assets/nexologo.png";

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

        <section
          className="project-hero project-hero-nexo"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(45, 54, 112, 0.62), rgba(45, 54, 112, 0.3)), url("${nexologo}")`,
          }}
        >
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
        <span className="project-detail-label">PROJECT SCREENSHOTS</span>
        <div className="project-images-section">
          <section className="project-images" aria-label="Project screenshots">
          <img src={nexo1} alt="Home Page" />
          <img src={nexo2} alt="Transfer Page" />
          <img src={nexo3} alt="QR Section" />
          <img src={nexo4} alt="Cash Out Page" />
          <img src={nexo5} alt="Quick Pay" />
          <img src={nexo6} alt="E Top Up" />
          <img src={nexo7} alt="Payment History" />
          <img src={nexo8} alt="Bank Account link" />
          <img src={nexo9} alt="Settings" />
        </section>
        </div>
      </article>
    </main>
  );
}
