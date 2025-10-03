'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ClientMotionProps {
  children: ReactNode
  [key: string]: any
}

export default function ClientMotion({ children, ...props }: ClientMotionProps) {
  return <motion.div {...props}>{children}</motion.div>
}

