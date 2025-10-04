'use client'

import Link from 'next/link'
import { ArrowRight, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 container-custom min-h-screen flex items-end justify-center lg:justify-start px-4 sm:px-6 lg:px-8 pb-16 lg:pb-0 lg:items-center">
        <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0 w-full lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in mb-6 sm:mb-8 px-2">
            Learning Across
            <br />
            <span className="gradient-text">Minds and Machines</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-delay mb-8 sm:mb-12 px-4">
            Neuroscience. AI. Life Sciences. Social Sciences.
            <br />
            Join the next generation of interdisciplinary thinkers.
          </p>

          <div className="flex flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2 px-4">
            <Link
              href="/programs"
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base flex-1 sm:flex-none"
            >
              <span>Explore Programs</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/apply"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass-card glass-card-hover text-white font-semibold transition-all duration-300 flex items-center justify-center lg:justify-start text-sm sm:text-base flex-1 sm:flex-none"
            >
              <span>Get Brochure</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}