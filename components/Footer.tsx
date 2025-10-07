'use client'

import Link from 'next/link'
import { Linkedin, Instagram, MapPin, Mail } from 'lucide-react'

// Minimal brand-like icons for X (Twitter) and TikTok
function IconX(props: React.SVGProps<SVGSVGElement>) {
  // Stylized X (Twitter rebrand) logo
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-7.086l-5.547-6.646L3.756 22H.5l7.964-9.1L1 2h7.086l5.142 6.156L18.244 2z"/>
    </svg>
  )
}

function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  // TikTok official glyph (monochrome), source: simple-icons (simplified)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.001 2.04c.57.62 1.187 1.187 1.845 1.698 1.87 1.444 4.006 2.22 6.476 2.332v3.9c-1.49-.15-2.998-.59-4.38-1.276v7.387c0 4.882-3.326 8.379-8.331 8.379C3.304 24.46 0 20.963 0 16.081c0-4.883 3.304-8.38 7.611-8.38.502 0 .993.04 1.48.12v3.98c-.48-.1-.973-.15-1.48-.15-2.354 0-4.07 1.885-4.07 4.53 0 2.643 1.716 4.528 4.07 4.528 2.39 0 3.84-1.66 3.84-4.275V2.04h1.55z"/>
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    programs: [
      { name: 'Courses', href: '/programs#courses' },
      { name: 'Workshops', href: '/programs#workshops' },
      { name: 'Schools', href: '/programs#schools' },
      { name: 'London Summit', href: '/programs#london-summit' },
      { name: 'Conferences', href: '/programs#conferences' },
      { name: 'Apply', href: '/apply', arrow: true },
    ],
    resources: [
      { name: 'Faculty', href: '/faculty' },
      { name: 'Research Lab', href: '/lab' },
      { name: 'Blog', href: '/blog' },
      { name: 'Events', href: 'https://luma.com/user/neureality', external: true },
      { name: 'Community', href: '/community' },
      { name: 'Podcast', href: 'https://open.spotify.com/show/1Ya8rAqwYNNdybDpf0JJXe?si=051ccaf4ef00415b', external: true },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'About Us', href: '/about' },
    ],
  }

  const socialLinks = [
    { name: 'X', href: '#', icon: IconX },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'TikTok', href: '#', icon: IconTikTok },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black/70 via-black/55 to-black/70 border-t border-white/10 overflow-hidden">
      {/* Sliding NOETEX SOCIETY Text - Infinite Loop (moved from page) */}
      <div id="noetex-strip" className="relative overflow-hidden py-16">
        <div className="flex animate-slide-left">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-brand-3 text-transparent select-none whitespace-nowrap flex-shrink-0" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>
            NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY
          </h1>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-brand-3 text-transparent select-none whitespace-nowrap flex-shrink-0 ml-8" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>
            NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY NOETEX SOCIETY
          </h1>
        </div>
      </div>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-xl font-brand-3 gradient-text">Noetex Academy</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Where minds meet the future. Join the next generation of interdisciplinary thinkers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg glass-card hover:bg-white/10 hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                    {link.arrow ? (
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17L17 7"/>
                        <path d="M8 7h9v9"/>
                      </svg>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">71-75 Shelton Street, Covent Garden, London</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                <a href="mailto:info@noetex.ai" className="text-gray-400 hover:text-white transition-colors duration-200">info@noetex.ai</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Noetex Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}