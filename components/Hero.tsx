'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Brain, AlignJustify } from 'lucide-react'
import dynamic from 'next/dynamic'
import ErrorBoundary from './ErrorBoundary'

const Brain3D = dynamic(() => import('./Brain3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-noetex-black to-noetex-indigo animate-pulse" />
})

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo overflow-hidden">
      
      {/* 3D Brain Background - Desktop: Right side, Mobile: Full screen */}
      <div className="absolute inset-0 w-full h-full z-0 lg:right-0 lg:w-1/2 lg:left-auto">
        <ErrorBoundary>
          <Brain3D />
        </ErrorBoundary>
      </div>


      {/* Main Content - Semi-transparent background to show 3D brain */}
      <div className="relative z-10 container-custom min-h-screen flex items-end justify-center lg:justify-start px-4 sm:px-6 lg:px-8 pb-16 lg:pb-0 lg:items-center pt-20 lg:pt-0 bg-gradient-to-br from-noetex-black/80 via-noetex-black/60 to-noetex-indigo/40 lg:bg-gradient-to-r lg:from-noetex-black/90 lg:via-noetex-black/80 lg:to-transparent">
        <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0 w-full lg:max-w-2xl lg:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono-display leading-tight animate-fade-in mb-6 sm:mb-8 px-2">
            Learning Across
            <br />
            <span className="gradient-text font-mono-display">Minds and Machines</span>
          </h1>
          
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed animate-fade-in-delay mb-8 sm:mb-12 px-4 font-futura-1">
            Empowering future thinkers to navigate between biology and technology.
          </p>

          <div className="flex items-center justify-center lg:justify-start animate-fade-in-delay-2 px-4">
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              {/* Left line */}
              <div className="flex-1 lg:flex-none lg:w-16 h-px bg-gradient-to-r from-indigo-400 to-purple-400"></div>
              
              {/* Text Link */}
              <Link
                href="/programs"
                className="group text-white font-futura-1 font-semibold hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>Explore Programs</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}