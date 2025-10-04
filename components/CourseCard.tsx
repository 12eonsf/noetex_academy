'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, ArrowRight, Calendar, MapPin, Video, Users2, Radio, Building } from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  duration: string
  students?: number
  tags: string[]
  href: string
  featured?: boolean
  featuredText?: string
  format?: string
  startDate?: string
  maxStudents?: number
  minStudents?: number
  location?: string
  coverImage?: string
  instructor?: string
  hours?: string
  isPastProgram?: boolean
}

export default function CourseCard({
  title,
  description,
  duration,
  students,
  tags,
  href,
  featured = false,
  featuredText,
  format,
  startDate,
  maxStudents,
  minStudents,
  location,
  coverImage,
  instructor,
  hours,
  isPastProgram = false
}: CourseCardProps) {
  return (
    <div
      className={`relative group ${featured ? 'lg:col-span-2' : ''}`}
    >
      <Link href={href}>
        <div className={`glass-card glass-card-hover p-6 h-full ${featured ? 'neuron-glow' : ''}`}>
          {/* Featured Badge */}
          {featured && (
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              {featuredText || "Featured"}
            </div>
          )}

          {/* Course Cover Image */}
          {coverImage && (
            <div className="relative mb-4 h-48 rounded-lg overflow-hidden">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {isPastProgram ? (
                // Past Program: Title on cover with black gradient overlay
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {title}
                  </h3>
                </div>
              ) : (
                // Regular Program: Normal overlay
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Hours Badge */}
                  {hours && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-black/20 backdrop-blur-sm border border-indigo-400/50 text-white px-3 py-1.5 rounded-lg relative overflow-hidden inline-block">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-lg -z-10" />
                        {/* Text shadow for better readability */}
                        <span className="text-lg font-bold relative z-10 drop-shadow-lg">{hours}</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Course Header */}
          <div className="mb-4">
            {!isPastProgram && (
              <h3 className="text-xl font-bold text-white mb-2">
                {title}
              </h3>
            )}
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              {description}
            </p>
            {/* Instructor */}
            {instructor && (
              <p className="text-indigo-400 text-sm font-medium">
                {instructor}
              </p>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Course Stats */}
          <div className="space-y-2 mb-4">
            {/* Format */}
            {format && (
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  {format === 'Livestreaming' ? <Radio className="h-4 w-4" /> : <Building className="h-4 w-4" />}
                  <span>{format}</span>
                </div>
              </div>
            )}

            {/* Duration */}
            <div className="flex items-center text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            </div>

            {/* Student Count */}
            {!isPastProgram && (maxStudents || minStudents) && (
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users2 className="h-4 w-4" />
                  <span>
                    {maxStudents ? `Max ${maxStudents} students` : `Min ${minStudents} students`}
                  </span>
                </div>
              </div>
            )}

            {/* Start Date */}
            {startDate && (
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Start: {startDate}</span>
                </div>
              </div>
            )}

            {/* Location */}
            {location && (
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-indigo-400 font-semibold">
              Learn More
            </span>
            <ArrowRight className="h-4 w-4 text-indigo-400" />
          </div>
        </div>
      </Link>
    </div>
  )
}
