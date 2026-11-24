import "./App.css";
import { useEffect, useState } from "react";
import portraitImage from "./assets/portrait.jpg";
import reactLogo from "./assets/react.svg";
import javascriptLogo from "./assets/javascript.svg";
import nodeLogo from "./assets/nodejs.svg";
import typescriptLogo from "./assets/typescript.svg";
import rlogo from"./assets/r.jpg";
import figmaLogo from "./assets/figma.svg";
import githubLogo from "./assets/github.svg";
import telegramLogo from "./assets/telegram.svg";
import NexoWalletPage from "./NexoWalletPage";
import MyanmarCoastalJourneyPage from "./MyanmarCoastalJourneyPage";

const currentYear = new Date().getFullYear();

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.3 8h9.4M8.2 3.5 12.7 8l-4.5 4.5" />
    </svg>
  );
}

function App() {
  const [project, setProject] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setProject(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (project === "#nexo-wallet") {
    return <NexoWalletPage />;
  }

  if (project === "#coastal-journey") {
    return <MyanmarCoastalJourneyPage />;
  }

  return (
    <main className="portfolio-shell">
      <div className="portfolio">
        <header className="topbar">
          <a className="wordmark" href="#home" aria-label="Cozydiadora home">
            <span>Personal Portfolio</span>
          </a>
          <nav className="topbar-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Selected work</a>
          </nav>
        </header>

        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR WORK
            </div>
            <h1 id="hero-title">
              Hi, I&apos;m a
              <br />
              Frontend
              <br />
              Developer
            </h1>
            <p className="hero-description">
              Junior Frontend Developer with experience in UI/UX design and two
              mobile app projects. Skilled in creating clean, user-friendly
              interfaces and improving application flow through practical
              project work.
            </p>
            <a
              className="button button-dark contact-button"
              href="mailto:linn.pa.pa.khaing.2020.2021.fb@gmail.com"
            >
              Get in touch <ArrowIcon />
            </a>
            <p className="location-note">
              <span className="location-pin" aria-hidden="true">
                ⌖
              </span>
              Cantharyar,Chanmyathazi Township, Mandalay, Myanmar
            </p>
            <div className="skills-list" aria-label="Skills and tools">
              <div className="skill-item" title="React Native">
                <span className="skill-icon">
                  <img src={reactLogo} alt="React Native" />
                </span>
                <span>React Native</span>
              </div>
              <div className="skill-item" title="JavaScript">
                <span className="skill-icon">
                  <img src={javascriptLogo} alt="JavaScript" />
                </span>
                <span>JavaScript</span>
              </div>
              <div className="skill-item" title="Node.js">
                <span className="skill-icon">
                  <img src={nodeLogo} alt="Node.js" />
                </span>
                <span>Node.js</span>
              </div>
              <div className="skill-item" title="TypeScript">
                <span className="skill-icon">
                  <img src={typescriptLogo} alt="TypeScript" />
                </span>
                <span>TypeScript</span>
              </div>
              <div className="skill-item" title="Figma">
                <span className="skill-icon">
                  <img src={figmaLogo} alt="Figma" />
                </span>
                <span>Figma</span>
              </div>
              <div className="skill-item" title="R">
                <span className="skill-icon">
                  <img src={rlogo} alt="R" />
                </span>
                <span>R</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" id="about">
            <img
              className="portrait"
              src={portraitImage}
              alt="Portrait of Linn Pa Pa Khaing"
            />

            <div className="name-card">
              <h2>Linn Pa Pa Khaing</h2>
              <p>Junior Frontend Developer</p>
            </div>

            <div className="education-card" id="work">
              <h3>
                Education <span>(2022 to Current)</span>
              </h3>
              <strong>
                MYANMAR INSTITUTE OF
                <br />
                INFORMATION TECHNOLOGY
              </strong>
              <p>Electronic and Communication Engineering (ECE) Major</p>
            </div>
          </div>
        </section>

        <section className="mission-card" aria-label="My design mission">
          <div className="mission-copy">
            <span className="mission-kicker">A LITTLE ABOUT HOW I WORK</span>
            <p>
              My mission is to help people and businesses move forward with
              clarity, care, and a little bit of delight.
            </p>
          </div>
          <div className="contact-links" aria-label="Contact links">
            <a
              className="contact-link"
              href="mailto:linn.pa.pa.khaing.2020.2021.fb@gmail.com"
              aria-label="Email Linn Pa Pa Khaing"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18v14H3z" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span>Email</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Kiran7981"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Linn Pa Pa Khaing on GitHub"
              title="GitHub"
            >
              <img src={githubLogo} alt="" />
              <span>GitHub</span>
            </a>
            <a
              className="contact-link"
              href="https://t.me/kiran_7981"
              target="_blank"
              rel="noreferrer"
              aria-label="Message Linn Pa Pa Khaing on Telegram"
              title="Telegram"
            >
              <img src={telegramLogo} alt="" />
              <span>Telegram</span>
            </a>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div>
              <span className="projects-kicker">SELECTED PROJECTS</span>
              <h2 id="projects-title">Two mobile experiences</h2>
            </div>
            <span className="projects-count">01 — 02</span>
          </div>

          <div className="projects-grid">
            <article className="project-card project-card-nexo">
              <div className="project-card-top">
                <span>UNIVERSITY SPECIAL PROJECT</span>
                <span>MOBILE APP</span>
              </div>
              <div className="project-card-copy">
                <h3>Nexo Wallet</h3>
                <p>Online payment system designed for simple and secure everyday transactions.</p>
              </div>
              <a className="project-card-link" href="#nexo-wallet" aria-label="View Nexo Wallet project">
                <ArrowIcon />
              </a>
            </article>

            <article className="project-card project-card-coastal">
              <div className="project-card-top">
                <span>TRAVEL PROJECT</span>
                <span>MOBILE APP</span>
              </div>
              <div className="project-card-copy">
                <h3>Myanmar Coastal Journey</h3>
                <p>A travel guide application for discovering Myanmar coastal destinations.</p>
              </div>
              <a className="project-card-link" href="#coastal-journey" aria-label="View Myanmar Coastal Journey project">
                <ArrowIcon />
              </a>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <span>INDEPENDENT FRONTEND DEVELOPER · MYANMAR</span>

          <span>© {currentYear} LINN PA PA KHAING</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
