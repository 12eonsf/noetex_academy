import Hero from '@/components/Hero'
import Section from '@/components/Section'
import CourseCard from '@/components/CourseCard'
import MentorCard from '@/components/MentorCard'
import { Brain, Zap, Users, Award, Quote, Star, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

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
      hours: "24.5 Hours"
    },
    {
      title: "Neuroscience Winter School",
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
      hours: "35 Hours"
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
      instructor: "Faculty from: University of Cambridge"
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
      instructor: "Faculty from: University College London"
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
      instructor: "Speakers from: University of Cambridge, University of Oxford, Peking University, King's College London"
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
      website: "https://dartmouth.edu/~asoltani"
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
      
      {/* About Section */}
      <Section id="about" className="bg-gradient-to-b from-noetex-black to-noetex-black/50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Redefining <span className="gradient-text">Education</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-chathura">
              We bridge the gap between neuroscience, AI, and social sciences to create 
              the next generation of interdisciplinary thinkers and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Neuroscience First",
                description: "Understanding the brain is the foundation of all human knowledge and AI development."
              },
              {
                icon: Zap,
                title: "AI Integration",
                description: "Learn how artificial intelligence can enhance and augment human cognitive capabilities."
              },
              {
                icon: Users,
                title: "Social Impact",
                description: "Apply your knowledge to solve real-world problems and create positive social change."
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center glass-card p-8 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Programs Section */}
      <Section id="programs" className="bg-gradient-to-b from-noetex-black/50 to-noetex-black">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Featured <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-chathura">
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

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            >
              <span>View All Programs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Past Programs Section */}
      <Section className="bg-gradient-to-b from-noetex-black to-noetex-black/50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Past <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-chathura">
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
        </div>
      </Section>

      {/* Why Learn With Us Section */}
      <Section className="bg-gradient-to-b from-noetex-black to-noetex-indigo/20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading mb-6">
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
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 neuron-glow animate-fade-in-delay-2">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-heading gradient-text">95% Success Rate</h3>
                <p className="text-gray-300">
                  Our graduates go on to work at leading tech companies, research institutions, 
                  and start their own innovative ventures.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-heading text-indigo-400">500+</div>
                    <div className="text-sm text-gray-400">Alumni</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-heading text-purple-400">50+</div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Faculty Section */}
      <Section id="faculty" className="bg-gradient-to-b from-noetex-indigo/20 to-noetex-black">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Meet Our <span className="gradient-text">Faculty</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-chathura">
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
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl glass-card glass-card-hover text-white font-semibold transition-all duration-300"
            >
              <span>View All Faculty</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gradient-to-b from-noetex-black to-noetex-black/50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading mb-6">
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
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-noetex-black/50 to-noetex-black">
        <div className="container-custom">
          <div className="text-center glass-card p-12 neuron-glow animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-mono-display mb-6">
              Ready to Shape the <span className="gradient-text">Future</span>?
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-chathura">
              Join thousands of students who are already building the next generation 
              of human-AI collaboration and cognitive enhancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-heading font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/apply"
                className="px-8 py-4 rounded-xl glass-card glass-card-hover text-white font-heading font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <Brain className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}