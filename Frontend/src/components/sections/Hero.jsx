import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingUp, Target, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'ChatGPT',
    'Midjourney',
    'AI writing tools',
    'Logo generators'
  ]);
  const [categorySuggestions, setCategorySuggestions] = useState([
    { name: 'Chatbot Tools', count: 45 },
    { name: 'Image Generation', count: 67 },
    { name: 'Writing Assistants', count: 89 },
    { name: 'Video Creation', count: 34 }
  ]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add to recent searches
      setRecentSearches(prev => [searchQuery, ...prev.slice(0, 3)]);
      setShowSuggestions(false);
      // Navigate to search results
      console.log('Searching for:', searchQuery);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">AI-Powered Discovery Platform</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Find the Right AI Tool
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              for Every Task
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Search, compare, and discover the perfect AI tools for your needs in seconds. 
            Our intelligent platform helps you find exactly what you're looking for.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} ref={searchRef} className="relative">
              <div className={`relative group transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                  <div className="flex items-center">
                    <Search className="w-5 h-5 text-gray-400 ml-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => {
                        setIsFocused(true);
                        setShowSuggestions(true);
                      }}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Search for AI tools, features, or use cases..."
                      className="flex-1 bg-transparent px-4 py-4 text-white placeholder-gray-400 outline-none"
                    />
                    <button
                      type="submit"
                      className="px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-r-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center gap-2"
                    >
                      Search
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                  >
                    {searchQuery.length > 0 && (
                      <div className="p-4 border-b border-white/10">
                        <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Suggestions</div>
                        <div className="space-y-2">
                          {categorySuggestions.slice(0, 3).map((category, index) => (
                            <button
                              key={index}
                              className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between group"
                              onClick={() => {
                                setSearchQuery(category.name);
                                setShowSuggestions(false);
                              }}
                            >
                              <span className="text-white">{category.name}</span>
                              <span className="text-xs text-gray-400">{category.count} tools</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="p-4">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Recent Searches</div>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
                            onClick={() => {
                              setSearchQuery(search);
                              setShowSuggestions(false);
                            }}
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300">{search}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group">
              <TrendingUp className="w-5 h-5" />
              Explore Tools
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2">
              <Target className="w-5 h-5" />
              Find by Use Case
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>250+ Verified Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>AI-Powered Discovery</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
