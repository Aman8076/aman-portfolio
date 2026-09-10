"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Coding", href: "#coding" },
    { name: "Achievements", href: "#achievements" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a
            href="#home"
            className="text-2xl font-bold tracking-tight"
          >
            Aman<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/Aman-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl lg:hidden"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-5">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 transition hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/Aman-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-cyan-300"
              >
                Resume
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

          <div className="mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            Available for Internships
          </div>

          <p className="mb-4 text-lg text-gray-400">
            ECE Student • Developer • Problem Solver
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-cyan-400">Aman</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I build modern web experiences and AI-powered solutions
            while continuously improving my problem-solving and
            development skills.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/Aman-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              View Resume
            </a>

          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-400">

            <a
              href="https://github.com/Aman8076"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-a1439a282/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Aman_1206/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              LeetCode
            </a>

          </div>

          <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-cyan-400">7.90</p>
              <p className="mt-1 text-sm text-gray-500">CGPA</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-cyan-400">300+</p>
              <p className="mt-1 text-sm text-gray-500">LeetCode</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-cyan-400">3+</p>
              <p className="mt-1 text-sm text-gray-500">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-cyan-400">ECE</p>
              <p className="mt-1 text-sm text-gray-500">IIIT Manipur</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Who I Am
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <p className="text-lg leading-8 text-gray-300">
              I&apos;m Aman, an Electronics and Communication Engineering
              student at IIIT Manipur with a strong interest in software
              development, problem solving and AI-powered applications.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              I enjoy building projects, solving Data Structures and
              Algorithms problems and learning technologies that help
              me become a better software engineer.
            </p>

          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">

            <p className="text-sm uppercase tracking-wider text-gray-500">
              Current Focus
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Software Development{" "}
              <span className="text-cyan-400">+ AI</span>
            </h3>

            <p className="mt-5 leading-7 text-gray-400">
              Currently focusing on Web Development, DSA, AI integration
              and building practical projects for internships and
              placements.
            </p>

          </div>

        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Education
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            My academic journey from school to engineering.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-[15px] top-0 h-full w-px bg-gray-700 md:left-1/2 md:-translate-x-1/2" />

          {/* IIIT */}
          <div className="relative mb-16 flex flex-col md:flex-row md:items-center">

            <div className="absolute left-0 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 bg-black text-cyan-400 md:left-1/2 md:-translate-x-1/2">
              🎓
            </div>

            <div className="ml-14 w-full md:ml-0 md:w-1/2 md:pr-12 md:text-right">

              <p className="text-sm font-medium text-cyan-400">
                2024 — 2028
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                B.Tech — Electronics & Communication Engineering
              </h3>

              <p className="mt-2 text-lg text-gray-300">
                IIIT Manipur
              </p>

            </div>

            <div className="mt-5 ml-14 w-full md:ml-0 md:mt-0 md:w-1/2 md:pl-12">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">

                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Current
                </p>

                <p className="mt-3 leading-7 text-gray-300">
                  Pursuing B.Tech in Electronics and Communication
                  Engineering with interests in software development,
                  problem solving and AI.
                </p>

                <div className="mt-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  CGPA: 7.90
                </div>

              </div>

            </div>
          </div>

          {/* Class 12 */}
          <div className="relative mb-16 flex flex-col md:flex-row md:items-center">

            <div className="absolute left-0 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-purple-400 bg-black text-purple-400 md:left-1/2 md:-translate-x-1/2">
              🏫
            </div>

            <div className="ml-14 w-full md:ml-0 md:w-1/2 md:pr-12 md:text-right">

              <p className="text-sm font-medium text-purple-400">
                Class 12
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Senior Secondary Education
              </h3>

              <p className="mt-2 text-gray-400">
                GOVT SR SEC SCHOOL, REWARI
              </p>

            </div>

            <div className="mt-5 ml-14 w-full md:ml-0 md:mt-0 md:w-1/2 md:pl-12">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/40">

                <p className="leading-7 text-gray-300">
                  Completed Class 12 with a strong academic foundation
                  before beginning my engineering journey.
                </p>

                <div className="mt-5 inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
                  Percentage: 89.6%
                </div>

              </div>

            </div>
          </div>

          {/* Class 10 */}
          <div className="relative flex flex-col md:flex-row md:items-center">

            <div className="absolute left-0 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-pink-400 bg-black text-pink-400 md:left-1/2 md:-translate-x-1/2">
              📚
            </div>

            <div className="ml-14 w-full md:ml-0 md:w-1/2 md:pr-12 md:text-right">

              <p className="text-sm font-medium text-pink-400">
                Class 10
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Secondary Education
              </h3>

              <p className="mt-2 text-gray-400">
                GOVT MODEL SR SEC SCHOOL IN APPLIED LEARNING SKILLS
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Faridabad Old, Faridabad
              </p>

            </div>

            <div className="mt-5 ml-14 w-full md:ml-0 md:mt-0 md:w-1/2 md:pl-12">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-400/40">

                <p className="leading-7 text-gray-300">
                  Completed secondary education with strong academic
                  performance and developed an early interest in
                  technology and engineering.
                </p>

                <div className="mt-5 inline-flex rounded-full border border-pink-400/20 bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
                  Percentage: 96.6%
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What I Build
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Projects where I apply programming, web development and AI
            to solve practical problems.
          </p>

        </div>

        <div className="space-y-8">

          {/* PROJECT 1 */}
          <div className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">

            <div className="grid md:grid-cols-3">

              <div className="flex min-h-[300px] items-center justify-center bg-cyan-400/[0.04] md:col-span-1">

                <div className="text-center">

                  <p className="text-8xl font-bold text-cyan-400/20">
                    01
                  </p>

                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                    AI • MERN
                  </p>

                </div>

              </div>

              <div className="p-8 md:col-span-2">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    Featured Project
                  </span>

                  <span className="text-sm text-gray-500">
                    Full Stack + AI
                  </span>

                </div>

                <h3 className="mt-5 text-3xl font-bold">
                  AI Resume Matcher
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  An AI-powered resume analysis platform designed to help
                  candidates understand how well their resume matches a
                  specific job description.
                </p>

                <div className="mt-7">

                  <h4 className="font-semibold text-white">
                    Problem
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Job seekers often struggle to understand why their
                    resume may not perform well against ATS systems or
                    job requirements.
                  </p>

                </div>

                <div className="mt-5">

                  <h4 className="font-semibold text-white">
                    Solution
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    The platform analyzes resumes, compares them with
                    job descriptions and provides ATS-oriented scoring
                    and AI-generated suggestions.
                  </p>

                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold">
                      📄 Resume Upload
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Upload and process resume documents.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold">
                      🎯 ATS Matching
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Compare resume content against job requirements.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold">
                      🤖 AI Suggestions
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Generate AI-powered improvement suggestions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold">
                      📊 ATS Visualization
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Present matching insights through visual feedback.
                    </p>
                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-2">

                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "JWT",
                    "Multer",
                    "PDF-Parse",
                    "Gemini API",
                  ].map((tech) => (

                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-7 flex flex-wrap gap-4">

                  <a
                    href="https://github.com/Aman8076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-purple-400/40">

            <div className="grid md:grid-cols-3">

              <div className="flex min-h-[250px] items-center justify-center bg-purple-400/[0.04] md:col-span-1">

                <div className="text-center">

                  <p className="text-8xl font-bold text-purple-400/20">
                    02
                  </p>

                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-purple-400">
                    FRONTEND
                  </p>

                </div>

              </div>

              <div className="p-8 md:col-span-2">

                <p className="text-sm text-purple-400">
                  Responsive Web Development
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  Amazon Frontend Clone
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  A responsive Amazon-inspired frontend built to
                  practice real-world layouts, responsive design and
                  modern CSS.
                </p>

                <div className="mt-6">

                  <h4 className="font-semibold">
                    Highlights
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm text-gray-400">
                    <li>• Responsive homepage layout</li>
                    <li>• Flexbox and CSS Grid</li>
                    <li>• Hover interactions and animations</li>
                    <li>• Mobile-friendly design</li>
                  </ul>

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "HTML5",
                    "CSS3",
                    "Flexbox",
                    "CSS Grid",
                    "Responsive Design",
                  ].map((tech) => (

                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-7 flex flex-wrap gap-4">

                  <a
                    href="https://github.com/Aman8076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-purple-400 hover:text-purple-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-purple-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40">

            <div className="grid md:grid-cols-3">

              <div className="flex min-h-[250px] items-center justify-center bg-yellow-400/[0.04] md:col-span-1">

                <div className="text-center">

                  <p className="text-8xl font-bold text-yellow-400/20">
                    03
                  </p>

                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
                    JAVASCRIPT
                  </p>

                </div>

              </div>

              <div className="p-8 md:col-span-2">

                <p className="text-sm text-yellow-400">
                  Interactive Web Applications
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  Interactive Web Games
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  A collection of browser-based games created to
                  practice JavaScript logic, DOM manipulation and
                  event handling.
                </p>

                <div className="mt-6">

                  <h4 className="font-semibold">
                    Included
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm text-gray-400">
                    <li>• Tic-Tac-Toe</li>
                    <li>• Rock-Paper-Scissors</li>
                    <li>• Dynamic score tracking</li>
                    <li>• Real-time DOM updates</li>
                  </ul>

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "DOM",
                    "Event Handling",
                  ].map((tech) => (

                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-7 flex flex-wrap gap-4">

                  <a
                    href="https://github.com/Aman8076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-yellow-400 hover:text-yellow-400"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="#"
                    className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Technologies and concepts I use to build projects and
            solve real-world problems.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              icon: "💻",
              title: "Programming",
              skills: ["C", "C++", "JavaScript", "Python", "SQL"],
            },
            {
              icon: "🌐",
              title: "Web Development",
              skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"],
            },
            {
              icon: "⚙️",
              title: "Backend & Database",
              skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
            },
            {
              icon: "🧠",
              title: "DSA & Problem Solving",
              skills: [
                "Arrays",
                "Strings",
                "Linked List",
                "Stack",
                "Queue",
                "Binary Search",
                "BST",
                "Bit Manipulation",
              ],
            },
            {
              icon: "🛠️",
              title: "Tools",
              skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "MATLAB",
                "GNU Octave",
              ],
            },
            {
              icon: "⚡",
              title: "Core ECE",
              skills: [
                "Signals & Systems",
                "DSP",
                "Communication Systems",
                "Analog Circuits",
                "Microprocessors",
              ],
            },
          ].map((group) => (

            <div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                {group.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>
      </section>

      {/* ================= CODING ================= */}
      <section id="coding" className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-14">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Coding & Development
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Coding Profiles
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Platforms where I practice problem solving and build
            software projects.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <a
            href="https://github.com/Aman8076"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                ◉
              </div>

              <span className="text-xl text-gray-600 transition group-hover:text-cyan-400">
                ↗
              </span>

            </div>

            <h3 className="mt-7 text-2xl font-bold">
              GitHub
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              My development projects, repositories and code experiments
              across web development, AI and programming.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                Projects
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                Code
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                Development
              </span>

            </div>

          </a>

          <a
            href="https://leetcode.com/u/Aman_1206/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40"
          >

            <div className="flex items-start justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-2xl">
                ⚡
              </div>

              <span className="text-xl text-gray-600 transition group-hover:text-yellow-400">
                ↗
              </span>

            </div>

            <h3 className="mt-7 text-2xl font-bold">
              LeetCode
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Regularly practicing Data Structures and Algorithms to
              improve problem-solving and coding skills.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
                300+ Problems
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                DSA
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                Problem Solving
              </span>

            </div>

          </a>

        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-12">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Highlights
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Achievements
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

            <p className="text-3xl">🏆</p>

            <h3 className="mt-4 text-xl font-bold">
              Institute Topper
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Secured a top position in the branch during the 4th semester.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

            <p className="text-3xl">💻</p>

            <h3 className="mt-4 text-xl font-bold">
              300+ LeetCode Problems
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Consistently practicing Data Structures and Algorithms
              to strengthen problem-solving skills.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

            <p className="text-3xl">🎤</p>

            <h3 className="mt-4 text-xl font-bold">
              Stand-Up Comedy — 1st Position
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Secured 1st position in a Stand-Up Comedy Competition
              at IIIT Manipur.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30">

            <p className="text-3xl">⚡</p>

            <h3 className="mt-4 text-xl font-bold">
              Leadership
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Lead, Stand-Up Club and Sports Club Lead, Think India —
              IIIT Manipur.
            </p>

          </div>

        </div>
      </section>

      {/* ================= DAY 8: RESUME ================= */}
      <section
        id="resume"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.04] p-8 md:p-12">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Resume
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Want to know more?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                Explore my academic background, technical skills,
                projects, achievements and experience through my resume.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">

              <a
                href="/Aman-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-black transition hover:scale-105"
              >
                View Resume ↗
              </a>

              <a
                href="/Aman-Resume.pdf"
                download
                className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Download Resume ↓
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= INTERNSHIP CTA ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center md:p-14">

          <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Open to Opportunities
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Looking for an Internship
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              I&apos;m actively looking for software development,
              web development and AI-related internship opportunities
              where I can learn, contribute and grow.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="mailto:amanadv2022@gmail.com"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105"
              >
                Let&apos;s Connect
              </a>

              <a
                href="#projects"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Projects
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get In Touch
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let&apos;s Build Something
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          I&apos;m open to internship opportunities, collaborations and
          interesting software development projects.
        </p>

        <a
          href="mailto:amanadv2022@gmail.com"
          className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-black transition hover:scale-105"
        >
          Contact Me
        </a>

        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">

          <a
            href="https://github.com/Aman8076"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aman-a1439a282/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/Aman_1206/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-yellow-400"
          >
            LeetCode
          </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 text-center">

        <p className="text-sm text-gray-500">
          © 2026 Aman. Built with Next.js & Tailwind CSS.
        </p>

      </footer>

    </main>
  );
}