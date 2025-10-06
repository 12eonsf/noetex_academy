import Section from '@/components/Section'
import MentorCard from '@/components/MentorCard'
import { Search, Filter } from 'lucide-react'

export default function Faculty() {
  const allFaculty = [
    {
      name: "Dr. Alireza Soltani",
      title: "Associate Professor and Director of Graduate Studies",
      institution: "Dartmouth College",
      bio: "Leading researcher in computational and cognitive neuroscience, focusing on adaptive decision-making and learning by integrating computational modeling, psychophysics, and human behavior studies to uncover neural mechanisms and bridge cognitive processes with their biophysical foundations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      specialties: ["Computational Neuroscience", "Cognitive Neuroscience", "Decision-Making", "Learning"],
      website: "https://dartmouth.edu/~asoltani"
    }
  ]

  const departments = [
    "All",
    "Neuroscience",
    "AI & Machine Learning",
    "Social Sciences",
    "Life Sciences",
    "Physics & Quantum",
    "Economics",
    "Engineering"
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-black via-[#0c0c0e] to-indigo-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Faculty</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from world-renowned experts who are pushing the boundaries of human knowledge 
              and shaping the future of science and technology.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="glass-card p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search faculty..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-400 transition-colors duration-200">
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="bg-noetex-black">
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allFaculty.map((faculty, index) => (
              <div key={faculty.name}>
                <MentorCard {...faculty} />
              </div>
            ))}
          </div>

          {/* Faculty Stats */}
          <div className="mt-20 glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-gray-400">Faculty Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15</div>
                <div className="text-gray-400">Nobel Prize Winners</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400">Research Papers</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Countries Represented</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 neuron-glow">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Want to Learn from These Experts?
              </h3>
              <p className="text-gray-300 mb-6">
                Join our programs and get direct access to world-class faculty and cutting-edge research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/apply"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-futura-1 font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                >
                  Apply Now
                </a>
                <a
                  href="/apply"
                  className="px-8 py-4 rounded-xl glass-card glass-card-hover text-white font-futura-1 font-semibold transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
