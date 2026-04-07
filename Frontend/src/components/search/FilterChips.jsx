import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/badge'

const FilterChips = ({ 
  filters = [], 
  activeFilter = 'all', 
  onFilterChange, 
  className = "" 
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const handleFilterClick = (filterId) => {
    if (onFilterChange) {
      onFilterChange(filterId)
    }
  }

  const getFilterIcon = (filterId) => {
    switch (filterId) {
      case 'free':
        return 'Free'
      case 'paid':
        return 'Paid'
      case 'popular':
        return 'Popular'
      case 'new':
        return 'New'
      case 'trending':
        return 'Trending'
      case 'most-credits':
        return 'Credits'
      default:
        return ''
    }
  }

  const getFilterColor = (filterId, isActive) => {
    if (!isActive) return 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
    
    switch (filterId) {
      case 'free':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'paid':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
      case 'popular':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'new':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'trending':
        return 'bg-violet-500/20 text-violet-400 border-violet-500/30'
      case 'most-credits':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
      default:
        return 'bg-white/10 text-white border-white/20'
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter
        return (
          <motion.button
            key={filter.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterClick(filter.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
              ${getFilterColor(filter.id, isActive)}
            `}
          >
            <span className="flex items-center gap-2">
              {filter.label}
              {getFilterIcon(filter.id) && (
                <span className="text-xs opacity-70">
                  {getFilterIcon(filter.id)}
                </span>
              )}
            </span>
          </motion.button>
        )
      })}
    </motion.div>
  )
}

export default FilterChips
