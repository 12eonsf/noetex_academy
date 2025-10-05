'use client'
import { useEffect } from 'react'
import './redefining.css'

export default function RedefiningEducation() {
  useEffect(() => {
    const targets = document.querySelectorAll('.draw-on-scroll')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.3 })
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-gradient-to-b from-[#0b0d17] to-black text-white py-24 text-center">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
          Redefining <span className="gradient-text">Education</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-futura-1 mb-16">
          Learning as the architecture of future knowledge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* 1. Cognitive Architecture */}
          <div className="draw-on-scroll">
            <svg viewBox="0 0 200 200" className="mx-auto line-draw-svg w-48 h-48 md:w-56 md:h-56">
              <g stroke="#9cc9ff" strokeWidth="1.2" fill="none">
                {/* Base cube */}
                <rect x="60" y="120" width="80" height="60"/>
                <rect x="55" y="105" width="90" height="75"/>
                <rect x="50" y="90" width="100" height="90"/>
                {/* Connection lines */}
                <line x1="60" y1="120" x2="50" y2="90"/>
                <line x1="140" y1="120" x2="150" y2="90"/>
                <line x1="60" y1="180" x2="50" y2="150"/>
                <line x1="140" y1="180" x2="150" y2="150"/>
                {/* Vertical lines */}
                <line x1="100" y1="90" x2="100" y2="180"/>
                <line x1="80" y1="105" x2="80" y2="165"/>
                <line x1="120" y1="105" x2="120" y2="165"/>
              </g>
            </svg>
            <h3 className="mt-6 text-xl font-futura-1 font-semibold mb-2">Cognitive Architecture</h3>
            <p className="text-sm text-gray-400 font-futura-1">Building the structures of understanding through layered knowledge frameworks.</p>
          </div>

          {/* 2. Emerging Disciplines */}
          <div className="draw-on-scroll">
            <svg viewBox="0 0 200 200" className="mx-auto line-draw-svg w-48 h-48 md:w-56 md:h-56">
              <g stroke="#7de4d6" strokeWidth="1.1" fill="none">
                {/* Main polygon */}
                <polygon points="100,20 170,70 150,160 50,160 30,70"/>
                {/* Inner connections */}
                <polygon points="100,60 130,100 100,140 70,100"/>
                <polygon points="100,40 120,60 100,80 80,60"/>
                {/* Network lines */}
                <line x1="100" y1="20" x2="100" y2="140"/>
                <line x1="100" y1="60" x2="130" y2="100"/>
                <line x1="100" y1="60" x2="70" y2="100"/>
                <line x1="100" y1="40" x2="120" y2="60"/>
                <line x1="100" y1="40" x2="80" y2="60"/>
                {/* Corner connections */}
                <line x1="30" y1="70" x2="50" y2="160"/>
                <line x1="170" y1="70" x2="150" y2="160"/>
              </g>
            </svg>
            <h3 className="mt-6 text-xl font-futura-1 font-semibold mb-2">Emerging Disciplines</h3>
            <p className="text-sm text-gray-400 font-futura-1">Where traditional boundaries dissolve into interconnected knowledge networks.</p>
          </div>

          {/* 3. Interdisciplinary Evolution */}
          <div className="draw-on-scroll">
            <svg viewBox="0 0 200 200" className="mx-auto line-draw-svg w-48 h-48 md:w-56 md:h-56">
              <g stroke="#e3d87e" strokeWidth="1.0" fill="none">
                {/* First orbit */}
                <ellipse cx="100" cy="100" rx="60" ry="30" transform="rotate(30 100 100)"/>
                {/* Second orbit */}
                <ellipse cx="100" cy="100" rx="60" ry="30" transform="rotate(-30 100 100)"/>
                {/* Central convergence */}
                <circle cx="100" cy="100" r="8"/>
                {/* Connection points */}
                <circle cx="160" cy="100" r="3"/>
                <circle cx="40" cy="100" r="3"/>
                <circle cx="100" cy="70" r="3"/>
                <circle cx="100" cy="130" r="3"/>
                {/* Spiral connections */}
                <path d="M100,100 Q130,70 160,100 Q130,130 100,100"/>
                <path d="M100,100 Q70,130 40,100 Q70,70 100,100"/>
              </g>
            </svg>
            <h3 className="mt-6 text-xl font-futura-1 font-semibold mb-2">Interdisciplinary Evolution</h3>
            <p className="text-sm text-gray-400 font-futura-1">Human and AI intelligence coevolving through continuous learning and adaptation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
