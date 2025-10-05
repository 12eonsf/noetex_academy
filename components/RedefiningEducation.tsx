'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './redefining.css'

export default function RedefiningEducation() {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const slides = [
    {
      id: 'cognitive',
      title: 'Cognitive Architecture',
      subtitle: 'Building the structures of understanding',
      description: 'We go beyond information transfer to train minds capable of mapping complexity, connecting insights across fields, and constructing new conceptual systems for the age of intelligence.',
      icon: 'tower'
    },
    {
      id: 'emerging',
      title: 'Emerging Disciplines',
      subtitle: 'Learning the sciences that will redefine the future',
      description: 'Our programs integrate the frontiers of neuroscience, AI, consciousness studies, and systems thinking — the fields reshaping how we perceive mind, society, and the universe.',
      icon: 'tree'
    },
    {
      id: 'evolution',
      title: 'Interdisciplinary Evolution',
      subtitle: 'From human cognition to collective intelligence',
      description: 'Education at Noetex is not static — it evolves with the learner, the machine, and the world. We prepare thinkers to lead the co-evolution of human and artificial intelligences, driving new paradigms of knowledge.',
      icon: 'network'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = scrollYProgress.get()
      const slideIndex = Math.floor(scrollPercent * slides.length)
      setActiveSlide(Math.min(slideIndex, slides.length - 1))
    }

    const unsubscribe = scrollYProgress.on('change', handleScroll)
    return () => unsubscribe()
  }, [scrollYProgress, slides.length])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-[#0b0d17] to-black overflow-hidden">
      {/* Background 3D Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tower - Cognitive Architecture */}
        <motion.div 
          className="absolute top-1/2 right-1/4 transform -translate-y-1/2"
          animate={{ 
            rotateY: activeSlide === 0 ? 360 : 0,
            scale: activeSlide === 0 ? 1.2 : 0.8,
            opacity: activeSlide === 0 ? 1 : 0.3
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="tower-3d">
            <div className="tower-base"></div>
            <div className="tower-level"></div>
            <div className="tower-level"></div>
            <div className="tower-level"></div>
            <div className="tower-top"></div>
          </div>
        </motion.div>

        {/* Tree - Emerging Disciplines */}
        <motion.div 
          className="absolute top-1/2 right-1/3 transform -translate-y-1/2"
          animate={{ 
            rotateY: activeSlide === 1 ? 360 : 0,
            scale: activeSlide === 1 ? 1.2 : 0.8,
            opacity: activeSlide === 1 ? 1 : 0.3
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="tree-3d">
            <div className="tree-trunk"></div>
            <div className="tree-branch"></div>
            <div className="tree-branch"></div>
            <div className="tree-branch"></div>
            <div className="tree-branch"></div>
          </div>
        </motion.div>

        {/* Network - Interdisciplinary Evolution */}
        <motion.div 
          className="absolute top-1/2 right-1/5 transform -translate-y-1/2"
          animate={{ 
            rotateY: activeSlide === 2 ? 360 : 0,
            scale: activeSlide === 2 ? 1.2 : 0.8,
            opacity: activeSlide === 2 ? 1 : 0.3
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="network-3d">
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-node"></div>
            <div className="network-connection"></div>
            <div className="network-connection"></div>
            <div className="network-connection"></div>
            <div className="network-connection"></div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
            Redefining <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-futura-1">
            We cultivate the disciplines that will define the next century — from neuroscience and artificial intelligence to cognitive science, complex systems, and social foresight. Here, education becomes an engine for discovering the architectures of future knowledge itself.
          </p>
        </div>

        {/* Interactive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`p-8 rounded-xl transition-all duration-500 ${
                  activeSlide === index 
                    ? 'glass-card glass-card-hover bg-gradient-to-r from-indigo-500/20 to-purple-500/20' 
                    : 'opacity-50'
                }`}
                animate={{
                  x: activeSlide === index ? 0 : -50,
                  opacity: activeSlide === index ? 1 : 0.5
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-mono-display mb-2">{slide.title}</h3>
                <p className="text-indigo-300 font-futura-1 mb-4">{slide.subtitle}</p>
                <p className="text-gray-300 font-futura-1 leading-relaxed">{slide.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - 3D Visualization */}
          <div className="relative h-[600px] flex items-center justify-center">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{
                rotateY: activeSlide * 120,
                scale: 1 + (activeSlide * 0.1)
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Active 3D Object */}
              {activeSlide === 0 && (
                <div className="tower-3d-large">
                  <div className="tower-base-large"></div>
                  <div className="tower-level-large"></div>
                  <div className="tower-level-large"></div>
                  <div className="tower-level-large"></div>
                  <div className="tower-top-large"></div>
                </div>
              )}
              
              {activeSlide === 1 && (
                <div className="tree-3d-large">
                  <div className="tree-trunk-large"></div>
                  <div className="tree-branch-large"></div>
                  <div className="tree-branch-large"></div>
                  <div className="tree-branch-large"></div>
                  <div className="tree-branch-large"></div>
                </div>
              )}
              
              {activeSlide === 2 && (
                <div className="network-3d-large">
                  <div className="network-node-large"></div>
                  <div className="network-node-large"></div>
                  <div className="network-node-large"></div>
                  <div className="network-node-large"></div>
                  <div className="network-node-large"></div>
                  <div className="network-connection-large"></div>
                  <div className="network-connection-large"></div>
                  <div className="network-connection-large"></div>
                  <div className="network-connection-large"></div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}