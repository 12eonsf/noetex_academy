import Section from '@/components/Section'
import CourseCard from '@/components/CourseCard'
import { Filter, Search, Clock, Users, Star } from 'lucide-react'

export default function Programs() {
  const allCourses = [
    {
      title: "Advanced Neural Networks & Deep Learning",
      description: "Master the fundamentals of neural networks and deep learning algorithms with hands-on projects in computer vision and natural language processing.",
      duration: "12 weeks",
      students: 245,
      rating: 4.9,
      tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
      href: "/programs/neural-networks",
      featured: true
    },
    {
      title: "Cognitive Neuroscience Fundamentals",
      description: "Explore the biological basis of cognition, brain anatomy, and neural mechanisms underlying human behavior and decision-making.",
      duration: "10 weeks",
      students: 189,
      rating: 4.8,
      tags: ["Neuroscience", "Psychology", "Biology", "Research"],
      href: "/programs/cognitive-neuroscience"
    },
    {
      title: "Social Psychology & Group Dynamics",
      description: "Study human behavior in social contexts, group decision-making, and the psychological factors that influence society.",
      duration: "8 weeks",
      students: 156,
      rating: 4.7,
      tags: ["Psychology", "Sociology", "Research", "Statistics"],
      href: "/programs/social-psychology"
    },
    {
      title: "Artificial General Intelligence",
      description: "Explore the theoretical foundations and practical approaches to creating AI systems with human-level cognitive abilities.",
      duration: "16 weeks",
      students: 98,
      rating: 4.9,
      tags: ["AI", "Philosophy", "Cognitive Science", "Advanced"],
      href: "/programs/agi"
    },
    {
      title: "Bioinformatics & Computational Biology",
      description: "Learn to analyze biological data using computational methods, from genomics to protein structure prediction.",
      duration: "14 weeks",
      students: 134,
      rating: 4.6,
      tags: ["Biology", "Data Science", "Genomics", "Python"],
      href: "/programs/bioinformatics"
    },
    {
      title: "Human-Computer Interaction",
      description: "Design intuitive interfaces and understand how humans interact with technology through cognitive and behavioral principles.",
      duration: "10 weeks",
      students: 167,
      rating: 4.8,
      tags: ["UX/UI", "Psychology", "Design", "Research"],
      href: "/programs/hci"
    },
    {
      title: "Quantum Computing & Cognition",
      description: "Explore the intersection of quantum mechanics and cognitive science, including quantum algorithms for brain modeling.",
      duration: "12 weeks",
      students: 76,
      rating: 4.9,
      tags: ["Quantum Computing", "Physics", "Advanced", "Research"],
      href: "/programs/quantum-cognition"
    },
    {
      title: "Behavioral Economics & Decision Science",
      description: "Study how humans make decisions, the biases that affect our choices, and how to design better decision-making systems.",
      duration: "8 weeks",
      students: 145,
      rating: 4.7,
      tags: ["Economics", "Psychology", "Statistics", "Policy"],
      href: "/programs/behavioral-economics"
    },
    {
      title: "Neurotechnology & Brain-Computer Interfaces",
      description: "Learn about cutting-edge technologies that interface directly with the brain, from medical devices to consumer applications.",
      duration: "14 weeks",
      students: 89,
      rating: 4.8,
      tags: ["Neuroscience", "Engineering", "Medical", "Innovation"],
      href: "/programs/neurotechnology"
    }
  ]

  const categories = [
    "All",
    "Neuroscience",
    "AI & Machine Learning", 
    "Life Sciences",
    "Social Sciences",
    "Advanced",
    "Research"
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge programs that bridge neuroscience, AI, and social sciences. 
              Each course is designed to prepare you for the future of human-AI collaboration.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="glass-card p-6 mb-12 animate-fade-in-delay">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-400 transition-colors duration-200">
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-noetex-black">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <div
                key={course.title}
                className="animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 glass-card p-8 animate-fade-in-delay-2">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
              Lab Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Programs</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">2,500+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-400">Completion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4.8</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}