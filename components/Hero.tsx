'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Brain, AlignJustify } from 'lucide-react'
import Brain3D from './Brain3D'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo overflow-hidden">
      
      {/* 3D Brain Background - Desktop: Right side, Mobile: Full screen */}
      <div className="absolute inset-0 w-full h-full z-0 lg:right-0 lg:w-1/2 lg:left-auto">
        <Brain3D />
      </div>

      {/* Mobile Header - Glassmorphism effect */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-noetex-black/20 border-b border-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-col items-center space-y-3">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image 
                src="/logo.svg" 
                alt="Noetex Academy Logo" 
                width={40} 
                height={40}
                className="h-8 w-8"
              />
            </div>
            
            {/* Academy Name */}
            <div className="text-center">
              <span className="text-lg font-heading font-bold text-white">Noetex Academy</span>
            </div>
            
            {/* Navigation Icon */}
            <div className="flex justify-center">
              <button className="p-2 rounded-lg glass-card glass-card-hover">
                <AlignJustify className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Transparent background to show 3D brain */}
      <div className="relative z-10 container-custom min-h-screen flex items-end justify-center lg:justify-start px-4 sm:px-6 lg:px-8 pb-16 lg:pb-0 lg:items-center pt-20 lg:pt-0">
        <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0 w-full lg:max-w-2xl lg:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading leading-tight animate-fade-in mb-6 sm:mb-8 px-2">
            Learning Across
            <br />
            <span className="gradient-text font-heading">Minds and Machines</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-delay mb-8 sm:mb-12 px-4 font-display">
            Empowering future thinkers to navigate between biology and technology.
          </p>

          <div className="flex flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2 px-4">
            <Link
              href="/programs"
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-heading font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base flex-1 sm:flex-none"
            >
              <span>Explore Programs</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/apply"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass-card glass-card-hover text-white font-heading font-semibold transition-all duration-300 flex items-center justify-center lg:justify-start text-sm sm:text-base flex-1 sm:flex-none"
            >
              <span>Get Brochure</span>
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}