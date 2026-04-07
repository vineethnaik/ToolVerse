import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'

const SearchBar = ({ onSearch, placeholder = "Search AI tools...", className = "" }) => {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onSearch) {
        onSearch(query)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query, onSearch])

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-2xl mx-auto ${className}`}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search 
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
              isFocused ? 'text-violet-400' : 'text-gray-400'
            }`}
            size={20}
          />
          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`pl-12 pr-12 h-14 text-lg bg-white/5 border-white/10 rounded-2xl focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/20 placeholder:text-gray-500 transition-all duration-300 ${
              isFocused ? 'search-focused' : ''
            }`}
          />
          {query && (
            <motion.button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          )}
        </div>
      </form>
      
      {/* Search suggestions could go here */}
      {query && isFocused && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 w-full bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 z-50"
        >
          <p className="text-gray-400 text-sm">Press Enter to search...</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default SearchBar
