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
          {/* 1. Athenian Architecture */}
          <div className="draw-on-scroll">
            <svg viewBox="0 0 200 200" className="mx-auto line-draw-svg w-48 h-48 md:w-56 md:h-56">
              <g stroke="#9cc9ff" strokeWidth="1.2" fill="none">
                {/* Temple base */}
                <rect x="40" y="140" width="120" height="40"/>
                {/* Columns */}
                <line x1="50" y1="140" x2="50" y2="100"/>
                <line x1="70" y1="140" x2="70" y2="100"/>
                <line x1="90" y1="140" x2="90" y2="100"/>
                <line x1="110" y1="140" x2="110" y2="100"/>
                <line x1="130" y1="140" x2="130" y2="100"/>
                <line x1="150" y1="140" x2="150" y2="100"/>
                {/* Pediment (triangular roof) */}
                <path d="M40,100 L100,60 L160,100 Z"/>
                {/* Column capitals */}
                <rect x="45" y="100" width="10" height="8"/>
                <rect x="65" y="100" width="10" height="8"/>
                <rect x="85" y="100" width="10" height="8"/>
                <rect x="105" y="100" width="10" height="8"/>
                <rect x="125" y="100" width="10" height="8"/>
                <rect x="145" y="100" width="10" height="8"/>
                {/* Steps */}
                <rect x="35" y="150" width="130" height="8"/>
                <rect x="30" y="158" width="140" height="8"/>
                <rect x="25" y="166" width="150" height="8"/>
              </g>
            </svg>
            <h3 className="mt-6 text-xl font-futura-1 font-semibold mb-2">Athenian Architecture</h3>
            <p className="text-sm text-gray-400 font-futura-1">Classical foundations of knowledge, built with timeless wisdom and enduring principles.</p>
          </div>

          {/* 2. Nested Polygons */}
          <div className="draw-on-scroll">
            <svg viewBox="0 0 200 200" className="mx-auto line-draw-svg w-48 h-48 md:w-56 md:h-56">
              <g stroke="#7de4d6" strokeWidth="1.1" fill="none">
                {/* Outer hexagon */}
                <polygon points="100,20 160,50 160,110 100,140 40,110 40,50"/>
                {/* Middle pentagon */}
                <polygon points="100,40 140,60 130,100 100,120 70,100 60,60"/>
                {/* Inner square */}
                <polygon points="100,60 120,70 120,90 100,100 80,90 80,70"/>
                {/* Central triangle */}
                <polygon points="100,70 110,80 100,90 90,80"/>
                {/* Connection lines */}
                <line x1="100" y1="20" x2="100" y2="140"/>
                <line x1="40" y1="80" x2="160" y2="80"/>
                <line x1="60" y1="50" x2="140" y2="110"/>
                <line x1="140" y1="50" x2="60" y2="110"/>
                {/* Radial lines */}
                <line x1="100" y1="100" x2="100" y2="20"/>
                <line x1="100" y1="100" x2="160" y2="50"/>
                <line x1="100" y1="100" x2="160" y2="110"/>
                <line x1="100" y1="100" x2="40" y2="110"/>
                <line x1="100" y1="100" x2="40" y2="50"/>
              </g>
            </svg>
            <h3 className="mt-6 text-xl font-futura-1 font-semibold mb-2">Nested Polygons</h3>
            <p className="text-sm text-gray-400 font-futura-1">Layered geometric structures representing the complexity and beauty of interconnected knowledge systems.</p>
          </div>

          {/* 3. Galactic Orbits */}
          <div className="draw-on-scroll">
            <svg viewBox="0 0 200 200" className="mx-auto line-draw-svg w-48 h-48 md:w-56 md:h-56">
              <g stroke="#e3d87e" strokeWidth="1.0" fill="none">
                {/* Central star */}
                <circle cx="100" cy="100" r="4"/>
                {/* Inner orbit */}
                <ellipse cx="100" cy="100" rx="25" ry="25"/>
                {/* Middle orbit */}
                <ellipse cx="100" cy="100" rx="45" ry="35" transform="rotate(15 100 100)"/>
                {/* Outer orbit */}
                <ellipse cx="100" cy="100" rx="65" ry="45" transform="rotate(-15 100 100)"/>
                {/* Orbiting bodies */}
                <circle cx="125" cy="100" r="2"/>
                <circle cx="75" cy="100" r="2"/>
                <circle cx="100" cy="75" r="2"/>
                <circle cx="100" cy="125" r="2"/>
                {/* Outer bodies */}
                <circle cx="140" cy="85" r="1.5"/>
                <circle cx="60" cy="115" r="1.5"/>
                <circle cx="140" cy="115" r="1.5"/>
                <circle cx="60" cy="85" r="1.5"/>
                {/* Spiral arms */}
                <path d="M100,100 Q120,80 140,85 Q130,100 120,120 Q100,110 100,100"/>
                <path d="M100,100 Q80,120 60,115 Q70,100 80,80 Q100,90 100,100"/>
                {/* Connection lines */}
                <line x1="100" y1="100" x2="125" y2="100" strokeDasharray="2,2"/>
                <line x1="100" y1="100" x2="100" y2="75" strokeDasharray="2,2"/>
                <line x1="100" y1="100" x2="140" y2="85" strokeDasharray="2,2"/>
                <line x1="100" y1="100" x2="60" y2="115" strokeDasharray="2,2"/>
              </g>
            </svg>
            <h3 className="mt-6 text-xl font-futura-1 font-semibold mb-2">Galactic Orbits</h3>
            <p className="text-sm text-gray-400 font-futura-1">Cosmic dance of knowledge systems, where ideas orbit and interact in gravitational harmony.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
