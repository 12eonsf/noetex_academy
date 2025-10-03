'use client'

import { GraduationCap, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface MentorCardProps {
  name: string
  title: string
  institution: string
  bio: string
  image: string
  specialties: string[]
  website?: string
}

export default function MentorCard({
  name,
  title,
  institution,
  bio,
  image,
  specialties,
  website
}: MentorCardProps) {
  return (
    <div className="group hover:-translate-y-2 hover:scale-105 transition-all duration-300">
      <div className="glass-card glass-card-hover p-6 h-full">
        {/* Mentor Image and Basic Info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-noetex-black flex items-center justify-center">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-bold text-white">
                    {name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-noetex-black" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
              {name}
            </h3>
            <p className="text-indigo-400 font-medium">{title}</p>
            <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
              <GraduationCap className="h-4 w-4" />
              <span>{institution}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {bio}
        </p>

        {/* Specialties */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>


        {/* Website Link */}
        {website && (
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-sm text-gray-400">Learn more</span>
            <ExternalLink className="h-4 w-4 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </div>
    </div>
  )
}
