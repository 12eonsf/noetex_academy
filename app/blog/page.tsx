import Section from '@/components/Section'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Tag, Search, Filter } from 'lucide-react'

// Sample blog posts data
const blogPosts = [
  {
    slug: 'the-future-of-brain-computer-interfaces',
    title: 'The Future of Brain-Computer Interfaces: A Neuroscientist\'s Perspective',
    excerpt: 'Exploring the latest advances in neural interface technology and their implications for human cognition and AI development.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Neuroscience', 'BCI', 'AI', 'Research'],
    featured: true,
    image: '/blog/bci-future.jpg'
  },
  {
    slug: 'quantum-cognition-and-decision-making',
    title: 'Quantum Cognition: How Quantum Mechanics Explains Human Decision-Making',
    excerpt: 'A deep dive into quantum models of cognition and how they might revolutionize our understanding of human thought processes.',
    author: 'Dr. Alex Thompson',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['Quantum Computing', 'Cognition', 'Physics', 'Psychology'],
    featured: false,
    image: '/blog/quantum-cognition.jpg'
  },
  {
    slug: 'social-ai-and-human-collaboration',
    title: 'Building AI Systems That Understand Human Social Dynamics',
    excerpt: 'How we\'re developing AI that can navigate complex social interactions and collaborate effectively with humans.',
    author: 'Dr. Elena Volkov',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['AI', 'Social Psychology', 'Human-Computer Interaction', 'Research'],
    featured: false,
    image: '/blog/social-ai.jpg'
  },
  {
    slug: 'neural-networks-inspired-by-brain',
    title: 'Neural Networks Inspired by the Human Brain: A Comparative Analysis',
    excerpt: 'Comparing artificial neural networks with biological neural networks and what we can learn from the brain\'s architecture.',
    author: 'Dr. Marcus Rodriguez',
    date: '2024-01-01',
    readTime: '15 min read',
    tags: ['Neural Networks', 'Neuroscience', 'AI', 'Architecture'],
    featured: false,
    image: '/blog/neural-networks.jpg'
  },
  {
    slug: 'cognitive-biases-in-ai-decision-making',
    title: 'Cognitive Biases in AI Decision-Making: Lessons from Human Psychology',
    excerpt: 'How human cognitive biases are influencing AI systems and what we can do to create more objective artificial intelligence.',
    author: 'Dr. Maria Santos',
    date: '2023-12-28',
    readTime: '9 min read',
    tags: ['Cognitive Science', 'AI Ethics', 'Psychology', 'Decision Making'],
    featured: false,
    image: '/blog/cognitive-biases.jpg'
  },
  {
    slug: 'bioinformatics-revolution-in-medicine',
    title: 'The Bioinformatics Revolution: How Computational Biology is Transforming Medicine',
    excerpt: 'Exploring the intersection of biology, computer science, and medicine in the era of personalized healthcare.',
    author: 'Dr. James Park',
    date: '2023-12-20',
    readTime: '11 min read',
    tags: ['Bioinformatics', 'Medicine', 'Genomics', 'Computational Biology'],
    featured: false,
    image: '/blog/bioinformatics.jpg'
  }
]

const categories = [
  'All',
  'Neuroscience',
  'AI & Machine Learning',
  'Social Sciences',
  'Life Sciences',
  'Quantum Computing',
  'Research',
  'Technology'
]

export default function Blog() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Research <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, discoveries, and cutting-edge research from our faculty and researchers. 
              Stay updated with the latest developments in neuroscience, AI, and cognitive science.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="glass-card p-6 mb-12 animate-fade-in-delay">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
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

          {/* Featured Post */}
          <div className="mb-16 animate-fade-in-delay-2">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div
                key={post.slug}
                className="glass-card p-8 neuron-glow animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="w-full h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">BCI</span>
                      </div>
                      <p className="text-gray-300">Brain-Computer Interface Research</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                        Research
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Posts */}
          <div className="animate-fade-in-delay-3">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article
                  key={post.slug}
                  className="glass-card p-6 hover:neuron-glow transition-all duration-300 animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">
                          {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                        </span>
                      </div>
                      <p className="text-gray-300 text-xs">Research Article</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 animate-fade-in-delay-3">
            <div className="glass-card p-8 text-center neuron-glow">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Stay Updated with Our Research
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights, research findings, and breakthroughs delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
                />
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
