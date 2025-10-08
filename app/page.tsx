"use client"

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import RedefiningEducation from '@/components/RedefiningEducation'
import CourseCard from '@/components/CourseCard'
import MentorCard from '@/components/MentorCard'
import FieldsWeExplore from '@/components/FieldsWeExplore'
import { Brain, Zap, Users, Award, Quote, Star, ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState, useEffect, useRef } from 'react'

// DecryptingText component for fast character-by-character decryption effect with scroll trigger
function DecryptingText({ text, highlightedWords = [] }: { text: string, highlightedWords?: Array<{ word: string, color: string }> }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timer = setTimeout(() => {
        // Show glitch character first
        const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)]
        setDisplayedText(prev => prev + glitchChar)
        
        // Then show the correct character after a very short delay
        setTimeout(() => {
          setDisplayedText(prev => {
            const withoutGlitch = prev.slice(0, -1)
            return withoutGlitch + text[currentIndex]
          })
          setCurrentIndex(currentIndex + 1)
        }, 10) // Very fast decryption
      }, 5) // Very fast character interval

      return () => clearTimeout(timer)
    }
  }, [isVisible, currentIndex, text])

  const renderText = () => {
    let result = displayedText
    let lastIndex = 0

    // Apply highlighting to specific words
    highlightedWords.forEach(({ word, color }) => {
      // Escape special regex characters and use a more flexible pattern
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const regex = new RegExp(`(${escapedWord})`, 'gi')
      result = result.replace(regex, `<span class="bg-gradient-to-r ${color} bg-clip-text text-transparent">$1</span>`)
    })

    return <span ref={textRef} dangerouslySetInnerHTML={{ __html: result }} />
  }

  return renderText()
}

