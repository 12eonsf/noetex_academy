import Section from '@/components/Section'
import { Brain, Zap, Eye, Cpu, Activity, BarChart3, Users, Globe, ArrowRight, Play, Download } from 'lucide-react'

export default function Lab() {
  const labTools = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural network architectures and training processes in real-time.",
      icon: Brain,
      features: ["Real-time training visualization", "3D network topology", "Layer-by-layer analysis", "Performance metrics"],
      status: "Live Demo Available"
    },
    {
      title: "Cognitive Load Analyzer",
      description: "AI-powered tool that measures and analyzes cognitive load during learning and decision-making tasks.",
      icon: Activity,
      features: ["Eye-tracking integration", "EEG data processing", "Attention mapping", "Load optimization"],
      status: "Research Preview"
    },
    {
      title: "Social Network Simulator",
      description: "Advanced simulation platform for studying social dynamics, group behavior, and information diffusion.",
      icon: Users,
      features: ["Agent-based modeling", "Network analysis", "Behavioral prediction", "Scenario testing"],
      status: "Beta Version"
    },
    {
      title: "Quantum Cognition Engine",
      description: "Cutting-edge quantum algorithms for modeling human decision-making and cognitive processes.",
      icon: Zap,
      features: ["Quantum decision trees", "Superposition modeling", "Entanglement effects", "Quantum optimization"],
      status: "Experimental"
    },
    {
      title: "Biometric Data Processor",
      description: "Comprehensive platform for processing and analyzing physiological data from multiple sensors.",
      icon: Eye,
      features: ["Multi-modal data fusion", "Real-time processing", "Pattern recognition", "Health monitoring"],
      status: "Production Ready"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Advanced dashboard for predicting learning outcomes and optimizing educational interventions.",
      icon: BarChart3,
      features: ["Machine learning models", "Predictive insights", "Intervention recommendations", "Performance tracking"],
      status: "Live Demo Available"
    }
  ]

  const researchAreas = [
    {
      title: "Brain-Computer Interfaces",
      description: "Developing direct neural interfaces for enhanced human-computer interaction",
      progress: 75,
      publications: 12
    },
    {
      title: "AI-Human Collaboration",
      description: "Studying optimal ways for humans and AI to work together effectively",
      progress: 60,
      publications: 8
    },
    {
      title: "Cognitive Enhancement",
      description: "Researching methods to augment human cognitive abilities through technology",
      progress: 45,
      publications: 6
    },
    {
      title: "Social AI Systems",
      description: "Building AI systems that understand and interact with human social dynamics",
      progress: 80,
      publications: 15
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Noetex <span className="gradient-text">Research Lab</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge cognitive tools and research platforms that are shaping 
              the future of human-AI collaboration and cognitive enhancement.
            </p>
          </motion.div>

          {/* Lab Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 mb-16 neuron-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  The Future of Cognitive Research
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our research lab is at the forefront of cognitive science and AI research. 
                  We develop innovative tools and platforms that bridge the gap between 
                  neuroscience, artificial intelligence, and social sciences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-indigo-400" />
                    <span className="text-gray-300">Advanced neural network architectures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Real-time cognitive monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Social behavior simulation</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="h-16 w-16 text-indigo-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-300">Interactive Lab Demo</p>
                    <p className="text-sm text-gray-400">Click to explore</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center"
                >
                  <Play className="h-4 w-4 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Lab Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Research <span className="gradient-text">Tools & Platforms</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {labTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:neuron-glow transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        {tool.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-400 text-sm font-medium hover:bg-indigo-500/30 transition-colors duration-200 flex items-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Try Demo</span>
                    </button>
                    <button className="px-4 py-2 rounded-lg glass-card text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Active <span className="gradient-text">Research Areas</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Research Progress</span>
                      <span className="text-sm text-indigo-400">{area.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-gray-400">Publications</span>
                      <span className="text-sm text-purple-400">{area.publications} papers</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lab Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
              Lab Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-400">Research Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">200+</div>
                <div className="text-gray-400">Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">25</div>
                <div className="text-gray-400">Lab Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15</div>
                <div className="text-gray-400">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <div className="glass-card p-8 neuron-glow">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Join Our Research Community
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Be part of groundbreaking research that's shaping the future of human-AI collaboration. 
                Access our tools, contribute to research, and collaborate with leading scientists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/apply"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Join Research Program</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-xl glass-card glass-card-hover text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Lab</span>
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
