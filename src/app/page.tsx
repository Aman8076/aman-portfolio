"use client";

import Image from "next/image";
import {
  Sun,
  Moon,
  Menu,
  X,
  Mail,
  ExternalLink,
  Download,
  Code2,
  GraduationCap,
  ArrowUpRight,
  Phone,
  Briefcase,
  Cpu,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const projects = [
  {
    title: "AI Resume Matcher",
    category: "AI • MERN • Full Stack",
    description:
      "AI-powered resume analysis platform that matches resumes with job descriptions, generates ATS scores and provides improvement suggestions.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    github: "https://github.com/Aman8076",
    accent: "cyan",
  },
  {
    title: "Amazon Frontend Clone",
    category: "Frontend Development",
    description:
      "Responsive Amazon-inspired frontend built with HTML and CSS featuring Flexbox, Grid, hover effects and responsive layouts.",
    tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
    github: "https://github.com/Aman8076",
    accent: "blue",
  },
  {
    title: "Interactive Web Games",
    category: "JavaScript",
    description:
      "Interactive Tic-Tac-Toe and Rock-Paper-Scissors games with dynamic UI, event handling, winner detection and score tracking.",
    tech: ["JavaScript", "HTML", "CSS", "DOM"],
    github: "https://github.com/Aman8076",
    accent: "purple",
  },
];

const skills = [
  "C",
  "C++",
  "JavaScript",
  "Python",
  "SQL",
  "HTML5",
  "CSS3",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "DSA",
  "REST APIs",
];

const achievements = [
  {
    icon: "🏆",
    title: "Institute Topper",
    text: "Top rank in branch during 4th semester.",
  },
  {
    icon: "💻",
    title: "300+ LeetCode Problems",
    text: "Consistent problem solving and DSA practice.",
  },
  {
    icon: "🎤",
    title: "1st Position",
    text: "Stand-Up Comedy Competition at IIIT Manipur.",
  },
  {
    icon: "📚",
    title: "ECE Performance",
    text: "Strong academic foundation in core electronics.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SocialButton({
  children,
  href,
  label,
}: {
  children: ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-button"
    >
      {children}
    </a>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-top">
        <div>
          <span className="project-category">{project.category}</span>
          <h3>{project.title}</h3>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-arrow"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={21} />
        </a>
      </div>

      <p>{project.description}</p>

      <div className="tech-list">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLight;

    setIsLight(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      {/* Background */}
      <div className="background-grid" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            Aman<span>.</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="active" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">
          {/* LEFT */}
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              Available for internships
            </div>

            <p className="hello">Hello, I&apos;m</p>

            <h1>
              Aman<span className="cursor">|</span>
            </h1>

            <div className="hero-role">
              <span>ECE Student</span>
              <b>|</b>
              <span>Developer</span>
              <b>|</b>
              <span>Problem Solver</span>
            </div>

            <p className="hero-description">
              I&apos;m a passionate ECE student at IIIT, exploring the world
              of technology, building useful projects, and constantly learning
              new things. I love solving problems, coding, and creating ideas
              that make an impact.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                <Code2 size={18} />
                View Projects
              </a>

              <a
                href="/Aman-Resume.pdf"
                download
                className="secondary-button"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="socials">
              <SocialButton
                href="https://github.com/Aman8076"
                label="GitHub"
              >
                <span className="social-text github-text">GH</span>
              </SocialButton>

              <SocialButton
                href="https://www.linkedin.com/in/aman-a1439a282/"
                label="LinkedIn"
              >
                <span className="social-text linkedin-text">in</span>
              </SocialButton>

              <SocialButton
                href="https://leetcode.com/u/Aman_1206/"
                label="LeetCode"
              >
                <span className="social-text leetcode-text">LC</span>
              </SocialButton>

              <SocialButton
                href="mailto:amanadv2022@gmail.com"
                label="Email"
              >
                <Mail size={19} />
              </SocialButton>
            </div>
          </div>

          {/* RIGHT / CIRCULAR IMAGE */}
          <div className="hero-visual">
            <div className="floating-square square-one" />
            <div className="floating-square square-two" />
            <div className="floating-square square-three" />

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-wrapper">
              <div className="profile-glow" />

              <div className="profile-ring">
                <div className="profile-image">
                  <Image
                    src="/profile.jpeg"
                    alt="Aman"
                    fill
                    priority
                    sizes="(max-width: 768px) 250px, 390px"
                  />
                </div>
              </div>
            </div>

            <div className="keep-building">
              <span>Keep</span>
              <strong>Building</strong>
              <div className="scribble">〰〰</div>
            </div>

            {/* INFO CARD */}
            <div className="hero-info-card">
              <div className="info-item">
                <GraduationCap size={22} />
                <div>
                  <strong>IIIT</strong>
                  <span>B.Tech ECE</span>
                </div>
              </div>

              <div className="info-divider" />

              <div className="info-item">
                <Code2 size={22} />
                <div>
                  <strong>DSA</strong>
                  <span>LeetCode</span>
                </div>
              </div>

              <div className="info-divider" />

              <div className="info-item">
                <Briefcase size={22} />
                <div>
                  <strong>GATE</strong>
                  <span>Preparing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-down">
          <span>Scroll to explore</span>
          <ChevronDown size={18} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container">
          <SectionTitle
            eyebrow="01 — About Me"
            title="Building with curiosity."
            description="A combination of electronics, software and problem solving."
          />

          <div className="about-grid">
            <div className="about-card main-about-card">
              <div className="about-icon">
                <Sparkles size={25} />
              </div>

              <h3>ECE Student. Developer. Learner.</h3>

              <p>
                I am a B.Tech Electronics and Communication Engineering student
                at IIIT Manipur. My interests lie at the intersection of
                electronics and software development.
              </p>

              <p>
                Currently, I am strengthening my DSA skills, building full
                stack applications and exploring AI-powered solutions while
                continuing to develop my core ECE knowledge.
              </p>
            </div>

            <div className="about-side">
              <div className="mini-card">
                <Cpu size={25} />
                <h4>ECE Foundation</h4>
                <p>
                  Signals, DSP, Communication Systems, Analog Circuits and
                  Microprocessors.
                </p>
              </div>

              <div className="mini-card">
                <Code2 size={25} />
                <h4>Software Development</h4>
                <p>
                  React, Node.js, Express, MongoDB, JavaScript and DSA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <SectionTitle
            eyebrow="02 — Projects"
            title="Things I&apos;ve built."
            description="Projects where I turn ideas into working products."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <SectionTitle
            eyebrow="03 — Skills"
            title="My technical toolkit."
            description="Technologies and concepts I work with."
          />

          <div className="skills-layout">
            <div className="skills-card">
              <h3>Languages & Technologies</h3>

              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-card">
              <h3>Core ECE</h3>

              <div className="core-skills">
                <div>
                  <span>Signals & Systems</span>
                  <span>Digital Signal Processing</span>
                </div>

                <div>
                  <span>Communication Systems</span>
                  <span>Analog Circuits</span>
                </div>

                <div>
                  <span>Microprocessors</span>
                  <span>Semiconductor Devices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CODING */}
      <section className="section coding-section">
        <div className="container">
          <div className="coding-card">
            <div>
              <span className="section-eyebrow">CODING</span>
              <h2>Always solving the next problem.</h2>
              <p>
                I regularly practice DSA and competitive programming to improve
                my problem-solving ability.
              </p>
            </div>

            <div className="coding-stats">
              <div>
                <strong>300+</strong>
                <span>LeetCode Problems</span>
              </div>

              <div>
                <strong>DSA</strong>
                <span>Continuous Practice</span>
              </div>

              <a
                href="https://leetcode.com/u/Aman_1206/"
                target="_blank"
                rel="noopener noreferrer"
                className="coding-link"
              >
                LeetCode
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="container">
          <SectionTitle
            eyebrow="04 — Education"
            title="My academic journey."
            description="A strong foundation in electronics and computer science."
          />

          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <span className="timeline-year">2024 — 2028</span>

                <h3>Indian Institute of Information Technology, Manipur</h3>

                <h4>B.Tech — Electronics & Communication Engineering</h4>

                <p>
                  Currently pursuing B.Tech with a focus on core electronics,
                  software development, DSA and emerging technologies.
                </p>

                <div className="cgpa">
                  <span>CGPA</span>
                  <strong>7.90</strong>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <span className="timeline-year">Class XII</span>

                <h3>GOVT SR SEC SCHOOL, REWARI</h3>

                <p>Senior Secondary Education</p>

                <div className="percentage">
                  <strong>89.6%</strong>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <span className="timeline-year">Class X</span>

                <h3>
                  GOVT MODEL SR SEC SCHOOL IN APPLIED LEARNING SKILLS,
                  FARIDABAD
                </h3>

                <p>Secondary Education</p>

                <div className="percentage">
                  <strong>96.6%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC / LAB */}
      <section className="section lab-section">
        <div className="container">
          <SectionTitle
            eyebrow="05 — Academic Experience"
            title="Beyond the classroom."
            description="Hands-on academic and laboratory experience."
          />

          <div className="lab-grid">
            <div className="lab-card">
              <Cpu size={27} />
              <h3>Signals & Communication</h3>
              <p>
                Signal simulation, frequency analysis, modulation and sampling
                experiments using GNU Octave.
              </p>
            </div>

            <div className="lab-card">
              <Cpu size={27} />
              <h3>Analog Electronics</h3>
              <p>
                Practical work with analog circuits, amplifiers, OP-AMPs and
                circuit simulation.
              </p>
            </div>

            <div className="lab-card">
              <Cpu size={27} />
              <h3>Electronic Measurements</h3>
              <p>
                Hands-on experience with CRO, function generator and
                multimeter-based measurements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section achievements-section">
        <div className="container">
          <SectionTitle
            eyebrow="06 — Achievements"
            title="Milestones so far."
            description="A few things I am proud of."
          />

          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <div className="achievement-card" key={achievement.title}>
                <span className="achievement-icon">{achievement.icon}</span>

                <div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section leadership-section">
        <div className="container">
          <SectionTitle
            eyebrow="07 — Leadership"
            title="Leading beyond academics."
          />

          <div className="leadership-grid">
            <div className="leadership-card">
              <span>01</span>
              <h3>Lead — Stand-Up Club</h3>
              <p>
                Led club activities, coordinated events and contributed to
                cultural activities at IIIT Manipur.
              </p>
            </div>

            <div className="leadership-card">
              <span>02</span>
              <h3>Sports Club — Think India</h3>
              <p>
                Contributed to sports activities, trials and coordination for
                students across multiple games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-content">
              <span className="section-eyebrow">08 — Contact</span>

              <h2>Let&apos;s build something useful.</h2>

              <p>
                I&apos;m currently open to internship opportunities,
                collaborations and interesting technical projects.
              </p>

              <div className="contact-buttons">
                <a
                  href="mailto:amanadv2022@gmail.com"
                  className="primary-button"
                >
                  <Mail size={18} />
                  Email Me
                </a>

                <a href="tel:+918076033359" className="secondary-button">
                  <Phone size={18} />
                  Contact Me
                </a>
              </div>
            </div>

            <div className="contact-info">
              <a href="mailto:amanadv2022@gmail.com">
                <Mail size={19} />
                <span>amanadv2022@gmail.com</span>
              </a>

              <a href="tel:+918076033359">
                <Phone size={19} />
                <span>+91 8076903359</span>
              </a>

              <a
                href="https://github.com/Aman8076"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={19} />
                <span>github.com/Aman8076</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            Aman<span>.</span>
          </div>

          <p>© 2026 Aman. Built with Next.js & passion.</p>

          <div className="footer-links">
            <a
              href="https://github.com/Aman8076"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-a1439a282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Aman_1206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}