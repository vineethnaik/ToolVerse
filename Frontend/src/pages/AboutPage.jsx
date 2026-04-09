import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Rocket,
  CheckCircle,
  TrendingUp,
  Award,
  Heart,
  Link2,
  MessageCircle,
  Mail
} from 'lucide-react'
import { GithubIcon } from '../components/icons/GithubIcon'
import { LinkedinIcon } from '../components/icons/LinkedinIcon'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const stats = [
  { value: '500+', label: 'AI Tools', icon: Brain },
  { value: '50+', label: 'Categories', icon: Globe },
  { value: '10K+', label: 'Active Users', icon: Users },
  { value: '4.8', label: 'User Rating', icon: Star },
]

const features = [
  {
    icon: Search,
    title: 'Smart Discovery',
    description: 'Advanced search algorithms help you find the perfect AI tool for your specific needs with intelligent filtering and recommendations.'
  },
  {
    icon: Shield,
    title: 'Verified Tools',
    description: 'Every tool in our database is manually verified for quality, security, and reliability to ensure you get the best experience.'
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Get direct access to AI tools without complex sign-ups. One-click integration with your favorite platforms.'
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Real user reviews and ratings help you make informed decisions based on actual experiences and use cases.'
  },
]

const categories = [
  'Content Creation', 'Image Generation', 'Code Development', 
  'Data Analysis', 'Marketing', 'Research', 'Design', 
  'Automation', 'Writing', 'Translation', 'Audio', 'Video'
]

const teamMembers = [
  {
    name: 'Vineeth Naik',
    role: 'Founder & CEO',
    image: '/api/placeholder/300/300',
    description: 'Visionary leader with expertise in AI and product development. Passionate about democratizing AI technology.',
    skills: ['AI Strategy', 'Product Vision', 'Team Leadership'],
    social: {
      github: 'https://github.com/vineethnaik',
      linkedin: 'https://www.linkedin.com/in/eslavathvineethnaik/',
      twitter: 'https://twitter.com/vineethnaik',
      email: 'vineeth@toolverce.tech'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: '/api/placeholder/300/300',
    description: 'Technical architect with deep experience in scalable systems and machine learning infrastructure.',
    skills: ['System Architecture', 'ML Engineering', 'Cloud Infrastructure'],
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@toolverce.tech'
    }
  },
  {
    name: 'Alex Kumar',
    role: 'Head of Product',
    image: '/api/placeholder/300/300',
    description: 'Product strategist focused on user experience and innovative AI tool integration.',
    skills: ['Product Design', 'User Research', 'Agile Development'],
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'alex@toolverce.tech'
    }
  },
  {
    name: 'Maya Patel',
    role: 'Lead Designer',
    image: '/api/placeholder/300/300',
    description: 'Creative force behind ToolVerse\'s intuitive interface and engaging user experience.',
    skills: ['UI/UX Design', 'Brand Design', 'Interaction Design'],
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: 'maya@toolverce.tech'
    }
  }
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl sm:max-w-6xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 sm:mb-8"
          >
            <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 p-1 shadow-lg shadow-violet-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-dark-base overflow-hidden">
                <img 
                  src="/tc.png" 
                  alt="ToolVerse Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent bg-300 animate-gradient">
            ToolVerse
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl mx-auto">
            Your Gateway to the AI Revolution. Discover, Compare, and Master the Best AI Tools in One Platform.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 sm:p-6 text-center backdrop-blur-sm"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.8, ease: "easeInOut" }}
                  className="mx-auto mb-4"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/20 to-blue-900/20 p-6 sm:p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center">
              <Rocket className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-violet-400 mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We're on a mission to democratize AI technology by making it accessible, understandable, and useful for everyone. 
                ToolVerse bridges the gap between complex AI tools and real-world applications, empowering individuals and businesses 
                to harness the power of artificial intelligence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">Why Choose ToolVerse?</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 p-3"
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="text-center mb-8 sm:mb-12">
            <Globe className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-violet-400 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Comprehensive Categories</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300">Explore AI tools across every domain and industry</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-300 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="text-center mb-8 sm:mb-12">
            <Users className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-violet-400 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Meet Our Team</h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300">The passionate minds building the future of AI discovery</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 p-1">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-dark-base">
                          <span className="text-2xl font-bold text-violet-300">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 h-24 w-24 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Name and Role */}
                  <div className="text-center mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-violet-300 text-sm">{member.role}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5 + index * 0.1 + skillIndex * 0.05 }}
                        className="rounded-full bg-violet-500/20 text-violet-300 px-1.5 py-1 text-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-2 sm:space-x-3">
                    <motion.a
                      href={member.social.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg bg-white/10 p-2 text-gray-400 hover:text-violet-300 transition-colors"
                    >
                      <GithubIcon size={16} className="text-current" />
                    </motion.a>
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg bg-white/10 p-2 text-gray-400 hover:text-violet-300 transition-colors"
                    >
                      <LinkedinIcon size={16} className="text-current" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg bg-white/10 p-2 text-gray-400 hover:text-violet-300 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-lg bg-white/10 p-2 text-gray-400 hover:text-violet-300 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-1">
            <div className="rounded-3xl bg-dark-base p-8 md:p-12 text-center">
              <Award className="mx-auto h-12 w-12 text-violet-400 mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Join the AI Revolution</h2>
              <p className="text-lg text-gray-300 mb-8">
                Start exploring the world of AI tools today and transform the way you work, create, and innovate.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-violet-500/25"
              >
                Start Exploring
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
