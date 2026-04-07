import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Star, Zap, ArrowRight } from 'lucide-react'
import { tools } from '../../data/mockTools'
import ToolCard from '../search/ToolCard'

const FeaturedTools = ({ onViewDetails, onBookmark, bookmarks = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Get featured tools by category
  const trendingTools = tools.filter(tool => tool.trending).slice(0, 3)
  const newTools = tools.filter(tool => tool.isNew).slice(0, 3)
  const freeTools = tools.filter(tool => tool.isFree && tool.dailyCredits > 0).slice(0, 3)

  const isBookmarked = (toolId) => bookmarks.includes(toolId)

  const renderToolSection = (title, subtitle, toolList, icon, color) => (
    <motion.div variants={itemVariants} className="space-y-6">
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {toolList.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ToolCard
              tool={tool}
              onViewDetails={onViewDetails}
              onBookmark={onBookmark}
              isBookmarked={isBookmarked(tool.id)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text-accent">AI Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most popular, newest, and best free AI tools in our curated collection
          </p>
        </motion.div>

        {/* Featured Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Trending Tools */}
          {renderToolSection(
            "Trending Today",
            "The hottest tools everyone's talking about",
            trendingTools,
            <TrendingUp className="w-5 h-5" />,
            '#8b5cf6'
          )}

          {/* New Tools */}
          {renderToolSection(
            "New This Week",
            "Fresh AI tools just added to our collection",
            newTools,
            <Zap className="w-5 h-5" />,
            '#06b6d4'
          )}

          {/* Best Free Tools */}
          {renderToolSection(
            "Best Free Tools",
            "Top-rated AI tools with generous free tiers",
            freeTools,
            <Star className="w-5 h-5" />,
            '#10b981'
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600/20 border border-violet-500/30">
            <span className="text-violet-300">Want to see more tools?</span>
            <button className="flex items-center gap-1 text-white hover:text-violet-300 transition-colors">
              Explore all tools
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedTools
