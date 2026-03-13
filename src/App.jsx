import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const NAV_ITEMS = ["Home", "About", "Projects", "Skills", "Experience", "Education", "Certifications", "Contact"];

const SKILL_CATEGORIES = [
  {
    key: "frontend",
    label: "Frontend",
    icon: "🖥️",
    accent: "#6366f1",
    skills: [
      { name: "React", color: "#61DAFB", icon: "⚛️" },
      { name: "JavaScript", color: "#F7DF1E", icon: "𝐉𝐒" },
      { name: "HTML", color: "#E34F26", icon: "🌐" },
      { name: "CSS", color: "#264DE4", icon: "🎨" },
      { name: "Bootstrap", color: "#7952B3", icon: "🅱️" },
    ],
  },
  {
    key: "database",
    label: "Database",
    icon: "🗄️",
    accent: "#10b981",
    skills: [
      { name: "MongoDB", color: "#47A248", icon: "🍃" },
      { name: "Node.js", color: "#68A063", icon: "🟢" },
      { name: "MySQL", color: "#ED8B00", icon: "☕" },
    ],
  },
  {
    key: "controls",
    label: "Controls",
    icon: "🔧",
    accent: "#f59e0b",
    skills: [
      { name: "XAMPP", color: "#43B02A", icon: "🔬" },
      { name: "Postman", color: "#FF6C37", icon: "📮" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Ascox Technosoft Pvt ltd",
    duration: "Jul 2025 ",
    type: "Summer Internship",
    accent: "#06b6d4",
    icon: "🚀",
    points: [
      "Built a dynamic courier management system using PHP and MySQL to automate order processing and shipment tracking.",
      "Developed an interactive user dashboard for real-time delivery status updates and package management.",
      "Integrated Bootstrap for a fully responsive UI and utilized the FPDF library to generate automated digital receipts.",
      "Managed backend data persistence and relational mapping using MySQL within a XAMPP development environment."
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "BDreamz Global Solutions",
    duration: "Jan 2026 –  Present",
    type: "Internship",
    accent: "#06b6d4",
    icon: "👨‍💻",
    points: [
      "Developed a responsive and interactive Student Productivity Suite using HTML5, CSS3, and JavaScript.",
      "Designed a personalized user dashboard for attendance monitoring, GPA calculation, and assignment tracking.",
      "Implemented a mobile-first design approach using Bootstrap to ensure a seamless experience across all devices.",
      "Utilized Local Storage (or JSON) for client-side data persistence, allowing users to save and manage their academic records locally.",
      "Focused on UI/UX principles to create an intuitive navigation flow for students to manage their daily schedules efficiently."
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering",
    branch: "Computer Science & Engineering",
    institution: "Indra Ganesan College of Engineering-Tiruchirappalli",
    duration: "2022 – 2026",
    grade: "CGPA: 8.46 / 10",
    icon: "🎓",
    accent: "#8b5cf6",
  },
  {
    degree: "Higher Secondary (12th)",
    branch: "Biology Mathmatics",
    institution: "Govt Model Boys Higher Secondary School-Thuvarankurichi",
    duration: "2021 – 2022",
    grade: "Percentage: 79%",
    icon: "🏫",
    accent: "#6366f1",
  },
];

const CERTIFICATIONS = [
  {
    title: "Frontend Developement",
    issuer: "BDreamz Global solution Pvt ltd ",
    date: "2026",
    icon: "⚛️",
    accent: "#61DAFB",
    badge: "Frontend",
  },
  {
    title: "Web Development",
    issuer: "Ascox Technosoft Pvt ltd",
    date: "2025",
    icon: "🌐",
    accent: "#06b6d4",
    badge: "Full Stack",
  },
  {
    title: "Software Testing & QA",
    issuer: "Infosis(AICTE)",
    date: "2025",
    icon: "🔬",
    accent: "#43B02A",
    badge: "Testing",
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "2025",
    icon: "🍃",
    accent: "#ED8B00",
    badge: "Database",
  },
];

const PROJECTS = [
  {
    title: "Smart-Student-Life-Manager",
    badge: "🏆 Internship Project ",
    description:
      "A comprehensive frontend-driven student productivity platform designed to streamline academic workflows. Features an interactive dashboard for attendance monitoring, GPA calculation, and task management, utilizing responsive UI principles and local storage for efficient data organization.",
    tech: ["HTML5", "CSS", "JavaScript", "Bootstrap", "Local Storage","NLP"],
    accent: "#6366f1",
    accentSoft: "rgba(99,102,241,0.12)",
    icon: "🔍",
    preview: ["#1a1a2e", "#16213e", "#0f3460"],
    number: "01",
    github: "https://github.com/BALAMURUGAN-4735/Smart-Student-life-Manager",
    live: "https://balamurugan-4735.github.io/Smart-Student-life-Manager/",
  },
  {
    title: "Quick-Courier-Service",
    badge: "💼 Summer Internship",
    description:
      "A dynamic logistics and courier management platform designed to automate shipment workflows and tracking. Features a responsive user interface for real-time delivery status updates and package scheduling, focusing on efficient data handling and streamlined user experience.",
    tech: ["MySQL", "PHP", "Bootstrap", "FPDF", "JavaScript"],
    accent: "#06b6d4",
    accentSoft: "rgba(6,182,212,0.12)",
    icon: "🚀",
    preview: ["#0d1f2d", "#1a3a4a", "#0f4c5c"],
    number: "02",
    github: "https://github.com/BALAMURUGAN-4735/Quick-Courier-Service",
    live: "https://courier-service.infinityfreeapp.com/?i=1",
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [typed, setTyped] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#080810", color: "#e2e8f0", minHeight: "100vh" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-14px); } }
        @keyframes pulse-glow { 0%,100% { box-shadow:0 0 10px #6366f1aa; } 50% { box-shadow:0 0 28px #818cf8cc, 0 0 50px #6366f155; } }
        @keyframes blink { 50% { opacity:0; } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .floating { animation: float 4s ease-in-out infinite; }
        .pulse-btn { animation: pulse-glow 2.5s ease-in-out infinite; }
        .cursor { animation: blink 1s step-start infinite; }
        .hero-glow { background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%); }
        .skill-badge { transition:transform 0.25s, box-shadow 0.25s; cursor:default; }
        .skill-badge:hover { transform:scale(1.1) translateY(-3px); box-shadow:0 8px 24px rgba(99,102,241,0.4); }

        /* NAV PILL */
        .nav-pill-wrap {
          position:fixed; top:18px; left:50%; transform:translateX(-50%);
          z-index:1000;
        }
        .nav-pill {
          display:flex; align-items:center; gap:4px;
          background:rgba(12,12,24,0.82);
          backdrop-filter:blur(20px) saturate(180%);
          border:1px solid rgba(99,102,241,0.22);
          border-radius:999px;
          padding:6px 8px;
          box-shadow:0 8px 32px rgba(0,0,0,0.4);
          white-space:nowrap;
        }
        .nav-pill.scrolled { background:rgba(8,8,16,0.94); }
        .nav-item {
          cursor:pointer; padding:8px 18px; border-radius:999px;
          font-size:14px; font-weight:500; color:#64748b;
          transition:color 0.2s, background 0.2s;
          user-select:none;
        }
        .nav-item:hover { color:#c7d2fe; background:rgba(99,102,241,0.1); }
        .nav-item.active {
          color:#fff;
          background:linear-gradient(135deg,#6366f1,#4f46e5);
          box-shadow:0 2px 16px rgba(99,102,241,0.45);
        }
        .nav-logo {
          padding:8px 16px; border-radius:999px; font-size:15px; font-weight:800;
          background:linear-gradient(90deg,#6366f1,#06b6d4);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          margin-right:6px; letter-spacing:0.5px;
        }

        /* PROJECT CARDS */
        .proj-card {
          border-radius:24px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.07);
          background:#0e0e1c;
          transition:transform 0.35s cubic-bezier(.2,.8,.3,1), box-shadow 0.35s, border-color 0.35s;
        }
        .proj-card.card-a:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(99,102,241,0.28); border-color:rgba(99,102,241,0.4); }
        .proj-card.card-b:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(6,182,212,0.22); border-color:rgba(6,182,212,0.4); }
        .proj-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 18px; border-radius:10px;
          font-size:13px; font-weight:600; text-decoration:none;
          transition:opacity 0.2s, background 0.2s, color 0.2s;
          border:none; cursor:pointer; flex:1;
        }
        @media (max-width:600px) {
          .nav-item { padding:7px 11px; font-size:12px; }
          .nav-logo { display:none; }
        }
      `}</style>

      {/* ══ NAVBAR — FLOATING PILL, NO HAMBURGER ══ */}
      <div className="nav-pill-wrap">
        <div className={`nav-pill${scrolled ? " scrolled" : ""}`}>
<div className="nav-logo" style={{ display:"flex", alignItems:"center", marginRight:8 }}>
  <svg width="40" height="40" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bmCircle" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#06b6d4"/>
      </linearGradient>
      <linearGradient id="bmCircle2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>

      <style>{`
        @keyframes spinRing {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -200; }
        }
        @keyframes spinRing2 {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: 200; }
        }
        @keyframes pulseFill {
          0%, 100% { opacity: 0.08; r: 26px; }
          50%       { opacity: 0.18; r: 29px; }
        }
        @keyframes glowText {
          0%, 100% { opacity: 1;   fill: #818cf8; }
          50%       { opacity: 0.7; fill: #06b6d4; }
        }
        .bm-ring1 {
          stroke-dasharray: 40 160;
          animation: spinRing 2.4s linear infinite;
        }
        .bm-ring2 {
          stroke-dasharray: 20 180;
          animation: spinRing2 3.2s linear infinite;
        }
        .bm-fill {
          animation: pulseFill 2.5s ease-in-out infinite;
        }
        .bm-text {
          animation: glowText 2.5s ease-in-out infinite;
        }
      `}</style>
    </defs>

    {/* Pulsing inner fill */}
    <circle
      className="bm-fill"
      cx="36" cy="36" r="27"
      fill="rgba(99,102,241,0.08)"
    />

    {/* Static base ring */}
    <circle
      cx="36" cy="36" r="32"
      fill="none"
      stroke="rgba(99,102,241,0.15)"
      strokeWidth="2"
    />

    {/* Animated ring 1 — clockwise */}
    <circle
      className="bm-ring1"
      cx="36" cy="36" r="32"
      fill="none"
      stroke="url(#bmCircle)"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Animated ring 2 — counter clockwise */}
    <circle
      className="bm-ring2"
      cx="36" cy="36" r="26"
      fill="none"
      stroke="url(#bmCircle2)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* BM text with glow flicker */}
    <text
      className="bm-text"
      x="36" y="43"
      textAnchor="middle"
      fontFamily="Segoe UI, Arial"
      fontSize="22"
      fontWeight="700"
    >BM</text>

  </svg>
</div>
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className={`nav-item${activeSection === item ? " active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section id="home" className="hero-glow"
        style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"140px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:120, left:"15%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.07),transparent)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:100, right:"10%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,0.06),transparent)", pointerEvents:"none" }} />

        <div className="fade-up" style={{ maxWidth:760, position:"relative" }}>
          <div style={{ display:"inline-block", background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.3)", borderRadius:50, padding:"6px 20px", marginBottom:24, fontSize:13, color:"#a5b4fc", letterSpacing:2, textTransform:"uppercase" }}>
            👋 Welcome to my Portfolio
          </div>
          <h1 style={{ fontSize:"clamp(36px,7vw,72px)", fontWeight:900, lineHeight:1.1, marginBottom:16, letterSpacing:-1 }}>
            Crafting Interfaces.{" "}
            <span style={{ background:"linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Shipping Logic.
            </span>
            <br />Breaking Bugs.
          </h1>
          <p style={{ fontSize:18, color:"#64748b", marginBottom:12, minHeight:28 }}>
            <span style={{ color:"#94a3b8" }}>{typed}</span>
            <span className="cursor" style={{ color:"#6366f1" }}>|</span>
          </p>
          <p style={{ fontSize:15, color:"#475569", maxWidth:560, margin:"0 auto 40px", lineHeight:1.8 }}>
            I build performant React apps, craft MERN backends, and validate every feature with a rigorous QA mindset.
          </p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <button className="pulse-btn" onClick={() => scrollTo("Projects")}
              style={{ background:"linear-gradient(135deg,#6366f1,#4f46e5)", color:"#fff", border:"none", borderRadius:12, padding:"14px 32px", fontSize:15, fontWeight:700, cursor:"pointer" }}>
              View My Work →
            </button>
            <a href="#" download style={{ background:"transparent", color:"#818cf8", border:"1px solid rgba(99,102,241,0.45)", borderRadius:12, padding:"14px 32px", fontSize:15, fontWeight:600, textDecoration:"none" }}>
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ padding:"100px 24px", maxWidth:1100, margin:"0 auto" }}>
        <SectionTitle label="About Me" sub="Who I am" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:40, alignItems:"center", marginTop:48 }}>
          <div style={{ display:"flex", justifyContent:"center" }}>
            <div className="floating" style={{ width:220, height:220, borderRadius:"50%", background:"linear-gradient(135deg,#6366f1,#06b6d4)", padding:4 }}>
              <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:"#0f0f1a", display:"flex", alignItems:"center", justifyContent:"center", fontSize:72 }}><img src='Images/Professional_Image.jpg' alt="Image" style={{ width:"100%", height:"100%", borderRadius:"100%", objectFit:"cover", objectPosition:"center50%" }} /></div>
            </div>
          </div>
          <div>
            <p style={{ fontSize:16, color:"#94a3b8", lineHeight:1.9, marginBottom:24 }}>
              I'm a passionate Frontend Developer with a growing edge in Full-Stack engineering — building performant web apps with{" "}
              <span style={{ color:"#818cf8" }}>React, Node.js, MySQL and MongoDB </span>. I blend development with a testing mindset, leveraging tools like{" "}
              <span style={{ color:"#06b6d4" }}>Postman</span> to ensure every feature I ship is rock solid.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
              {[["🎓","B.E. Graduate"],["💡","MERN Stack"],["🔬","QA & Testing"],["📍","Open to Work"]].map(([icon,label]) => (
                <div key={label} style={{ background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.2)", borderRadius:8, padding:"8px 16px", fontSize:13, color:"#a5b4fc", display:"flex", gap:6, alignItems:"center" }}>
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section id="projects" style={{ padding:"100px 24px", background:"rgba(99,102,241,0.025)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <SectionTitle label="Projects" sub="What I've Built" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))", gap:32, marginTop:52 }}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} cardClass={i === 0 ? "card-a" : "card-b"} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SKILLS — TABBED ══ */}
      <section id="skills" style={{ padding:"100px 24px", maxWidth:1100, margin:"0 auto" }}>
        <SectionTitle label="Skills" sub="My Tech Stack" />
        <SkillsTabSection />
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section id="experience" style={{ padding:"100px 24px", background:"rgba(6,182,212,0.025)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <SectionTitle label="Experience" sub="Where I've Worked" />
          <div style={{ marginTop:52, display:"flex", flexDirection:"column", gap:28 }}>
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} style={{ background:"#0e0e1c", border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, padding:"28px 32px", display:"flex", gap:24, alignItems:"flex-start", position:"relative", overflow:"hidden" }}>
                {/* Left accent bar */}
                <div style={{ position:"absolute", left:0, top:0, bottom:0, width:4, background:`linear-gradient(180deg,${exp.accent},transparent)`, borderRadius:"4px 0 0 4px" }} />
                {/* Icon */}
                <div style={{ fontSize:36, minWidth:52, height:52, background:`rgba(6,182,212,0.1)`, border:`1px solid ${exp.accent}33`, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {exp.icon}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:8, marginBottom:4 }}>
                    <h3 style={{ fontSize:19, fontWeight:700, color:"#f1f5f9", margin:0 }}>{exp.role}</h3>
                    <span style={{ background:`rgba(6,182,212,0.1)`, border:`1px solid ${exp.accent}44`, borderRadius:999, padding:"3px 14px", fontSize:12, color:exp.accent, fontWeight:600 }}>{exp.type}</span>
                  </div>
                  <p style={{ fontSize:14, color:exp.accent, fontWeight:600, marginBottom:4 }}>{exp.company}</p>
                  <p style={{ fontSize:13, color:"#475569", marginBottom:16 }}>📅 {exp.duration}</p>
                  <ul style={{ margin:0, padding:"0 0 0 18px", display:"flex", flexDirection:"column", gap:8 }}>
                    {exp.points.map((pt, i) => (
                      <li key={i} style={{ fontSize:14, color:"#64748b", lineHeight:1.7 }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EDUCATION ══ */}
      <section id="education" style={{ padding:"100px 24px", maxWidth:1100, margin:"0 auto" }}>
        <SectionTitle label="Education" sub="Academic Background" />
        <div style={{ marginTop:52, display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
          {EDUCATION.map((edu) => (
            <div key={edu.degree} style={{ background:"#0e0e1c", border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, padding:"28px 28px", position:"relative", overflow:"hidden", transition:"transform 0.3s, box-shadow 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 20px 50px ${edu.accent}22`; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${edu.accent},transparent)` }} />
              <div style={{ fontSize:40, marginBottom:16 }}>{edu.icon}</div>
              <div style={{ display:"inline-block", background:`rgba(139,92,246,0.1)`, border:`1px solid ${edu.accent}44`, borderRadius:999, padding:"3px 14px", fontSize:11, color:edu.accent, fontWeight:600, marginBottom:12 }}>
                {edu.duration}
              </div>
              <h3 style={{ fontSize:18, fontWeight:700, color:"#f1f5f9", marginBottom:6 }}>{edu.degree}</h3>
              <p style={{ fontSize:14, color:"#818cf8", fontWeight:600, marginBottom:4 }}>{edu.branch}</p>
              <p style={{ fontSize:13, color:"#475569", marginBottom:12 }}>{edu.institution}</p>
              <div style={{ display:"flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.03)", borderRadius:8, padding:"8px 12px" }}>
                <span style={{ fontSize:16 }}>🏆</span>
                <span style={{ fontSize:13, color:"#94a3b8", fontWeight:600 }}>{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CERTIFICATIONS ══ */}
      <section id="certifications" style={{ padding:"100px 24px", background:"rgba(245,158,11,0.02)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <SectionTitle label="Certifications" sub="What I've Earned" />
          <div style={{ marginTop:52, display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20 }}>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} style={{ background:"#0e0e1c", border:"1px solid rgba(255,255,255,0.07)", borderRadius:18, padding:"24px 22px", position:"relative", overflow:"hidden", transition:"transform 0.3s, border-color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.borderColor=`${cert.accent}55`; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; }}>
                {/* Corner glow */}
                <div style={{ position:"absolute", top:-30, right:-30, width:80, height:80, borderRadius:"50%", background:`radial-gradient(circle,${cert.accent}22,transparent)`, pointerEvents:"none" }} />
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                  <span style={{ fontSize:32 }}>{cert.icon}</span>
                  <span style={{ background:`${cert.accent}18`, border:`1px solid ${cert.accent}44`, borderRadius:999, padding:"2px 10px", fontSize:11, color:cert.accent, fontWeight:600 }}>{cert.badge}</span>
                </div>
                <h3 style={{ fontSize:15, fontWeight:700, color:"#f1f5f9", marginBottom:8, lineHeight:1.4 }}>{cert.title}</h3>
                <p style={{ fontSize:13, color:"#64748b", marginBottom:4 }}>🏛️ {cert.issuer}</p>
                <p style={{ fontSize:12, color:"#334155" }}>📅 {cert.date}</p>
                <div style={{ marginTop:16, height:2, background:`linear-gradient(90deg,${cert.accent}66,transparent)`, borderRadius:2 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ padding:"100px 24px", background:"rgba(6,182,212,0.02)" }}>
        <div style={{ maxWidth:640, margin:"0 auto", textAlign:"center" }}>
          <SectionTitle label="Contact" sub="Let's Connect" centered />
          <p style={{ color:"#64748b", marginBottom:40, lineHeight:1.8 }}>I'm open to full-time roles, freelance projects, and exciting collaborations.
          </p>
        <ContactForm />
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ textAlign:"center", padding:"32px 24px", borderTop:"1px solid rgba(99,102,241,0.1)", color:"#334155", fontSize:13 }}>
        <span style={{ color:"#475569" }}>Built with </span>
        <span style={{ color:"#6366f1" }}>⚛️ React</span>
        <span style={{ color:"#475569" }}> · Designed with ❤️ by a Frontend Developer</span>
        <br /><span style={{ color:"#1e293b", marginTop:4, display:"block" }}>© 2026 Balamurugan Portfolio. All rights reserved.</span>
      </footer>
    </div>
  );
}

/* ─── SectionTitle ─── */
function SectionTitle({ label, sub, centered }) {
  return (
    <div style={{ textAlign: centered ? "center" : "left" }}>
      <div style={{ fontSize:12, color:"#6366f1", letterSpacing:3, textTransform:"uppercase", marginBottom:8 }}>{sub}</div>
      <h2 style={{ fontSize:"clamp(28px,5vw,44px)", fontWeight:800, margin:0 }}>
        {label.split("").map((c, i) => (
          <span key={i} style={i < 2 ? { background:"linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" } : {}}>
            {c}
          </span>
        ))}
      </h2>
      <div style={{ width:48, height:3, background:"linear-gradient(90deg,#6366f1,#06b6d4)", borderRadius:2, marginTop:12, ...(centered ? { margin:"12px auto 0" } : {}) }} />
    </div>
  );
}

/* ─── SkillsTabSection ─── */
function SkillsTabSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const active = SKILL_CATEGORIES.find((c) => c.key === activeTab);
  return (
    <div style={{ marginTop: 48 }}>
      {/* Tab buttons */}
      <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:36 }}>
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.key;
          return (
            <button key={cat.key} onClick={() => setActiveTab(cat.key)}
              style={{
                padding:"10px 24px", borderRadius:999, border:"none", cursor:"pointer", fontSize:14, fontWeight:600,
                background: isActive ? `linear-gradient(135deg,${cat.accent},${cat.accent}cc)` : "rgba(255,255,255,0.05)",
                color: isActive ? "#fff" : "#64748b",
                boxShadow: isActive ? `0 4px 20px ${cat.accent}44` : "none",
                transition:"all 0.25s",
                display:"flex", alignItems:"center", gap:8,
              }}>
              <span>{cat.icon}</span>{cat.label}
              <span style={{ background: isActive ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.06)", borderRadius:999, padding:"1px 8px", fontSize:12 }}>
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills grid */}
      <div style={{ background:"#0e0e1c", border:`1px solid ${active.accent}22`, borderRadius:20, padding:"32px 28px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:28 }}>
          <span style={{ fontSize:22 }}>{active.icon}</span>
          <h3 style={{ margin:0, fontSize:17, fontWeight:700, color:"#f1f5f9" }}>{active.label} Skills</h3>
          <div style={{ flex:1, height:1, background:`linear-gradient(90deg,${active.accent}33,transparent)`, marginLeft:8 }} />
        </div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:14 }}>
          {active.skills.map((s) => (
            <div key={s.name} className="skill-badge"
              style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${s.color}33`, borderRadius:14, padding:"14px 22px", display:"flex", alignItems:"center", gap:10, minWidth:130 }}>
              <span style={{ fontSize:20 }}>{s.icon}</span>
              <span style={{ fontWeight:600, fontSize:14, color:s.color }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── ProjectCard ─── */
function ProjectCard({ project: p, cardClass }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`proj-card ${cardClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview Window */}
      <div style={{ position:"relative", height:200, background:`linear-gradient(135deg,${p.preview[0]},${p.preview[1]},${p.preview[2]})`, overflow:"hidden" }}>
        {/* Mock browser bar */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:32, background:"rgba(0,0,0,0.35)", display:"flex", alignItems:"center", padding:"0 14px", gap:6, backdropFilter:"blur(4px)" }}>
          <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57", display:"inline-block" }} />
          <span style={{ width:10, height:10, borderRadius:"50%", background:"#febc2e", display:"inline-block" }} />
          <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840", display:"inline-block" }} />
          <div style={{ flex:1, height:18, background:"rgba(255,255,255,0.07)", borderRadius:4, marginLeft:8, display:"flex", alignItems:"center", paddingLeft:8 }}>
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.3)" }}>localhost:3000</span>
          </div>
        </div>
        {/* Icon */}
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", paddingTop:28, gap:8 }}>
          <div style={{ fontSize:52, filter:`drop-shadow(0 0 20px ${p.accent}99)`, transition:"transform 0.3s", transform: hovered ? "scale(1.18)" : "scale(1)" }}>
            {p.icon}
          </div>
          <span style={{ fontSize:11, color:"rgba(255,255,255,0.25)", letterSpacing:2, textTransform:"uppercase" }}>preview</span>
        </div>
        {/* Ghost number */}
        <div style={{ position:"absolute", bottom:-8, right:14, fontSize:72, fontWeight:900, color:"rgba(255,255,255,0.04)", lineHeight:1, userSelect:"none" }}>
          {p.number}
        </div>
        {/* Accent bottom line */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${p.accent},transparent)` }} />
      </div>

      {/* Card Body */}
      <div style={{ padding:"22px 24px 20px" }}>
        <span style={{ display:"inline-block", background:p.accentSoft, border:`1px solid ${p.accent}44`, borderRadius:999, padding:"3px 12px", fontSize:11, color:p.accent, fontWeight:600, marginBottom:12 }}>
          {p.badge}
        </span>
        <h3 style={{ fontSize:19, fontWeight:700, marginBottom:10, color:"#f1f5f9", lineHeight:1.3 }}>{p.title}</h3>
        <p style={{ fontSize:14, color:"#475569", lineHeight:1.8, marginBottom:16 }}>{p.description}</p>

        {/* Tech chips */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:20 }}>
          {p.tech.map((t) => (
            <span key={t} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:6, padding:"4px 11px", fontSize:12, color:"#94a3b8", fontWeight:500 }}>
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height:1, background:"rgba(255,255,255,0.06)", marginBottom:16 }} />

        {/* Action buttons */}
        <div style={{ display:"flex", gap:10 }}>
          <a href={p.github} className="proj-btn"
            style={{ background:"rgba(255,255,255,0.05)", color:"#94a3b8", border:"1px solid rgba(255,255,255,0.09)" }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.color="#e2e8f0"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.color="#94a3b8"; }}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
            GitHub
          </a>
          <a href={p.live} className="proj-btn"
            style={{ background:`linear-gradient(135deg,${p.accent}bb,${p.accent})`, color:"#fff" }}
            onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity="1"}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── ContactForm ─── */
    
  function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }

    setStatus("sending");

    emailjs.send(
      "service_2wzxtzp",    // ← Step 2-ல copy பண்ணது
      "template_n21xzua",   // ← Step 2-ல copy பண்ணது
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "Qu0225fnNqvPwJNXV"     // ← Step 2-ல copy பண்ணது
    )
    .then(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("error");
    });
  };

  const inputStyle = {
    width:"100%", background:"rgba(99,102,241,0.06)",
    border:"1px solid rgba(99,102,241,0.2)", borderRadius:10,
    padding:"12px 16px", color:"#e2e8f0", fontSize:14,
    outline:"none", boxSizing:"border-box"
  };

  return (
    <div style={{ background:"rgba(15,15,30,0.8)", border:"1px solid rgba(99,102,241,0.2)", borderRadius:20, padding:36, backdropFilter:"blur(10px)" }}>
      
      {/* Name */}
      <div style={{ marginBottom:20, textAlign:"left" }}>
        <label style={{ fontSize:13, color:"#64748b", display:"block", marginBottom:8 }}>Full Name</label>
        <input
          type="text" name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom:20, textAlign:"left" }}>
        <label style={{ fontSize:13, color:"#64748b", display:"block", marginBottom:8 }}>Email</label>
        <input
          type="email" name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom:20, textAlign:"left" }}>
        <label style={{ fontSize:13, color:"#64748b", display:"block", marginBottom:8 }}>Message</label>
        <textarea
          name="message" rows={4}
          placeholder="Hi! I'd like to connect..."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize:"vertical" }}
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={status === "sending"}
        style={{
          width:"100%", border:"none", borderRadius:10,
          padding:"14px", fontSize:15, fontWeight:700, cursor:"pointer",
          background: status === "sending" ? "rgba(99,102,241,0.4)" : "linear-gradient(135deg,#6366f1,#4f46e5)",
          color:"#fff",
        }}>
        {status === "sending" ? "⏳ Sending..." : "Send Message 🚀"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div style={{ marginTop:16, padding:"12px 16px", background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.3)", borderRadius:10, color:"#34d399", fontSize:14 }}>
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div style={{ marginTop:16, padding:"12px 16px", background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)", borderRadius:10, color:"#f87171", fontSize:14 }}>
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
}
