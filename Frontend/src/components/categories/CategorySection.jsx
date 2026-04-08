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
  Bot,
} from 'lucide-react'
import { categories } from '../../data/mockTools'

const CategorySection = ({ selectedCategory, onCategoryChange, className = '' }) => {
  const loopCategories = [...categories, ...categories]

  const getIconComponent = (iconName) => {
    const iconMap = {
      PenTool: PenTool,
      Palette: Palette,
      Video: Video,
      Code2: Code2,
      Megaphone: Megaphone,
      Zap: Zap,
      Mic: Mic,
      Search: Search,
      Image: Image,
      Bot: Bot,
    }
    const IconComponent = iconMap[iconName] || Zap
    return <IconComponent className="w-5 h-5" />
  }

  const handleCategoryClick = (categoryId) => {
    if (onCategoryChange) {
      onCategoryChange(categoryId === selectedCategory ? 'all' : categoryId)
    }
  }

  const renderCategoryCard = (category, keySuffix) => {
    const isSelected = category.id === selectedCategory
    return (
      <motion.button
        key={`${category.id}-${keySuffix}`}
        type="button"
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleCategoryClick(category.id)}
        className="relative shrink-0 w-[200px] sm:w-[220px] rounded-2xl border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
      >
        <div
          className={`
            relative rounded-2xl border p-5 w-full transition-colors duration-300
            ${isSelected
              ? 'bg-white/10 border-white/20 shadow-lg shadow-white/10'
              : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }
          `}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
            style={{ backgroundColor: `${category.color}20` }}
          >
            <div style={{ color: category.color }}>
              {getIconComponent(category.icon)}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">{category.name}</h3>
            <p className="text-sm text-gray-400">{category.count} tools</p>
          </div>
          {isSelected && (
            <div
              className="absolute inset-0 rounded-2xl border-2 bg-white/5 pointer-events-none"
              style={{ borderColor: category.color }}
            />
          )}
        </div>
      </motion.button>
    )
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Browse by <span className="gradient-text-accent">Category</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find AI tools organized by category to quickly discover what you need
          </p>
        </motion.div>

        {/* Row 1 — scroll left (wallpaper) */}
        <div className="category-marquee-mask -mx-2 mb-4 overflow-hidden py-1">
          <div className="category-marquee-track pl-2">
            {loopCategories.map((category, i) => renderCategoryCard(category, `r1-${i}`))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="category-marquee-mask -mx-2 overflow-hidden py-1">
          <div className="category-marquee-track category-marquee-track--reverse pl-2">
            {loopCategories.map((category, i) => renderCategoryCard(category, `r2-${i}`))}
          </div>
        </div>

        {selectedCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <button
              type="button"
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
