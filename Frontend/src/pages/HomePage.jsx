import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/hero/HeroSection'
import CategorySection from '../components/categories/CategorySection'
import FeaturedTools from '../components/featured/FeaturedTools'
import SearchResults from '../components/search/SearchResults'
import FilterChips from '../components/search/FilterChips'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import GlowBackground from '../components/common/GlowBackground'
import { tools, categories, filterOptions } from '../data/mockTools'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTools, setFilteredTools] = useState([])
  const [loading, setLoading] = useState(false)
  const [bookmarks, setBookmarks] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  // Filter tools based on search, category, and filter
  useEffect(() => {
    setLoading(true)
    
    // Simulate API delay
    const timer = setTimeout(() => {
      let filtered = [...tools]

      // Filter by search query
      if (searchQuery) {
        filtered = filtered.filter(tool =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      }

      // Filter by category
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(tool => tool.category === selectedCategory)
      }

      // Apply additional filters
      switch (activeFilter) {
        case 'free':
          filtered = filtered.filter(tool => tool.isFree)
          break
        case 'paid':
          filtered = filtered.filter(tool => !tool.isFree)
          break
        case 'popular':
          filtered = filtered.filter(tool => tool.featured)
          break
        case 'new':
          filtered = filtered.filter(tool => tool.isNew)
          break
        case 'trending':
          filtered = filtered.filter(tool => tool.trending)
          break
        case 'most-credits':
          filtered = filtered.sort((a, b) => (b.dailyCredits || 0) - (a.dailyCredits || 0))
          break
        default:
          // Show all
          break
      }

      setFilteredTools(filtered)
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory, activeFilter])

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query)
    setShowSearchResults(!!query)
  }

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category !== 'all') {
      setShowSearchResults(true)
    }
  }

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    if (filter !== 'all') {
      setShowSearchResults(true)
    }
  }

  // Handle tool details view
  const handleViewDetails = (tool) => {
    console.log('View details for:', tool.name)
    // This would navigate to tool detail page
  }

  // Handle bookmark toggle
  const handleBookmark = (tool) => {
    setBookmarks(prev => {
      const isBookmarked = prev.includes(tool.id)
      if (isBookmarked) {
        return prev.filter(id => id !== tool.id)
      } else {
        return [...prev, tool.id]
      }
    })
  }

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setActiveFilter('all')
    setShowSearchResults(false)
  }

  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <GlowBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onSearch={handleSearch} />

        {/* Search Results */}
        <AnimatePresence>
          {showSearchResults && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto px-4 py-12"
            >
              {/* Filters */}
              <div className="mb-8">
                <FilterChips
                  filters={filterOptions}
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                />
              </div>

              {/* Results */}
              <SearchResults
                tools={filteredTools}
                loading={loading}
                searchQuery={searchQuery}
                onViewDetails={handleViewDetails}
                onBookmark={handleBookmark}
                bookmarks={bookmarks}
                totalCount={filteredTools.length}
              />

              {/* Clear search button */}
              {(searchQuery || selectedCategory !== 'all' || activeFilter !== 'all') && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleClearSearch}
                    className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </motion.section>
          )}
        </AnimatePresence>

        {/* Categories Section - Only show when not searching */}
        {!showSearchResults && (
          <CategorySection
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}

        {/* Featured Tools Section - Only show when not searching */}
        {!showSearchResults && (
          <FeaturedTools
            onViewDetails={handleViewDetails}
            onBookmark={handleBookmark}
            bookmarks={bookmarks}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
