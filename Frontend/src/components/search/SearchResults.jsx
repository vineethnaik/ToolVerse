import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Search } from 'lucide-react'
import ToolCard from './ToolCard'
import { Button } from '../ui/button'

const SearchResults = ({ 
  tools = [], 
  loading = false, 
  searchQuery = '', 
  onViewDetails, 
  onBookmark,
  bookmarks = [],
  enableSpin = true,
  onLoadMore,
  hasMore = false,
  totalCount = 0
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const isBookmarked = (toolId) => bookmarks.includes(toolId)

  if (loading && tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-violet-400 mb-4" />
        <p className="text-gray-400">Searching for tools...</p>
      </div>
    )
  }

  if (!loading && tools.length === 0 && searchQuery) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          No tools found
        </h3>
        <p className="text-gray-400 mb-6">
          We couldn't find any tools matching "{searchQuery}"
        </p>
        <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
          <p>Try:</p>
          <ul className="text-left">
            <li>Using different keywords</li>
            <li>Checking for typos</li>
            <li>Browsing by category</li>
          </ul>
        </div>
      </motion.div>
    )
  }

  if (!loading && tools.length === 0 && !searchQuery) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          Start exploring AI tools
        </h3>
        <p className="text-gray-400">
          Search for tools or browse categories to discover amazing AI tools
        </p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results header */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              Search Results
            </h2>
            <p className="text-gray-400">
              Found {totalCount} tools for "{searchQuery}"
            </p>
          </div>
        </motion.div>
      )}

      {/* Tools grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="tool-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              variants={itemVariants}
              layout
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <ToolCard
                tool={tool}
                onViewDetails={onViewDetails}
                onBookmark={onBookmark}
                isBookmarked={isBookmarked(tool.id)}
                enableSpin={enableSpin}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading more indicator */}
      {loading && tools.length > 0 && (
        <div className="flex justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-violet-400" />
        </div>
      )}

      {/* Load more button */}
      {!loading && hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center pt-8"
        >
          <Button
            onClick={onLoadMore}
            variant="outline"
            className="bg-white/5 border-white/10 hover:bg-white/10 text-white"
          >
            Load More Tools
          </Button>
        </motion.div>
      )}

      {/* End of results */}
      {!loading && !hasMore && tools.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 text-gray-400"
        >
          <p>You've reached the end of the results</p>
        </motion.div>
      )}
    </div>
  )
}

export default SearchResults
