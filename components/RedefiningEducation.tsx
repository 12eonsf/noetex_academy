'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    title: 'Cognitive Architecture',
    text: 'Building the structures of understanding. We train minds to map complexity, connect insights across fields, and construct new conceptual systems for the next paradigm shift in technology.',
  },
  {
    title: 'Emerging Disciplines',
    text: 'Learning at the frontiers of mind and matter. Our programs weave together neuroscience, artificial intelligence, cognitive science, and social sciences — disciplines redefining how we understand cognition, society, and the universe.',
  },
  {
    title: 'Resonant Fields',
    text: 'Education at Noetex grows with the learner, the machine, and the world — preparing thinkers to lead the next transformation of knowledge and intelligence.',
  },
]

export default function RedefiningEducation() {
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const progressWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(() => {
      const contentPanels = gsap.utils.toArray<HTMLElement>('.edu-content')

      // Pin the intro as its own full-screen page
      const introEl = document.querySelector('.edu-intro') as HTMLElement | null
      if (introEl) {
        ScrollTrigger.create({
          trigger: introEl,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false,
        })
      }

      // Content panels: each one is a full-page that fades in while pinned
      contentPanels.forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top top',
              end: '+=100%',
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          }
        )
      })

      // Spacer page after content finished: pinned blank screen; pause at end, resume on back-scroll
      const spacer = document.querySelector('.edu-spacer') as HTMLElement | null
      if (spacer) {
        ScrollTrigger.create({
          trigger: spacer,
          start: 'top top',
          endTrigger: '#noetex-strip',
          end: 'top bottom',
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            if (videoRef.current) {
              videoRef.current.pause()
            }
          },
          onEnterBack: () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {})
            }
          },
        })
      }

      // Global progress bar across the whole section
      if (progressRef.current && progressWrapRef.current && rootRef.current) {
        const bar = progressRef.current
        const wrap = progressWrapRef.current
        gsap.set([wrap, bar], { autoAlpha: 0 })
        gsap.set(bar, { scaleY: 0, transformOrigin: 'top center' })
        ScrollTrigger.create({
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => gsap.to([wrap, bar], { autoAlpha: 1, duration: 0.2 }),
          onUpdate: (self) => {
            gsap.to(bar, { scaleY: self.progress, duration: 0.1, ease: 'none' })
          },
          onLeave: () => gsap.to([wrap, bar], { autoAlpha: 0, duration: 0.2 }),
          onEnterBack: () => gsap.to([wrap, bar], { autoAlpha: 1, duration: 0.2 }),
          onLeaveBack: () => gsap.to([wrap, bar], { autoAlpha: 0, duration: 0.2 }),
        })
      }
    }, rootRef)

    // Best-effort autoplay/resume on mount and when tab becomes visible
    if (videoRef.current) {
      const v = videoRef.current
      // WeChat-specific: attempt play on first touch
      const onFirstTouch = () => {
        v.play().catch(() => {})
        window.removeEventListener('touchstart', onFirstTouch)
      }
      window.addEventListener('touchstart', onFirstTouch, { once: true })
      const tryPlay = () => {
        console.log('Attempting to play video...')
        v.play().catch((err) => {
          console.log('Video play failed:', err)
          // Try again after a short delay
          setTimeout(() => v.play().catch(() => {}), 1000)
        })
      }
      const onVisibility = () => { if (!document.hidden) tryPlay() }
      const onLoadStart = () => console.log('Video load started')
      const onCanPlay = () => {
        console.log('Video can play')
        tryPlay()
      }
      const onError = (e: Event) => console.log('Video error:', e)
      
      v.addEventListener('loadstart', onLoadStart)
      v.addEventListener('canplay', onCanPlay)
      v.addEventListener('loadeddata', tryPlay)
      v.addEventListener('error', onError)
      document.addEventListener('visibilitychange', onVisibility)
      
      // Try immediately and after a delay
      tryPlay()
      setTimeout(tryPlay, 2000)
      
      return () => { 
        ctx.revert()
        v.removeEventListener('loadstart', onLoadStart)
        v.removeEventListener('canplay', onCanPlay)
        v.removeEventListener('loadeddata', tryPlay)
        v.removeEventListener('error', onError)
        document.removeEventListener('visibilitychange', onVisibility)
        window.removeEventListener('touchstart', onFirstTouch)
      }
    }

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} id="redefining-education" className="relative w-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover object-left md:object-center -z-10"
        src="/Noetex Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        // WeChat / iOS inline
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        x5-playsinline="true"
        preload="auto"
        poster="/images/neuroscience.png"
      />

      {/* Subtle overlays */}
      <div className="edu-bg-overlay pointer-events-none fixed inset-0 -z-10">
        {/* Lighter black translucent mask for readability while revealing video */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Vertical progress bar */}
      <div ref={progressWrapRef} className="fixed right-4 top-1/2 -translate-y-1/2 h-2/3 w-[3px] rounded-full bg-white/10 z-10 pointer-events-none" aria-hidden="true">
        <div
          ref={progressRef}
          className="h-full w-full rounded-full bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 opacity-0"
          style={{ transform: 'scaleY(0)' }}
        />
      </div>

      {/* Header panel */}
      <div className="edu-panel edu-intro flex flex-col justify-center items-center h-screen text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-5xl md:text-6xl font-mono-display tracking-wide"
        >
          Redefining <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed font-futura-1"
        >
          At Noetex, education becomes a medium for exploring the architectures of future knowledge — where minds and machines evolve together to expand human understanding.
        </motion.p>
      </div>

      {/* Narrative panels */}
      {sections.map((s, i) => (
        <div key={i} className="edu-panel edu-content flex flex-col h-screen px-6 sm:px-8 md:px-32 items-center justify-center md:items-start md:justify-end pb-16 md:pb-12">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto md:mx-0 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-mono-display bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{s.title}</h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-futura-1">{s.text}</p>
          </div>
        </div>
      ))}

      {/* Spacer blank page after the narrative sequence */}
      <div className="edu-panel edu-spacer h-screen" />
    </section>
  )
}


