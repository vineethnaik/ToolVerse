import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield } from 'lucide-react'
import SearchBar from '../search/SearchBar'

const HeroSection = ({ onSearch }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-3 sm:px-4 py-16 sm:py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl sm:max-w-6xl mx-auto"
      >
        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Verified Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Updated Daily</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Discover Best</span>
            <br />
            <span className="gradient-text-accent">AI Tools</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Explore, compare, and find the perfect AI tools for your needs. 
            From chatbots to design tools, all in one place.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          variants={itemVariants}
          className="mb-8 sm:mb-12"
        >
          <SearchBar 
            onSearch={onSearch}
            placeholder="Search for AI tools (e.g., 'image generation', 'writing assistant')..."
            className="mb-8"
          />
          
          {/* Popular searches */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <span className="text-gray-500">Popular:</span>
            {['ChatGPT', 'Midjourney', 'Claude', 'GitHub Copilot'].map((term, index) => (
              <button
                key={index}
                onClick={() => onSearch?.(term)}
                className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-300 hover:text-white text-xs sm:text-sm"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-lg sm:max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">250+</div>
            <div className="text-gray-400 text-xs sm:text-sm mt-1">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <div className="text-gray-400 text-sm mt-1">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">1M+</div>
            <div className="text-gray-400 text-sm mt-1">Users</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-violet-500/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
      />
    </section>
  )
}

export default HeroSection
