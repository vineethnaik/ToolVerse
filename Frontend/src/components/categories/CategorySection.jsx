import React from 'react'
import { motion } from 'framer-motion'
import { 
  PenTool, 
  Palette, 
  Video, 
  Code2, 
  Megaphone, 
  Zap, 
  Mic, 
  Search, 
  Image, 
  Bot 
} from 'lucide-react'
import { categories } from '../../data/mockTools'

const CategorySection = ({ selectedCategory, onCategoryChange, className = "" }) => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const getIconComponent = (iconName) => {
    const iconMap = {
      'PenTool': PenTool,
      'Palette': Palette,
      'Video': Video,
      'Code2': Code2,
      'Megaphone': Megaphone,
      'Zap': Zap,
      'Mic': Mic,
      'Search': Search,
      'Image': Image,
      'Bot': Bot
    }
    const IconComponent = iconMap[iconName] || Zap
    return <IconComponent className="w-5 h-5" />
  }

  const handleCategoryClick = (categoryId) => {
    if (onCategoryChange) {
      onCategoryChange(categoryId === selectedCategory ? 'all' : categoryId)
    }
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Browse by <span className="gradient-text-accent">Category</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find AI tools organized by category to quickly discover what you need
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((category) => {
            const isSelected = category.id === selectedCategory
            return (
              <motion.button
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.id)}
                className={`
                  relative p-6 rounded-2xl border transition-all duration-300 text-left
                  ${isSelected 
                    ? 'bg-white/10 border-white/20 shadow-lg shadow-white/10' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }
                `}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <div style={{ color: category.color }}>
                    {getIconComponent(category.icon)}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {category.count} tools
                  </p>
                </div>

                {/* Selected indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="selectedCategory"
                    className="absolute inset-0 rounded-2xl border-2 bg-white/5"
                    style={{ borderColor: category.color }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Clear selection button */}
        {selectedCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => handleCategoryChange('all')}
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              Clear Selection
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default CategorySection
