import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Star, Bookmark, Check } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const ToolCard = ({ tool, onViewDetails, onBookmark, isBookmarked = false, enableSpin = true }) => {
  const [imageError, setImageError] = useState(false)

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(tool)
    }
  }

  const handleBookmarkClick = (e) => {
    e.stopPropagation()
    if (onBookmark) {
      onBookmark(tool)
    }
  }

  const handleVisitClick = (e) => {
    e.stopPropagation()
    window.open(tool.websiteUrl, '_blank', 'noopener,noreferrer')
  }

  const getPricingBadgeClass = (pricingModel) => {
    switch (pricingModel) {
      case 'FREE':
        return 'badge-free'
      case 'PAID':
        return 'badge-paid'
      case 'FREEMIUM':
        return 'badge-freemium'
      default:
        return 'badge-free'
    }
  }

  const getPricingText = (pricingModel) => {
    switch (pricingModel) {
      case 'FREE':
        return 'Free'
      case 'PAID':
        return 'Paid'
      case 'FREEMIUM':
        return 'Freemium'
      default:
        return 'Free'
    }
  }

  return (
    <motion.div
      className="card-3d-scene h-full"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`${enableSpin ? 'card-3d-spin-inner' : ''} glass-card glass-card-hover cursor-pointer group relative overflow-hidden h-full`}
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick()
          }
        }}
        role="button"
        tabIndex={0}
      >
        {/* Header with logo and bookmark */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
              {!imageError && tool.logoUrl ? (
                <img
                  src={tool.logoUrl}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-white/70">
                    {tool.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                {tool.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={getPricingBadgeClass(tool.pricingModel)}>
                  {getPricingText(tool.pricingModel)}
                </Badge>
                {tool.dailyCredits > 0 && (
                  <span className="text-xs text-gray-400">
                    {tool.dailyCredits} {tool.creditUnit}/day
                  </span>
                )}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleBookmarkClick}
            className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
          >
            <Bookmark
              className={`h-4 w-4 ${isBookmarked ? 'fill-current text-violet-400' : ''}`}
            />
          </Button>
        </div>

        {/* Description */}
        <div className="px-6 pb-4">
          <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Tags */}
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-1">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md border border-white/10"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-white/5 text-gray-500 rounded-md border border-white/10">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer with pros and actions */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-3 h-3 text-green-400" />
            <span className="text-xs text-gray-400">
              {tool.pros[0]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={handleVisitClick}
              className="flex-1 bg-violet-600 hover:bg-violet-700 text-white border-0"
            >
              <ExternalLink className="w-3 h-3 mr-2" />
              Visit
            </Button>

            {tool.featured && (
              <div className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-md border border-yellow-500/30">
                <Star className="w-3 h-3 inline mr-1" />
                Featured
              </div>
            )}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default ToolCard
