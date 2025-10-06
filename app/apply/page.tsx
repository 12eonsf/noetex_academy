'use client'

import Section from '@/components/Section'
import { useState } from 'react'
import { CheckCircle, Send, User, Mail, GraduationCap, Brain, FileText } from 'lucide-react'

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    academicBackground: '',
    currentInstitution: '',
    programInterest: '',
    experience: '',
    motivation: '',
    goals: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const programOptions = [
    "Neural Networks & Deep Learning",
    "Cognitive Neuroscience",
    "Social Psychology & Group Dynamics",
    "Artificial General Intelligence",
    "Bioinformatics & Computational Biology",
    "Human-Computer Interaction",
    "Quantum Computing & Cognition",
    "Behavioral Economics & Decision Science",
    "Neurotechnology & Brain-Computer Interfaces",
    "Other (specify in additional info)"
  ]

  const academicOptions = [
    "High School",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Postdoctoral",
    "Professional/Industry Experience"
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16">
        <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center glass-card p-12 neuron-glow animate-fade-in">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6 gradient-text">
                Application Submitted!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your interest in Noetex Society. We've received your application 
                and will review it carefully. You'll hear from us within 5-7 business days.
              </p>
              <div className="space-y-4">
                <p className="text-gray-400">
                  In the meantime, explore our programs and faculty to learn more about what makes 
                  Noetex Society the future of education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <a
                    href="/programs"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-futura-1 font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Explore Programs
                  </a>
                  <a
                    href="/faculty"
                    className="px-6 py-3 rounded-lg glass-card glass-card-hover text-white font-futura-1 font-semibold transition-all duration-300"
                  >
                    Meet Faculty
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Apply to <span className="gradient-text">Noetex Society</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join the next generation of interdisciplinary thinkers. Tell us about yourself 
              and your goals, and we'll help you find the perfect program.
            </p>
          </div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto animate-fade-in-delay">
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <User className="h-6 w-6 text-indigo-400" />
                    <span>Personal Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Background */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-indigo-400" />
                    <span>Academic Background</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Highest Education Level *
                      </label>
                      <select
                        name="academicBackground"
                        value={formData.academicBackground}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                      >
                        <option value="" className="bg-noetex-black">Select your education level</option>
                        {academicOptions.map(option => (
                          <option key={option} value={option} className="bg-noetex-black">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Institution
                      </label>
                      <input
                        type="text"
                        name="currentInstitution"
                        value={formData.currentInstitution}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="University or Organization"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Interest */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <Brain className="h-6 w-6 text-indigo-400" />
                    <span>Program Interest</span>
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Which program interests you most? *
                    </label>
                    <select
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                    >
                      <option value="" className="bg-noetex-black">Select a program</option>
                      {programOptions.map(program => (
                        <option key={program} value={program} className="bg-noetex-black">
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Experience and Motivation */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-indigo-400" />
                    <span>Experience & Motivation</span>
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Relevant Experience *
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="Describe your relevant academic, professional, or research experience..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Motivation *
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="Why do you want to join Noetex Society? What drives your interest in this field?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Career Goals *
                      </label>
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="What are your career goals? How do you plan to use your education?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-futura-1 font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