export default function Home() {
  // Sample data for courses
  const featuredCourses = [
    {
      title: "The Neuroscience and Computation of Decision-making",
      description: "This course offers a hands-on foundation in decision-making research, combining core theories, computational models, and neuroscience methods with insights from AI for advanced interdisciplinary study.",
      duration: "7 weeks",
      students: 15,
      tags: ["Neuroscience", "Neuroeconomics", "Computational Models"],
      href: "/programs/neuroscience-decision-making",
      featured: true,
      featuredText: "Enrolling Now",
      format: "Livestreaming",
      startDate: "November 15, 2025",
      maxStudents: 15,
      location: "Zoom",
      coverImage: "/courses/neuroscience-decision-making.JPG",
      instructor: "Faculty from: Dartmouth College, University College London",
      hours: "24.5 Hours",
      type: "Course"
    },
    {
      title: "The Noetex Academy Winter Program: Exploring Life and Intelligence",
      description: "Immersive course helping students master fundamental and research skills in neuroscience and artificial intelligence, with opportunities to exchange ideas with students and scholars from around the world.",
      duration: "10 Days",
      students: 10,
      tags: ["Neuroscience", "AI", "Research Skills"],
      href: "/programs/neuroscience-winter-school",
      featured: true,
      featuredText: "Coming Soon",
      format: "In-person",
      startDate: "February 1, 2026",
      minStudents: 10,
      location: "Cambridge, London, Oxford",
      coverImage: "/courses/neuroscience-winter-school.jpg",
      instructor: "Faculty from: University of Cambridge, University of Oxford",
      hours: "35 Hours",
      type: "School"
    }
  ]

  // Past programs data
  const pastPrograms = [
    {
      title: "Flexible Cognitive Control: How We Adapt Our Thinking and Behavior to Goals",
      description: "Explore the brain's 'scheduling' mechanism that enables flexible goal-directed behavior through hands-on cognitive neuroscience research.",
      duration: "3 Days",
      tags: ["Cognitive Science", "Neuroscience", "Research Methods"],
      href: "/programs/cognitive-control",
      featured: false,
      format: "In-person",
      startDate: "August 24, 2025",
      location: "Cambridge",
      coverImage: "/courses/cognitive-control.jpg",
      instructor: "Faculty from: University of Cambridge",
      type: "Course"
    },
    {
      title: "Cognitive Algorithms and Neural Mechanisms of Economic Games",
      description: "Investigate how biological and machine agents make optimal decisions in strategic interactions through game theory and neuroscience.",
      duration: "3 Days",
      tags: ["Neuroscience", "Economics", "Machine Learning"],
      href: "/programs/economic-games",
      featured: false,
      format: "In-person",
      startDate: "August 24, 2025",
      location: "London",
      coverImage: "/courses/economic-games.jpg",
      instructor: "Faculty from: University College London",
      type: "Course"
    },
    {
      title: "London Brain and Intelligence Summit",
      description: "Join leading thinkers exploring the frontiers of consciousness, cognition, and computation through keynote talks and focused discussions.",
      duration: "3 Hours",
      tags: ["Neuroscience", "AI", "Consciousness"],
      href: "/programs/brain-summit",
      featured: false,
      format: "In-person",
      startDate: "August 23, 2025",
      location: "King's College London",
      coverImage: "/courses/brain-summit.jpg",
      instructor: "Speakers from: University of Cambridge, University of Oxford, Peking University, King's College London",
      type: "Conference"
    },
    {
      title: "Understanding Intelligent Agents",
      description: "This workshop introduces cutting-edge reasoning techniques in AI—covering Chain of Thought and the ReAct framework—to help participants develop step-by-step problem-solving skills and a deeper understanding of agentic intelligence.",
      duration: "3 Hours",
      tags: ["AI", "Machine Learning", "Reasoning"],
      href: "/programs/intelligent-agents",
      featured: false,
      format: "In-person",
      startDate: "August 23, 2025",
      location: "King's College London",
      coverImage: "/courses/placeholder-workshop-1.jpg",
      instructor: "",
      type: "Workshop"
    },
    {
      title: "Future Tools, Real Results: AI Filmmaking & Agentic Browsing",
      description: "From creating your first AI-generated short film to exploring agentic browsing, these two hands-on workshops will guide you to bring your ideas to life and harness the power of intelligent tools for creativity and productivity.",
      duration: "6 Hours",
      tags: ["AI", "Creativity", "Productivity"],
      href: "/programs/ai-filmmaking",
      featured: false,
      format: "In-person",
      startDate: "August 22, 2025",
      location: "King's College London",
      coverImage: "/courses/placeholder-workshop-2.jpg",
      instructor: "",
      type: "Workshop"
    },
    {
      title: "Brain-Computer Interface and Neuromodulation",
      description: "This symposium explores advances in neuromodulation and brain–computer interface technologies, highlighting their emerging applications in neurological and psychiatric disorders.",
      duration: "3 Hours",
      tags: ["Neurotechnology", "Neurosurgery", "Brain-Computer Interface"],
      href: "/programs/bci-neuromodulation",
      featured: false,
      format: "In-person",
      startDate: "June 3, 2023",
      location: "Beijing",
      coverImage: "/courses/placeholder-symposium.jpg",
      instructor: "",
      type: "Symposium"
    }
  ]

  // Sample faculty data
  const featuredFaculty = [
    {
      name: "Dr. Alireza Soltani",
      title: "Associate Professor and Director of Graduate Studies",
      institution: "Dartmouth College",
      bio: "Leading researcher in computational and cognitive neuroscience, focusing on adaptive decision-making and learning by integrating computational modeling, psychophysics, and human behavior studies to uncover neural mechanisms and bridge cognitive processes with their biophysical foundations.",
      image: "/faculty/alireza-soltani.jpg",
      specialties: ["Computational Neuroscience", "Cognitive Neuroscience", "Decision-Making", "Learning"],
      website: "https://dartmouth.edu/~asoltani",
      role: "Instructor"
    },
    {
      name: "Dr. Andrea Luppi",
      title: "Wellcome Early Career Fellow and Fellow of St John's College",
      institution: "University of Cambridge",
      bio: "A philosopher-turned-neuroscientist whose research combines information theory, network science, and computational modelling to uncover how brain structure and dynamics give rise to consciousness and intelligence across species, states, and systems.",
      image: "/faculty/andrea-luppi.jpg",
      specialties: ["Artificial Neural Network", "Computational Neuroscience", "Consciousness"],
      website: "https://www.cam.ac.uk",
      role: "Speaker"
    }
  ]

  // Sample testimonials
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "PhD Student, Neuroscience",
      content: "Noetex Academy transformed my understanding of the brain-AI connection. The interdisciplinary approach is revolutionary.",
      rating: 5,
      image: "/testimonials/alex.jpg"
    },
    {
      name: "Maria Santos",
      role: "AI Researcher, Google",
      content: "The faculty's expertise and the cutting-edge curriculum prepared me perfectly for my career in AI research.",
      rating: 5,
      image: "/testimonials/maria.jpg"
    },
    {
      name: "David Kim",
      role: "Cognitive Scientist, Microsoft",
      content: "The lab facilities and research opportunities here are unmatched. I've published 3 papers since graduating.",
      rating: 5,
      image: "/testimonials/david.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Redefining Education Section */}
      <RedefiningEducation />


      {/* Shared background wrapper for Featured Programs and all following sections (masks video) */}
      <div className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">

      {/* Programs Section */}
      <Section id="programs">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Featured <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-futura-1">
              Explore our cutting-edge programs designed to prepare you for the future of science and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={course.title}
                className="animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          {/* View All Programs button removed as requested */}
        </div>
      </Section>

      {/* Fields We Explore Section */}
      <FieldsWeExplore />
      
      {/* Past Programs Section */}
      <Section>
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Past <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-futura-1">
              Get inspired by what previous learners explored, built, and experienced across neuroscience, AI, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pastPrograms.map((program, index) => (
              <div
                key={program.title}
                className="animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...program} isPastProgram={true} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 font-futura-1"
            >
              <span>View All Programs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Faculty Section */}
      <Section id="faculty">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Meet the Minds <span className="gradient-text">Thinking with Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-futura-1">
              Learn from world-renowned experts who are pushing the boundaries of human knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredFaculty.map((faculty, index) => (
              <div
                key={faculty.name}
                className="animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MentorCard {...faculty} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faculty"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl glass-card glass-card-hover text-white font-semibold transition-all duration-300 font-futura-1"
            >
              <span>View All</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Why Learn With Us Section */}
      <Section>
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Why Choose <span className="gradient-text">Noetex Academy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-delay">
              {[
                "World-class faculty from top universities",
                "Cutting-edge research facilities and labs",
                "Interdisciplinary approach to learning",
                "Industry partnerships and internships",
                "Global network of alumni and researchers",
                "Personalized mentorship programs"
              ].map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-4 animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-futura-1">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 neuron-glow animate-fade-in-delay-2">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-futura-1 gradient-text">95% Success Rate</h3>
                <p className="text-gray-300">
                  Our graduates go on to work at leading tech companies, research institutions, 
                  and start their own innovative ventures.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-futura-1 text-indigo-400">500+</div>
                    <div className="text-sm text-gray-400">Alumni</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-futura-1 text-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials + CTA (shared background) */}
      <Section>
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-card p-6 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-indigo-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA within shared section */}
          <div className="text-center glass-card p-12 neuron-glow animate-fade-in mt-16">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Ready to Shape the <span className="gradient-text">Future</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-futura-1">
              Join thousands of students who are already building the next generation 
              of human-AI collaboration and cognitive enhancement.
            </p>
            <div className="flex justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-futura-1 font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Noetex + Neu-Reality Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-5xl lg:text-6xl font-mono-display mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-white">Noetex</span>
                  <div 
                    className="text-4xl lg:text-5xl my-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow-flash inline-block"
                  >×</div>
                  <span className="gradient-text">Neu-Reality</span>
                </div>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-futura-1">
                Born from Neu-Reality, a nonprofit movement reimagining science communication, Noetex extends that vision into learning.
              </p>
            </div>

            {/* Card with image and text */}
            <div className="container-custom p-8 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 relative z-10 overflow-hidden" style={{ backgroundColor: '#000000' }}>
              {/* 3D Neural Network Matrix Background */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  {/* 3D Neural Network with Multiple Layers and Complex Connections */}
                  
                  {/* Front Layer - Input Nodes */}
                  <circle cx="80" cy="60" r="4" fill="#3b82f6" className="neural-node-3d">
                    <animate attributeName="r" values="3;5;3" dur="2.1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 2,1; 0,0" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="120" r="4" fill="#3b82f6" className="neural-node-3d">
                    <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,2; 0,0" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="180" r="4" fill="#3b82f6" className="neural-node-3d">
                    <animate attributeName="r" values="3;5;3" dur="1.9s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="1.9s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,-1; 0,0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="240" r="4" fill="#3b82f6" className="neural-node-3d">
                    <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2.6s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -2,1; 0,0" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="300" r="4" fill="#3b82f6" className="neural-node-3d">
                    <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,2; 0,0" dur="4.1s" repeatCount="indefinite"/>
                  </circle>

                  {/* Middle Layer 1 - Hidden Nodes */}
                  <circle cx="180" cy="40" r="5" fill="#8b5cf6" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.3s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,-2; 0,0" dur="3.9s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="100" r="5" fill="#8b5cf6" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.0s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.0s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 2,-1; 0,0" dur="4.3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="160" r="5" fill="#8b5cf6" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,1; 0,0" dur="3.7s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="220" r="5" fill="#8b5cf6" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.1s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,-2; 0,0" dur="4.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="280" r="5" fill="#8b5cf6" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.7s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.7s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -2,1; 0,0" dur="3.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="340" r="5" fill="#8b5cf6" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,2; 0,0" dur="4.4s" repeatCount="indefinite"/>
                  </circle>

                  {/* Middle Layer 2 - Processing Nodes */}
                  <circle cx="280" cy="60" r="5" fill="#06b6d4" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 2,1; 0,0" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="130" r="5" fill="#06b6d4" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.4s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,2; 0,0" dur="4.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="200" r="5" fill="#06b6d4" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,-1; 0,0" dur="3.9s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="270" r="5" fill="#06b6d4" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.6s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.6s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -2,1; 0,0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="340" r="5" fill="#06b6d4" className="neural-node-3d">
                    <animate attributeName="r" values="4;6;4" dur="2.3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.3s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,2; 0,0" dur="3.7s" repeatCount="indefinite"/>
                  </circle>

                  {/* Back Layer - Output Nodes */}
                  <circle cx="380" cy="80" r="6" fill="#10b981" className="neural-node-3d">
                    <animate attributeName="r" values="5;7;5" dur="2.0s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="2.0s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,-1; 0,0" dur="4.0s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="380" cy="160" r="6" fill="#10b981" className="neural-node-3d">
                    <animate attributeName="r" values="5;7;5" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="2.2s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 2,-1; 0,0" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="380" cy="240" r="6" fill="#10b981" className="neural-node-3d">
                    <animate attributeName="r" values="5;7;5" dur="1.9s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="1.9s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,1; 0,0" dur="4.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="380" cy="320" r="6" fill="#10b981" className="neural-node-3d">
                    <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="2.5s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 1,2; 0,0" dur="3.9s" repeatCount="indefinite"/>
                  </circle>

                  {/* Additional Floating Nodes for Complexity */}
                  <circle cx="120" cy="20" r="3" fill="#f59e0b" className="neural-node-3d">
                    <animate attributeName="r" values="2;4;2" dur="2.8s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 3,-2; 0,0" dur="5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="320" cy="20" r="3" fill="#ef4444" className="neural-node-3d">
                    <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -2,-3; 0,0" dur="4.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="450" cy="50" r="3" fill="#ec4899" className="neural-node-3d">
                    <animate attributeName="r" values="2;4;2" dur="2.7s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.7s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 2,1; 0,0" dur="4.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="350" r="3" fill="#84cc16" className="neural-node-3d">
                    <animate attributeName="r" values="2;4;2" dur="2.3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite"/>
                    <animateTransform attributeName="transform" type="translate" values="0,0; -1,2; 0,0" dur="4.2s" repeatCount="indefinite"/>
                  </circle>

                  {/* Complex 3D Neural Connections */}
                  {/* Primary connections with varying thickness and opacity */}
                  <line x1="80" y1="60" x2="180" y2="40" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="3.2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="120" x2="180" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.8s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="2.8s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="180" x2="180" y2="160" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="3.5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="240" x2="180" y2="220" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.6s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="2.6s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="300" x2="180" y2="280" stroke="#3b82f6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.0s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="3.0s" repeatCount="indefinite"/>
                  </line>

                  {/* Cross-layer connections for complexity */}
                  <line x1="80" y1="60" x2="180" y2="100" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.8s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.3;1.2;0.3" dur="3.8s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="120" x2="180" y2="160" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.4s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.3;1.2;0.3" dur="3.4s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="180" x2="180" y2="220" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.1s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.3;1.2;0.3" dur="3.1s" repeatCount="indefinite"/>
                  </line>

                  {/* Hidden layer connections */}
                  <line x1="180" y1="40" x2="280" y2="60" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.9s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="2.9s" repeatCount="indefinite"/>
                  </line>
                  <line x1="180" y1="100" x2="280" y2="130" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.3s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="3.3s" repeatCount="indefinite"/>
                  </line>
                  <line x1="180" y1="160" x2="280" y2="200" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.7s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="2.7s" repeatCount="indefinite"/>
                  </line>
                  <line x1="180" y1="220" x2="280" y2="270" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.1s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="3.1s" repeatCount="indefinite"/>
                  </line>
                  <line x1="180" y1="280" x2="280" y2="340" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur="2.5s" repeatCount="indefinite"/>
                  </line>

                  {/* Output layer connections */}
                  <line x1="280" y1="60" x2="380" y2="80" stroke="#06b6d4" strokeWidth="1.2" opacity="0.6" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.6;1.8;0.6" dur="2.4s" repeatCount="indefinite"/>
                  </line>
                  <line x1="280" y1="130" x2="380" y2="160" stroke="#06b6d4" strokeWidth="1.2" opacity="0.6" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.6;1.8;0.6" dur="2.8s" repeatCount="indefinite"/>
                  </line>
                  <line x1="280" y1="200" x2="380" y2="240" stroke="#06b6d4" strokeWidth="1.2" opacity="0.6" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.6;1.8;0.6" dur="2.2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="280" y1="270" x2="380" y2="320" stroke="#06b6d4" strokeWidth="1.2" opacity="0.6" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.6s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.6;1.8;0.6" dur="2.6s" repeatCount="indefinite"/>
                  </line>

                  {/* Long-range connections for network complexity */}
                  <line x1="80" y1="60" x2="280" y2="60" stroke="#f59e0b" strokeWidth="0.6" opacity="0.3" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4.2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.2;0.8;0.2" dur="4.2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="180" y1="40" x2="380" y2="80" stroke="#ef4444" strokeWidth="0.6" opacity="0.3" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.9s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.2;0.8;0.2" dur="3.9s" repeatCount="indefinite"/>
                  </line>
                  <line x1="80" y1="300" x2="380" y2="240" stroke="#ec4899" strokeWidth="0.6" opacity="0.3" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4.5s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.2;0.8;0.2" dur="4.5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="120" y1="20" x2="320" y2="20" stroke="#84cc16" strokeWidth="0.6" opacity="0.3" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4.8s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.2;0.8;0.2" dur="4.8s" repeatCount="indefinite"/>
                  </line>

                  {/* Feedback connections */}
                  <line x1="380" y1="80" x2="180" y2="100" stroke="#10b981" strokeWidth="0.4" opacity="0.2" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.05;0.3;0.05" dur="5.2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.1;0.6;0.1" dur="5.2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="380" y1="160" x2="280" y2="130" stroke="#10b981" strokeWidth="0.4" opacity="0.2" className="neural-connection-3d">
                    <animate attributeName="opacity" values="0.05;0.3;0.05" dur="4.9s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-width" values="0.1;0.6;0.1" dur="4.9s" repeatCount="indefinite"/>
                  </line>
                </svg>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                {/* Left side - Image with frosted glass overlay */}
                <div className="relative">
                  <div 
                    className="w-full bg-cover bg-center bg-no-repeat rounded-2xl"
                    style={{ 
                      backgroundImage: 'url(/aboutusbg.png)',
                      aspectRatio: '3/4'
                    }}
                  />
                  {/* Frosted glass overlay at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-6 bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" />
                      <span className="text-sm font-mono-display text-white/80">Live Network</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-mono-display text-white mb-2">
                      <span className="gradient-text">1M+</span> Active Minds
                    </h3>
                  </div>
                </div>

                {/* Right side - Text content */}
                <div className="space-y-6">
                  {/* Neural Sync Progress Bar */}
                  <div className="relative mb-6 h-8 bg-gray-800 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20 rounded-full"></div>
                    <div className="relative h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full" style={{ width: '0%', animation: 'neural-sync 4s ease-in-out infinite' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" style={{ animation: 'shimmer 2s linear infinite' }}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-mono-display text-white/80">Neural Sync: <span className="text-cyan-400">Connecting...</span></span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-lg text-gray-300 leading-relaxed font-futura-1">
                      <DecryptingText 
                        text="Inside Noetex Academy, you enter a living neural network of over one million minds — readers, creators, and thinkers shaping new dialogues between science, philosophy, and technology. Here, ideas flow freely, collaborations emerge organically, and imagination meets rigor. As part of the community, you can become a Neu-Reality contributor — joining 400+ volunteers from leading universities and institutions to build projects that bridge research, storytelling, and innovation. Together, we turn understanding into creation, and knowledge into reality."
                        highlightedWords={[
                          { word: "Noetex Academy", color: "from-indigo-400 to-purple-400" },
                          { word: "one million minds", color: "from-blue-400 to-cyan-300" },
                          { word: "Neu-Reality contributor", color: "from-purple-400 to-pink-400" },
                          { word: "400+ volunteers", color: "from-cyan-400 to-blue-400" }
                        ]}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      </div>

    </div>
  )
}