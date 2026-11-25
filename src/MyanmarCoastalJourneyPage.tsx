import "./App.css";
import waveway1 from "./assets/waveway1.png";
import waveway2 from "./assets/waveway2.png";
import waveway3 from "./assets/waveway3.jpg";
import waveway4 from "./assets/waveway4.png";
import waveway5 from "./assets/waveway5.png";
import waveway6 from "./assets/waveway6.png";
import waveway7 from "./assets/waveway7.png";
import waveway8 from "./assets/waveway8.jpg";
import waveway9 from "./assets/waveway9.jpg";
import waveway10 from "./assets/waveway10.jpg";
import waveway11 from "./assets/waveway11.jpg";
import waveway12 from "./assets/waveway12.jpg";
import waveway13 from "./assets/waveway13.jpg";
import wavewaylogo from "./assets/wavewaylogo.png";

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

        <section className="project-hero project-hero-coastal"
        style={{
            backgroundImage: `linear-gradient(135deg, rgba(45, 54, 112, 0.62), rgba(45, 54, 112, 0.3)), url("${wavewaylogo}")`,
          }}>
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
        <section className="project-repository" aria-label="Project source code">
          <span className="project-detail-label">SOURCE CODE</span>
          <a
            className="repository-link"
            href="https://github.com/Alastor428/Frontend-Repo-for-Myanmar-Coastal-Journey-"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub repository <span aria-hidden="true">Myanmar Coastal Journey (Frontend)</span>
          </a>
          <a
            className="repository-link"
            href="https://github.com/Alastor428/Backend-Repo-for-Myanmar-Coastal-Journey.git"
            target="_blank"
            rel="noopener noreferrer" 
          >
            View GitHub repository <span aria-hidden="true">Myanmar Coastal Journey (Backend)</span>
          </a>
        </section>
        <span className="project-detail-label">PROJECT SCREENSHOTS</span>
        <div className="project-images-section">
          <section className="project-images" aria-label="Project screenshots">
          <img src={waveway1} alt="Login" />
          <img src={waveway2} alt="Sign Up" />
          <img src={waveway3} alt="Home Page" />
          <img src={waveway4} alt="Ticket Booking" />
          <img src={waveway5} alt="Seat Selection" />
          <img src={waveway6} alt="Tour Guide" />
          <img src={waveway7} alt="Tour Guide Results" />
          <img src={waveway8} alt="Package Details" />
          <img src={waveway9} alt="Travel Packages" />
          <img src={waveway10} alt="Hotel Booking" />
          <img src={waveway11} alt="Our Team" />
          <img src={waveway12} alt="About Us" />
          <img src={waveway13} alt="Settings" />
        </section>
        </div>
      </article>
    </main>
  );
}
