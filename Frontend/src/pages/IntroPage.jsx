import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const STATS = [
  { value: 250, suffix: '+', label: 'AI Tools' },
  { value: 50, suffix: '+', label: 'Categories' },
  { value: 12, suffix: 'K+', label: 'Users' },
  { value: 98, suffix: '%', label: 'Free to Browse' },
]
 
const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: 'Instant Discovery',
    desc: 'Search across 250+ curated AI tools in milliseconds. Filter by category, pricing, and use case.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Verified & Curated',
    desc: 'Every tool is manually reviewed. Real descriptions, accurate pricing, honest pros and cons.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Updated Daily',
    desc: 'New tools added every day. Never miss the next breakthrough AI product in your field.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community Driven',
    desc: 'Request tools, leave reviews, and help others discover what actually works.',
  },
]
 
const MARQUEE_TOOLS = [
  'ChatGPT', 'Midjourney', 'Claude', 'Perplexity', 'GitHub Copilot',
  'Runway', 'ElevenLabs', 'Notion AI', 'Jasper', 'Synthesia',
  'Cursor', 'Sora', 'Gemini', 'Kling', 'Descript',
]
 
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}
 
function StatCard({ value, suffix, label, animate }) {
  const count = useCountUp(value, 1600, animate)
  return (
    <div className="stat-card">
      <div className="stat-value">{animate ? count : 0}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
 
const IntroPage = () => {
  const navigate = useNavigate()
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
 
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
 
        .intro-root {
          font-family: 'DM Sans', sans-serif;
          background: #07070f;
          color: #e8e8f0;
          min-height: 100vh;
          overflow-x: hidden;
        }
 
        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
          overflow: hidden;
        }
 
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.18;
          z-index: 0;
        }
 
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,60,220,0.18) 0%, transparent 70%),
                      linear-gradient(to bottom, rgba(7,7,15,0.3) 0%, rgba(7,7,15,0.85) 80%, #07070f 100%);
          z-index: 1;
        }
 
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 860px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1);
        }
        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
 
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.35);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #c4b5fd;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.8rem;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          background: #8b5cf6;
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(1.4); }
        }
 
        .hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.03em;
          margin-bottom: 1.4rem;
        }
        .hero-title .line2 {
          background: linear-gradient(95deg, #818cf8 0%, #a78bfa 40%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
 
        .hero-sub {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: rgba(232,232,240,0.6);
          max-width: 560px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          font-weight: 300;
        }
 
        .hero-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
 
        .btn-primary {
          padding: 14px 34px;
          background: linear-gradient(135deg, #6d28d9, #4f46e5);
          border: none;
          border-radius: 100px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.97rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 24px rgba(109,40,217,0.45);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(109,40,217,0.6);
        }
 
        .btn-ghost {
          padding: 13px 30px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
          color: #e8e8f0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.97rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          backdrop-filter: blur(8px);
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.11);
          border-color: rgba(255,255,255,0.28);
          transform: translateY(-2px);
        }
 
        .trust-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex-wrap: wrap;
          font-size: 0.82rem;
          color: rgba(232,232,240,0.4);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .trust-check {
          width: 14px; height: 14px;
          background: rgba(139,92,246,0.25);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #a78bfa;
          font-size: 9px;
          flex-shrink: 0;
        }
        .trust-sep { opacity: 0.2; }
 
        /* ── MARQUEE ── */
        .marquee-section {
          position: relative;
          z-index: 2;
          padding: 3rem 0 2rem;
          overflow: hidden;
        }
        .marquee-label {
          text-align: center;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(232,232,240,0.3);
          margin-bottom: 1.4rem;
        }
        .marquee-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          margin: 0 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          font-size: 0.85rem;
          color: rgba(232,232,240,0.6);
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s;
        }
        .marquee-chip:hover {
          border-color: rgba(139,92,246,0.4);
          color: #c4b5fd;
        }
        .marquee-dot {
          width: 6px; height: 6px;
          background: #6d28d9;
          border-radius: 50%;
          opacity: 0.6;
        }
        .marquee-fade-l {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 120px;
          background: linear-gradient(to right, #07070f, transparent);
          z-index: 3;
          pointer-events: none;
        }
        .marquee-fade-r {
          position: absolute; right: 0; top: 0; bottom: 0;
          width: 120px;
          background: linear-gradient(to left, #07070f, transparent);
          z-index: 3;
          pointer-events: none;
        }
 
        /* ── STATS ── */
        .stats-section {
          padding: 4rem 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1.5rem;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-card:hover {
          border-color: rgba(139,92,246,0.3);
          background: rgba(139,92,246,0.05);
        }
        .stat-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
          background: linear-gradient(135deg, #818cf8, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-size: 0.85rem;
          color: rgba(232,232,240,0.45);
          font-weight: 400;
        }
 
        /* ── FEATURES ── */
        .features-section {
          padding: 5rem 1.5rem;
          max-width: 1080px;
          margin: 0 auto;
        }
        .section-eyebrow {
          text-align: center;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8b5cf6;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          text-align: center;
          letter-spacing: -0.02em;
          margin-bottom: 0.8rem;
        }
        .section-sub {
          text-align: center;
          color: rgba(232,232,240,0.5);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto 3.5rem;
          line-height: 1.7;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .feature-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 2rem;
          transition: transform 0.25s, border-color 0.25s, background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.08), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-card:hover { transform: translateY(-4px); border-color: rgba(139,92,246,0.28); }
        .feature-card:hover::before { opacity: 1; }
        .feature-icon {
          width: 44px; height: 44px;
          background: rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #a78bfa;
          margin-bottom: 1.2rem;
        }
        .feature-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.6rem;
          color: #e8e8f0;
        }
        .feature-desc {
          font-size: 0.88rem;
          color: rgba(232,232,240,0.5);
          line-height: 1.65;
        }
 
        /* ── CTA BANNER ── */
        .cta-section {
          padding: 5rem 1.5rem 6rem;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-box {
          background: linear-gradient(135deg, rgba(99,60,220,0.18), rgba(56,189,248,0.08));
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 28px;
          padding: 3.5rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.8rem;
        }
        .cta-sub {
          color: rgba(232,232,240,0.55);
          font-size: 0.97rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .cta-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
 
        /* ── FOOTER STRIP ── */
        .intro-footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem;
          text-align: center;
          font-size: 0.78rem;
          color: rgba(232,232,240,0.25);
        }
 
        @media (max-width: 600px) {
          .hero-actions { flex-direction: column; align-items: center; }
          .trust-row { gap: 12px; }
          .cta-box { padding: 2.5rem 1.5rem; }
        }
      `}</style>
 
      <div className="intro-root">
        {/* ── HERO ── */}
        <section className="hero">
          <video className="hero-video" autoPlay loop muted playsInline>
            <source src="/bgin.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
 
          <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              250+ Verified AI Tools — Updated Daily
            </div>
 
            <h1 className="hero-title">
              Find the Right AI Tool<br />
              <span className="line2">For Every Task</span>
            </h1>
 
            <p className="hero-sub">
              ToolVerse is the definitive directory for AI tools.
              Search, compare, and discover the best AI products
              across 50+ categories — all in one place.
            </p>
 
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/auth?mode=register')}>
                Get Started Free →
              </button>
              <button className="btn-ghost" onClick={() => navigate('/auth?mode=login')}>
                Sign In
              </button>
            </div>
 
            <div className="trust-row">
              <span className="trust-item">
                <span className="trust-check">✓</span>
                No credit card required
              </span>
              <span className="trust-sep">·</span>
              <span className="trust-item">
                <span className="trust-check">✓</span>
                Free forever plan
              </span>
              <span className="trust-sep">·</span>
              <span className="trust-item">
                <span className="trust-check">✓</span>
                Verified tool listings
              </span>
            </div>
          </div>
        </section>
 
        {/* ── MARQUEE ── */}
        <section className="marquee-section">
          <p className="marquee-label">Featuring tools from</p>
          <div style={{ position: 'relative' }}>
            <div className="marquee-fade-l" />
            <div style={{ overflow: 'hidden' }}>
              <div className="marquee-track">
                {[...MARQUEE_TOOLS, ...MARQUEE_TOOLS].map((name, i) => (
                  <span key={i} className="marquee-chip">
                    <span className="marquee-dot" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div className="marquee-fade-r" />
          </div>
        </section>
 
        {/* ── STATS ── */}
        <div ref={statsRef} className="stats-section">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} animate={statsVisible} />
          ))}
        </div>
 
        {/* ── FEATURES ── */}
        <section className="features-section">
          <p className="section-eyebrow">Why ToolVerse</p>
          <h2 className="section-title">Everything you need to<br />navigate the AI landscape</h2>
          <p className="section-sub">
            Stop wasting time trying random tools. We do the research so you can focus on building.
          </p>
          <div className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>
 
        {/* ── BOTTOM CTA ── */}
        <section className="cta-section">
          <div className="cta-box">
            <h2 className="cta-title">Start discovering AI tools<br />that actually work</h2>
            <p className="cta-sub">
              Join thousands of developers, designers, and marketers who use ToolVerse to stay ahead of the curve.
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => navigate('/auth?mode=register')}>
                Create Free Account
              </button>
              <button className="btn-ghost" onClick={() => navigate('/auth?mode=login')}>
                I already have an account
              </button>
            </div>
          </div>
        </section>
 
        {/* ── FOOTER STRIP ── */}
        <footer className="intro-footer">
          © {new Date().getFullYear()} ToolVerse · Discover the best AI tools
        </footer>
      </div>
    </>
  )
}
 
export default IntroPage
