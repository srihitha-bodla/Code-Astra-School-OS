"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./landing.css";
import Logo from "@/components/Logo";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [counts, setCounts] = useState({ schools: 0, teachers: 0, students: 0, insights: 0 });
  const [aiToastText, setAiToastText] = useState("Assignment graded by AI");
  const [toastVisible, setToastVisible] = useState(false);

  // Scroll handler for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for reveals and counters
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          
          // If this is a stats card, start counter animation
          if (entry.target.classList.contains("stat-card")) {
            const countEl = entry.target.querySelector(".stat-count") as HTMLElement;
            if (countEl && countEl.innerText === "0") {
              const target = parseInt(countEl.getAttribute("data-count") || "0", 10);
              animateValue(countEl, 0, target, 2000);
            }
          }
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for dashboard bars
  useEffect(() => {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".dash-bar");
          bars.forEach((bar: any, index) => {
            setTimeout(() => {
              bar.style.height = bar.getAttribute("data-h") + "%";
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.3 });

    const dashPreview = document.querySelector(".dash-preview");
    if (dashPreview) barObserver.observe(dashPreview);

    return () => barObserver.disconnect();
  }, []);

  // AI Toast rotation
  useEffect(() => {
    const messages = [
      "Assignment graded by AI",
      "Parent notification sent",
      "Lesson plan optimized",
      "Attendance pattern detected",
      "Math quiz generated"
    ];
    let msgIdx = 0;

    const showToast = () => {
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
        setTimeout(() => {
          msgIdx = (msgIdx + 1) % messages.length;
          setAiToastText(messages[msgIdx]);
          showToast();
        }, 3000);
      }, 3500);
    };

    const initialTimer = setTimeout(() => {
      showToast();
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Counter animation helper
  const animateValue = (obj: HTMLElement, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      obj.innerHTML = Math.floor(easeProgress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end.toLocaleString();
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div className="landing-page font-inter bg-[#0b1020] text-[#c7cedd] overflow-x-hidden relative min-h-screen">
      <div className="backdrop fixed inset-0 z-0 pointer-events-none" id="backdrop" />
      <div className="grid-overlay fixed inset-0 z-[1] pointer-events-none opacity-35" />

      <header className={`nav fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${scrolled ? 'scrolled bg-[#0b1020]/70 backdrop-blur-lg border-b border-white/10 py-3' : 'py-5 border-b border-transparent'}`} id="siteNav">
        <div className="wrap flex items-center justify-between gap-6 max-w-[1240px] mx-auto px-8">
          <Link href="/" className="brand flex items-center gap-3">
            <Logo className="js-logo w-9 h-9" />
            <span className="brand-word text-lg font-bold text-white tracking-tight">
              School <b className="font-extrabold bg-gradient-to-r from-[#3ddcff] to-[#7aa8ff] text-transparent bg-clip-text">OS</b>
            </span>
          </Link>
          <nav className="nav-links hidden md:flex gap-8">
            <a href="#platform" className="text-sm text-[#c7cedd] hover:text-white transition-colors">Platform</a>
            <a href="#solutions" className="text-sm text-[#c7cedd] hover:text-white transition-colors">Solutions</a>
            <a href="#plans" className="text-sm text-[#c7cedd] hover:text-white transition-colors">Pricing</a>
            <a href="#resources" className="text-sm text-[#c7cedd] hover:text-white transition-colors">Resources</a>
            <a href="#about" className="text-sm text-[#c7cedd] hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-[#c7cedd] hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="nav-actions flex items-center gap-3">
            <a href="/role-select" className="btn-ghost text-sm font-medium text-[#c7cedd] hover:text-white py-2 px-1 transition-colors">Sign In</a>
            <a href="/role-select" className="btn-primary">🚀 Create Workspace</a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="hero min-h-screen flex items-center pt-[130px] pb-[70px]">
          <div className="wrap max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <div className="badge-pill hero-badge">✨ AI Powered School Operating System</div>
              <h1 className="mt-6 text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.08] font-extrabold text-white">
                The AI Operating System<br />for <span className="grad bg-gradient-to-r from-[#3ddcff] to-[#7aa8ff] text-transparent bg-clip-text">Modern Schools.</span>
              </h1>
              <div className="subhead mt-5 text-[19px] font-semibold text-white">One Intelligent Platform. Four Connected Workspaces.</div>
              <p className="lede mt-4 text-[16px] text-[#aab4c8] max-w-[490px] leading-relaxed">
                Empower your entire institution with AI-powered workspaces for Students, Teachers, Parents, and Administrators. From classroom learning and teaching to communication, analytics, and school management — everything runs from one secure cloud platform.
              </p>
              <div className="hero-ctas mt-8 flex gap-3 flex-wrap">
                <a href="/role-select" className="btn-primary">🚀 Create Your School Workspace</a>
                <a href="#demo" className="btn-secondary">▶ Watch Platform Demo</a>
              </div>
              <div className="hero-checks mt-7 flex gap-6 flex-wrap">
                <span className="text-[13px] text-[#aab4c8] flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-[#3ddcff]"><path d="M20 6L9 17l-5-5" /></svg> Free Workspace Setup
                </span>
                <span className="text-[13px] text-[#aab4c8] flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-[#3ddcff]"><path d="M20 6L9 17l-5-5" /></svg> Secure Cloud Platform
                </span>
                <span className="text-[13px] text-[#aab4c8] flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] stroke-[#3ddcff]"><path d="M20 6L9 17l-5-5" /></svg> Dedicated Portal for Every User
                </span>
              </div>
            </div>

            <div className="ai-visual relative w-full aspect-square max-w-[560px] mx-auto lg:order-last order-first" id="aiVisual">
              <svg className="lines absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3ddcff" />
                    <stop offset="100%" stopColor="#8b7cff" />
                  </linearGradient>
                </defs>
                <path className="flow-path opacity-55 stroke-[1.4px] fill-none" stroke="url(#lineGrad)" d="M50,50 Q34,32 18,20" />
                <path className="flow-path opacity-55 stroke-[1.4px] fill-none" stroke="url(#lineGrad)" d="M50,50 Q66,32 82,20" />
                <path className="flow-path opacity-55 stroke-[1.4px] fill-none" stroke="url(#lineGrad)" d="M50,50 Q34,68 18,80" />
                <path className="flow-path opacity-55 stroke-[1.4px] fill-none" stroke="url(#lineGrad)" d="M50,50 Q66,68 82,80" />
              </svg>

              <div className="node-card node-tl absolute w-[168px]">
                <div className="node-head flex items-center gap-2"><span className="node-dot bg-[#3ddcff] shadow-[0_0_8px_2px_rgba(61,220,255,0.6)] w-2 h-2 rounded-full"></span><span className="node-title">Student Workspace</span></div>
                <span className="node-sub">Assignments · AI Assistant</span>
              </div>
              <div className="node-card node-tr absolute w-[168px]">
                <div className="node-head flex items-center gap-2"><span className="node-dot bg-[#4f8dff] shadow-[0_0_8px_2px_rgba(79,141,255,0.6)] w-2 h-2 rounded-full"></span><span className="node-title">Teacher Workspace</span></div>
                <span className="node-sub">Lesson Planner · Grading</span>
              </div>
              <div className="node-card node-bl absolute w-[168px]">
                <div className="node-head flex items-center gap-2"><span className="node-dot bg-[#d9b46b] shadow-[0_0_8px_2px_rgba(217,180,107,0.6)] w-2 h-2 rounded-full"></span><span className="node-title">Parent Workspace</span></div>
                <span className="node-sub">Progress · Notifications</span>
              </div>
              <div className="node-card node-br absolute w-[168px]">
                <div className="node-head flex items-center gap-2"><span className="node-dot bg-[#8b7cff] shadow-[0_0_8px_2px_rgba(139,124,255,0.6)] w-2 h-2 rounded-full"></span><span className="node-title">Admin Workspace</span></div>
                <span className="node-sub">Analytics · AI Reports</span>
              </div>

              <div className="ai-core">
                <div className="ai-core-glow"></div>
                <div className="ai-core-ring"></div>
                <Logo className="js-logo relative z-[2] w-[78px] h-[78px]" />
              </div>

              <div className={`ai-toast ${toastVisible ? 'show' : ''}`} id="aiToast">
                <span className="t-dot"></span> <span>{aiToastText}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap max-w-[1240px] mx-auto px-8"><div className="divider"></div></div>

        {/* PLATFORM / FEATURE SECTION */}
        <section id="platform" className="py-[120px] relative">
          <div className="wrap max-w-[1240px] mx-auto px-8">
            <div className="section-head reveal">
              <div className="eyebrow">THE PLATFORM</div>
              <h2 className="text-[clamp(1.9rem,3vw,2.5rem)] mt-4 leading-[1.18] font-bold text-white">One Platform.<br />Every School Connected.</h2>
              <p className="mt-4 text-[15.5px] text-[#aab4c8] max-w-[540px]">Four dedicated workspaces, one shared intelligence layer. Every role gets the tools built for them — all speaking to the same AI engine.</p>
            </div>

            <div className="ws-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="ws-card student reveal">
                <div className="ws-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" /></svg></div>
                <span className="ws-tag">WORKSPACE 01</span>
                <h3 className="text-[19px] font-bold text-white mt-1">Student Workspace</h3>
                <ul className="ws-list">
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> AI Study Assistant</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Assignments</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Revision Notes</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Attendance</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Performance Dashboard</li>
                </ul>
              </div>

              <div className="ws-card teacher reveal">
                <div className="ws-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></div>
                <span className="ws-tag">WORKSPACE 02</span>
                <h3 className="text-[19px] font-bold text-white mt-1">Teacher Workspace</h3>
                <ul className="ws-list">
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> AI Teaching Assistant</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Lesson Planner</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Student Performance</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Assignments</li>
                </ul>
              </div>

              <div className="ws-card parent reveal">
                <div className="ws-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" /><circle cx="9" cy="7" r="4" /><path d="M23 20v-1a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <span className="ws-tag">WORKSPACE 03</span>
                <h3 className="text-[19px] font-bold text-white mt-1">Parent Workspace</h3>
                <ul className="ws-list">
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Progress Reports</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Attendance</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Notifications</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Teacher Communication</li>
                </ul>
              </div>

              <div className="ws-card admin reveal">
                <div className="ws-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l3.5-4.5L14 14l5-6.5" /></svg></div>
                <span className="ws-tag">WORKSPACE 04</span>
                <h3 className="text-[19px] font-bold text-white mt-1">Admin Workspace</h3>
                <ul className="ws-list">
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> School Analytics</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Teacher Monitoring</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> AI Reports</li>
                  <li><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Infrastructure Insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap max-w-[1240px] mx-auto px-8"><div className="divider"></div></div>

        {/* WORKFLOW / SOLUTIONS */}
        <section id="solutions" className="py-[120px] relative">
          <div className="wrap max-w-[1240px] mx-auto px-8">
            <div className="section-head reveal">
              <div className="eyebrow">HOW IT WORKS</div>
              <h2 className="text-[clamp(1.9rem,3vw,2.5rem)] mt-4 leading-[1.18] font-bold text-white">How School OS Connects Every Classroom.</h2>
              <p className="mt-4 text-[15.5px] text-[#aab4c8] max-w-[540px]">One activity in a classroom updates every workspace that needs to know about it — instantly, and intelligently.</p>
            </div>

            <div className="workflow-row reveal">
              <div className="flow-node">
                <div className="flow-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /></svg></div>
                <h4>Student Activity</h4>
                <span>Assignment submitted</span>
              </div>
              <div className="flow-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="flow-node">
                <div className="flow-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></div>
                <h4>Teacher Dashboard</h4>
                <span>Reviewed &amp; scored</span>
              </div>
              <div className="flow-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="flow-node">
                <div className="flow-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5z" /><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4" /></svg></div>
                <h4>AI Intelligence</h4>
                <span>Patterns detected</span>
              </div>
              <div className="flow-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="flow-node">
                <div className="flow-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l3.5-4.5L14 14l5-6.5" /></svg></div>
                <h4>Admin Insights</h4>
                <span>Trend surfaced</span>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap max-w-[1240px] mx-auto px-8"><div className="divider"></div></div>

        {/* WORKSPACE PREVIEW */}
        <section id="about" className="py-[120px] relative">
          <div className="wrap workspace-wrap max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
            <div className="ws-copy reveal">
              <div className="eyebrow">YOUR WORKSPACE</div>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.4rem)] font-bold text-white">Every School Gets Its Own Workspace.</h2>
              <p className="lede mt-4 text-[15.5px] text-[#aab4c8] max-w-[460px] leading-relaxed">Every institution receives a secure digital workspace where Students, Teachers, Parents and Administrators collaborate through one connected AI platform — provisioned in minutes, not months.</p>
              <div className="ws-mini-grid mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[420px]">
                <div className="ws-mini flex items-center gap-2.5 text-[12.5px] text-[#c7cedd] px-3.5 py-3 rounded-lg border border-white/10 bg-white/5"><span className="dot3 w-1.5 h-1.5 rounded-full shrink-0 bg-[#3ddcff]"></span> Isolated per-school data</div>
                <div className="ws-mini flex items-center gap-2.5 text-[12.5px] text-[#c7cedd] px-3.5 py-3 rounded-lg border border-white/10 bg-white/5"><span className="dot3 w-1.5 h-1.5 rounded-full shrink-0 bg-[#4f8dff]"></span> Role-based access</div>
                <div className="ws-mini flex items-center gap-2.5 text-[12.5px] text-[#c7cedd] px-3.5 py-3 rounded-lg border border-white/10 bg-white/5"><span className="dot3 w-1.5 h-1.5 rounded-full shrink-0 bg-[#d9b46b]"></span> Custom branding</div>
                <div className="ws-mini flex items-center gap-2.5 text-[12.5px] text-[#c7cedd] px-3.5 py-3 rounded-lg border border-white/10 bg-white/5"><span className="dot3 w-1.5 h-1.5 rounded-full shrink-0 bg-[#8b7cff]"></span> Live sync across portals</div>
              </div>
            </div>

            <div className="dash-preview reveal-scale bg-gradient-to-br from-[#121826] to-[#161d2e] border border-white/10 rounded-2xl p-7 shadow-2xl">
              <div className="dash-head flex items-center justify-between">
                <span className="dash-title font-mono text-[11.5px] text-[#aab4c8] tracking-wider">// GREENWOOD-HIGH.WORKSPACE</span>
                <span className="dash-live text-[11px] text-[#3ddcff] font-mono flex items-center gap-1.5">LIVE</span>
              </div>
              <div className="dash-chart mt-6 flex items-end gap-2 h-[120px]">
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="55"></div>
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="72"></div>
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="48"></div>
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="86"></div>
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="63"></div>
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="91"></div>
                <div className="dash-bar flex-1 rounded-t-md bg-gradient-to-b from-[#3ddcff] to-[#4f8dff] h-0 transition-all duration-[1400ms] ease-in-out" data-h="77"></div>
              </div>
              <div className="dash-stats-row mt-6 grid grid-cols-3 gap-3.5">
                <div className="dash-stat bg-white/5 border border-white/10 rounded-xl p-3.5 text-center"><div className="d-num text-xl font-extrabold text-white">1,284</div><div className="d-label mt-1 text-[10.5px] text-[#aab4c8] font-mono">STUDENTS</div></div>
                <div className="dash-stat bg-white/5 border border-white/10 rounded-xl p-3.5 text-center"><div className="d-num text-xl font-extrabold text-white">96%</div><div className="d-label mt-1 text-[10.5px] text-[#aab4c8] font-mono">ATTENDANCE</div></div>
                <div className="dash-stat bg-white/5 border border-white/10 rounded-xl p-3.5 text-center"><div className="d-num text-xl font-extrabold text-white">312</div><div className="d-label mt-1 text-[10.5px] text-[#aab4c8] font-mono">AI INSIGHTS</div></div>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap max-w-[1240px] mx-auto px-8"><div className="divider"></div></div>

        {/* SOCIAL PROOF */}
        <section id="resources" className="py-[120px] relative">
          <div className="wrap max-w-[1240px] mx-auto px-8">
            <div className="section-head center reveal mx-auto text-center">
              <div className="eyebrow justify-center">SOCIAL PROOF</div>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.5rem)] font-bold text-white">Trusted by Future-Ready Schools.</h2>
            </div>

            <div className="stats-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="stat-card reveal bg-white/5 border border-white/10 rounded-2xl p-6 text-center"><div className="stat-num text-[38px] font-extrabold text-white"><span className="stat-count" data-count="480">0</span><span className="plus text-[#3ddcff]">+</span></div><div className="stat-label mt-2 text-[12.5px] text-[#aab4c8]">Schools Connected</div></div>
              <div className="stat-card reveal bg-white/5 border border-white/10 rounded-2xl p-6 text-center"><div className="stat-num text-[38px] font-extrabold text-white"><span className="stat-count" data-count="31200">0</span><span className="plus text-[#3ddcff]">+</span></div><div className="stat-label mt-2 text-[12.5px] text-[#aab4c8]">Teachers Empowered</div></div>
              <div className="stat-card reveal bg-white/5 border border-white/10 rounded-2xl p-6 text-center"><div className="stat-num text-[38px] font-extrabold text-white"><span className="stat-count" data-count="512000">0</span><span className="plus text-[#3ddcff]">+</span></div><div className="stat-label mt-2 text-[12.5px] text-[#aab4c8]">Students Supported</div></div>
              <div className="stat-card reveal bg-white/5 border border-white/10 rounded-2xl p-6 text-center"><div className="stat-num text-[38px] font-extrabold text-white"><span className="stat-count" data-count="2100000">0</span><span className="plus text-[#3ddcff]">+</span></div><div className="stat-label mt-2 text-[12.5px] text-[#aab4c8]">AI Insights Generated</div></div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="py-[120px] relative">
          <div className="wrap max-w-[1240px] mx-auto px-8">
            <div className="final-cta reveal-scale rounded-3xl p-14 text-center border border-white/10 bg-gradient-to-br from-[#121826] to-[#0e1428] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(61,220,255,0.14),transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="eyebrow justify-center">READY WHEN YOU ARE</div>
                <h2 className="mt-4 text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.18] font-bold text-white max-w-[680px] mx-auto">Give your school one intelligent home for every workspace.</h2>
                <p className="mt-4 text-[15.5px] text-[#aab4c8] max-w-[460px] mx-auto">Create your institution's workspace in minutes — no setup fees, no long onboarding.</p>
                <div className="hero-ctas mt-8 flex gap-3 justify-center flex-wrap">
                  <a href="/role-select" className="btn-primary">🚀 Create Your School Workspace</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="pt-16 pb-8 border-t border-white/10 relative z-10">
        <div className="wrap max-w-[1240px] mx-auto px-8">
          <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
            <div className="footer-brand">
              <Link href="/" className="brand flex items-center gap-2 mb-1">
                <Logo className="js-logo w-8 h-8" />
                <span className="brand-word text-base font-bold text-white">School <b className="bg-gradient-to-r from-[#3ddcff] to-[#7aa8ff] text-transparent bg-clip-text font-extrabold">OS</b></span>
              </Link>
              <div className="footer-tagline mt-2 text-[11.5px] font-mono text-[#aab4c8] uppercase tracking-wider">Learning &bull; AI &bull; Transformation</div>
              <p className="desc mt-4 text-[13px] text-[#aab4c8] max-w-[260px] leading-relaxed">The AI operating system for modern schools — one platform, four connected workspaces.</p>
            </div>
            <div className="footer-col">
              <h5 className="font-mono text-[10.5px] text-[#aab4c8] uppercase tracking-wider mb-4">Platform</h5>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#platform" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Student Workspace</a></li>
                <li><a href="#platform" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Teacher Workspace</a></li>
                <li><a href="#platform" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Parent Workspace</a></li>
                <li><a href="#platform" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Admin Workspace</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5 className="font-mono text-[10.5px] text-[#aab4c8] uppercase tracking-wider mb-4">Company</h5>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#plans" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Pricing</a></li>
                <li><a href="#resources" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Resources</a></li>
                <li><a href="#about" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">About</a></li>
                <li><a href="#contact" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5 className="font-mono text-[10.5px] text-[#aab4c8] uppercase tracking-wider mb-4">Legal</h5>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Privacy</a></li>
                <li><a href="#" className="text-[13px] text-[#c7cedd] hover:text-[#3ddcff] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-14 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
            <p className="text-[12px] text-[#aab4c8]">&copy; 2026 School OS. All rights reserved.</p>
            <div className="footer-socials flex gap-4">
              <a href="#" className="text-[12px] text-[#aab4c8] hover:text-[#3ddcff] transition-colors">LinkedIn</a>
              <a href="#" className="text-[12px] text-[#aab4c8] hover:text-[#3ddcff] transition-colors">Twitter</a>
              <a href="#" className="text-[12px] text-[#aab4c8] hover:text-[#3ddcff] transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
