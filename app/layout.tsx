import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron, Space_Grotesk, Audiowide, Major_Mono_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const audiowide = Audiowide({ subsets: ['latin'], weight: '400', variable: '--font-audiowide' })
const majorMono = Major_Mono_Display({ subsets: ['latin'], weight: '400', variable: '--font-major-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://noetex-academy.vercel.app'),
      title: 'Noetex Society - Where Minds Meet the Future',
      description: 'A futuristic education platform focused on neuroscience, AI, life sciences, and social sciences. Join the next generation of interdisciplinary thinkers.',
  keywords: 'neuroscience, AI, education, life sciences, social sciences, cognitive science, brain research',
  authors: [{ name: 'Noetex Society' }],
  openGraph: {
    title: 'Noetex Society - Where Minds Meet the Future',
    description: 'A futuristic education platform focused on neuroscience, AI, life sciences, and social sciences.',
    type: 'website',
    locale: 'en_US',
    url: 'https://noetex-academy.vercel.app',
    siteName: 'Noetex Society',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noetex Society - Where Minds Meet the Future',
    description: 'A futuristic education platform focused on neuroscience, AI, life sciences, and social sciences.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0c0e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${orbitron.variable} ${spaceGrotesk.variable} ${audiowide.variable} ${majorMono.variable} bg-noetex-black text-white antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

