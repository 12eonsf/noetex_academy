import Section from '@/components/Section'
import { Brain, Zap, Eye, Cpu, Activity, BarChart3, Users, Globe, ArrowRight, Play, Download } from 'lucide-react'

export default function Lab() {
  const labTools = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural network architectures and training processes in real-time.",
      icon: Brain,
      features: ["Real-time training visualization", "3D network topology", "Layer-by-layer analysis", "Performance metrics"],
      status: "Available",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cognitive Load Analyzer",
      description: "Advanced EEG-based system for measuring and analyzing cognitive load during complex tasks.",
      icon: Activity,
      features: ["Real-time EEG monitoring", "Cognitive load metrics", "Task difficulty assessment", "Performance correlation"],
      status: "Beta",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Human Collaboration Platform",
      description: "Revolutionary platform for seamless human-AI collaboration in research and problem-solving.",
      icon: Users,
      features: ["Natural language interface", "Collaborative problem solving", "AI assistance", "Knowledge sharing"],
      status: "Coming Soon",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Behavioral Pattern Recognition",
      description: "Machine learning system for identifying and analyzing complex behavioral patterns in social interactions.",
      icon: Eye,
      features: ["Pattern recognition", "Social dynamics analysis", "Predictive modeling", "Behavioral insights"],
      status: "Available",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quantum Cognition Simulator",
      description: "Cutting-edge simulator for exploring quantum effects in cognitive processes and decision-making.",
      icon: Cpu,
      features: ["Quantum state simulation", "Cognitive quantum effects", "Decision modeling", "Uncertainty analysis"],
      status: "Research",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Global Research Network",
      description: "Worldwide network connecting researchers, institutions, and data for collaborative scientific discovery.",
      icon: Globe,
      features: ["Global collaboration", "Data sharing", "Research coordination", "Knowledge exchange"],
      status: "Available",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const researchAreas = [
    {
      title: "Neural Plasticity Research",
      description: "Studying how the brain adapts and changes in response to new experiences and learning.",
      metrics: "15+ Studies",
      impact: "High"
    },
    {
      title: "AI Consciousness Studies",
      description: "Exploring the nature of consciousness in artificial intelligence systems.",
      metrics: "8+ Papers",
      impact: "Revolutionary"
    },
    {
      title: "Social Cognition Analysis",
      description: "Understanding how humans process social information and make group decisions.",
      metrics: "25+ Experiments",
      impact: "Significant"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-noetex-black via-noetex-black to-noetex-indigo">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Noetex <span className="gradient-text">Research Lab</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore cutting-edge cognitive tools and research platforms that are shaping 
              the future of human-AI collaboration and cognitive enhancement.
            </p>
          </div>

          {/* Lab Overview */}
          <div className="glass-card p-8 mb-16 neuron-glow animate-fade-in-delay">
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
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300">Advanced neuroimaging technologies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">AI-powered cognitive assessment tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">Real-time behavioral analysis systems</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Interactive Lab Demo</h3>
                    <p className="text-gray-400 mb-4">Experience our research tools</p>
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-futura-1 font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 mx-auto">
                      <Play className="h-4 w-4" />
                      <span>Launch Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Tools */}
          <div className="animate-fade-in-delay-2">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              Research Tools & Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {labTools.map((tool, index) => (
                <div
                  key={tool.title}
                  className="glass-card p-6 hover:neuron-glow transition-all duration-300 animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-futura-1 font-semibold ${
                      tool.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                      tool.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      tool.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {tool.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tool.description}</p>
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div className="mt-20 animate-fade-in-delay-3">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              Active Research Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="glass-card p-6 text-center hover:neuron-glow transition-all duration-300 animate-fade-in-delay"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{area.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-indigo-400 font-futura-1 font-semibold">{area.metrics}</span>
                    <span className="text-purple-400 font-futura-1 font-semibold">{area.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 animate-fade-in-delay-3">
            <div className="glass-card p-8 text-center neuron-glow">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Join Our Research Community
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Collaborate with leading researchers, access cutting-edge tools, and contribute 
                to groundbreaking discoveries in cognitive science and AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-futura-1 font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Research Kit</span>
                </button>
                <button className="px-6 py-3 rounded-lg glass-card glass-card-hover text-white font-futura-1 font-semibold transition-all duration-300 flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Join Research Network</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}