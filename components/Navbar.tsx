'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Programs', href: '/programs' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 max-w-[50%] sm:max-w-[60%] md:max-w-none">
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-brand-3 text-white overflow-hidden whitespace-nowrap uppercase">
              Noetex Society
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group font-brand-3"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group font-brand-3"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
            <Link
              href="/apply"
              className="px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-all duration-200 font-futura-1 flex items-center space-x-2 relative"
              style={{
                background: 'transparent',
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(135deg, #6366f1, #a855f7)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                borderRadius: '8px'
              }}
            >
              <span>Apply Now</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 flex-shrink-0 ml-2 sm:ml-3 text-white hover:text-indigo-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-card p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2 font-brand-3"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2 font-brand-3"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg text-white text-center hover:bg-white/5 transition-all duration-200 font-futura-1 flex items-center justify-center space-x-2 relative"
                style={{
                  background: 'transparent',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(135deg, #6366f1, #a855f7)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box',
                  borderRadius: '8px'
                }}
              >
                <span>Apply Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}