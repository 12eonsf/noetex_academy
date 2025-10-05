'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import CognitiveScene from './scenes/CognitiveScene'
import PolygonScene from './scenes/PolygonScene'
import OrbitScene from './scenes/OrbitScene'

const slides = [
  {
    id: 'cognitive',
    title: 'Cognitive Architecture',
    subtitle: 'Building the structures of understanding',
    description: 'We construct neural frameworks that mirror the mind\'s own architecture, creating pathways for knowledge to flow and crystallize.',
    scene: CognitiveScene
  },
  {
    id: 'emerging',
    title: 'Emerging Disciplines',
    subtitle: 'Where boundaries dissolve',
    description: 'Neuroscience, AI, complexity science, and consciousness studies converge into new forms of knowledge that transcend traditional categories.',
    scene: PolygonScene
  },
  {
    id: 'evolution',
    title: 'Interdisciplinary Evolution',
    subtitle: 'Human and AI coevolve through learning',
    description: 'As artificial and biological intelligence intertwine, we discover new forms of collaboration that amplify human potential.',
    scene: OrbitScene
  }
]

export default function RedefiningEducation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, -100, -200, -300])
  const springX = useSpring(x, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setWindowWidth(window.innerWidth)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDragEnd = (event: any, info: any) => {
    if (isMobile) {
      const threshold = 50
      if (info.offset.x > threshold && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      } else if (info.offset.x < -threshold && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      }
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0b0d17] to-black"
    >
      {/* Desktop: Vertical scroll */}
      <div className="hidden md:block">
        <motion.div 
          style={{ x: springX }}
          className="flex h-full"
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-screen flex-shrink-0 relative">
              {/* 3D Background */}
              <div className="absolute inset-0">
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }}
                  gl={{ antialias: true, alpha: true }}
                >
                  <Suspense fallback={null}>
                    <slide.scene />
                    <EffectComposer>
                      <Bloom intensity={0.5} luminanceThreshold={0.9} />
                    </EffectComposer>
                  </Suspense>
                </Canvas>
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-8 text-center">
                  <motion.h2 
                    className="text-5xl lg:text-7xl font-mono-display mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.h3 
                    className="text-xl lg:text-2xl font-futura-1 text-indigo-300 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.h3>
                  <motion.p 
                    className="text-lg lg:text-xl font-futura-1 text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Horizontal swipe */}
      <div className="md:hidden">
        <motion.div 
          className="flex h-full"
          drag="x"
          dragConstraints={{ left: -(slides.length - 1) * windowWidth, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{ x: -currentSlide * windowWidth }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full h-screen flex-shrink-0 relative">
              {/* 3D Background */}
              <div className="absolute inset-0">
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }}
                  gl={{ antialias: true, alpha: true }}
                >
                  <Suspense fallback={null}>
                    <slide.scene />
                    <EffectComposer>
                      <Bloom intensity={0.3} luminanceThreshold={0.9} />
                    </EffectComposer>
                  </Suspense>
                </Canvas>
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <h2 className="text-3xl font-mono-display mb-4">
                    {slide.title}
                  </h2>
                  <h3 className="text-lg font-futura-1 text-indigo-300 mb-6">
                    {slide.subtitle}
                  </h3>
                  <p className="text-base font-futura-1 text-gray-300 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-indigo-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
