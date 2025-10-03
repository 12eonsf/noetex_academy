'use client'

import Section from '@/components/Section'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, QrCode, Twitter, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    // Reset form or show success message
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@noetex.ai",
      description: "General inquiries and support"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "71-75 Shelton Street, Covent Garden, London, UK",
      description: "Visit our research facility"
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter, color: 'text-blue-400' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'text-blue-600' },
    { name: 'GitHub', href: '#', icon: Github, color: 'text-gray-400' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our programs? Want to collaborate on research? 
              We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-delay">
              <div>
                <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="glass-card p-6 animate-fade-in-delay"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-indigo-400 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 rounded-lg glass-card hover:bg-white/10 transition-colors duration-200 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <QrCode className="h-5 w-5 text-indigo-400" />
                  <span>Quick Connect</span>
                </h3>
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <QrCode className="h-16 w-16 text-indigo-400" />
                </div>
                <p className="text-center text-gray-400 text-sm mt-2">
                  Scan to connect with us
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-delay-2">
              <div className="glass-card p-8">
                <h2 className="text-3xl font-bold mb-8 gradient-text">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
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
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16 animate-fade-in-delay-3">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Other Ways to Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 text-center">
                <MessageCircle className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Get instant answers to your questions</p>
                <button className="px-6 py-3 rounded-lg bg-indigo-500/20 text-indigo-400 font-semibold hover:bg-indigo-500/30 transition-colors duration-200">
                  Start Chat
                </button>
              </div>
              
              
              <div className="glass-card p-6 text-center">
                <QrCode className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">QR Code</h3>
                <p className="text-gray-300 mb-4">Scan to join our community</p>
                <button className="px-6 py-3 rounded-lg bg-purple-500/20 text-purple-400 font-semibold hover:bg-purple-500/30 transition-colors duration-200">
                  View QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
