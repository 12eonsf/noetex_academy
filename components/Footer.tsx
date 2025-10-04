'use client'

import Link from 'next/link'
import { Mail, Twitter, Linkedin, Github, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    programs: [
      { name: 'Neuroscience', href: '/programs#neuroscience' },
      { name: 'AI & Machine Learning', href: '/programs#ai' },
      { name: 'Life Sciences', href: '/programs#life-sciences' },
      { name: 'Social Sciences', href: '/programs#social-sciences' },
    ],
    resources: [
      { name: 'Faculty', href: '/faculty' },
      { name: 'Research Lab', href: '/lab' },
      { name: 'Blog', href: '/blog' },
      { name: 'Apply', href: '/apply' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:info@noetex.ai', icon: Mail },
  ]

  return (
    <footer className="bg-gradient-to-t from-noetex-black to-noetex-black/50 border-t border-white/10">
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
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
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
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
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
                <span className="text-gray-400">info@noetex.ai</span>
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