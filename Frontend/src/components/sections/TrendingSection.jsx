import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ExternalLink, TrendingUp, Zap, Users, CheckCircle, DollarSign } from 'lucide-react';

const trendingTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI assistant for conversations, writing, and problem-solving',
    category: 'Chatbot',
    rating: 4.8,
    reviews: 12500,
    pricing: 'Freemium',
    tags: ['Easy to get started', 'Popular this week', 'No login required'],
    icon: 'https://via.placeholder.com/48x48/6366f1/ffffff?text=CG',
    gradient: 'from-blue-500 to-cyan-500',
    popularity: 'hot'
  },
  {
    id: 2,
    name: 'Midjourney',
    description: 'Create stunning AI-generated images from text descriptions',
    category: 'Image',
    rating: 4.9,
    reviews: 8900,
    pricing: 'Paid',
    tags: ['Best for artists', 'Popular this week'],
    icon: 'https://via.placeholder.com/48x48/8b5cf6/ffffff?text=MJ',
    gradient: 'from-purple-500 to-pink-500',
    popularity: 'rising'
  },
  {
    id: 3,
    name: 'Claude',
    description: 'Constitutional AI assistant with strong reasoning capabilities',
    category: 'Chatbot',
    rating: 4.7,
    reviews: 6700,
    pricing: 'Freemium',
    tags: ['Best for students', 'Easy to get started'],
    icon: 'https://via.placeholder.com/48x48/10b981/ffffff?text=CL',
    gradient: 'from-green-500 to-emerald-500',
    popularity: 'hot'
  },
  {
    id: 4,
    name: 'Perplexity',
    description: 'AI-powered search engine with real-time information',
    category: 'Research',
    rating: 4.6,
    reviews: 4300,
    pricing: 'Free',
    tags: ['No login required', 'Popular this week'],
    icon: 'https://via.placeholder.com/48x48/f59e0b/ffffff?text=PX',
    gradient: 'from-orange-500 to-red-500',
    popularity: 'rising'
  },
  {
    id: 5,
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion workspace',
    category: 'Productivity',
    rating: 4.5,
    reviews: 5600,
    pricing: 'Freemium',
    tags: ['Best for teams', 'Easy to get started'],
    icon: 'https://via.placeholder.com/48x48/ef4444/ffffff?text=NA',
    gradient: 'from-red-500 to-pink-500',
    popularity: 'hot'
  },
  {
    id: 6,
    name: 'Jasper',
    description: 'AI content creation platform for marketing and copywriting',
    category: 'Writing',
    rating: 4.4,
    reviews: 3200,
    pricing: 'Paid',
    tags: ['Best for marketers', 'Popular this week'],
    icon: 'https://via.placeholder.com/48x48/6366f1/ffffff?text=JP',
    gradient: 'from-indigo-500 to-purple-500',
    popularity: 'rising'
  }
];

const ToolCard = ({ tool, index }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Freemium': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Paid': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getPopularityIcon = (popularity) => {
    switch (popularity) {
      case 'hot': return <Zap className="w-4 h-4 text-orange-400" />;
      case 'rising': return <TrendingUp className="w-4 h-4 text-green-400" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Card Background */}
      <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20">
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center overflow-hidden`}>
                <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {tool.name}
                </h3>
                <span className="text-sm text-gray-400">{tool.category}</span>
              </div>
            </div>
            
            {/* Bookmark Button */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 line-clamp-3 mb-4 flex-grow">
            {tool.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tool.tags.slice(0, 2).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-lg border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-white">{tool.rating}</span>
            </div>
            <span className="text-sm text-gray-400">({tool.reviews.toLocaleString()} reviews)</span>
          </div>

          {/* Pricing Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium border ${getPricingColor(tool.pricing)} mb-4`}>
            <DollarSign className="w-3 h-3" />
            {tool.pricing}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto">
            {/* Popularity Indicator */}
            <div className="flex items-center gap-1">
              {getPopularityIcon(tool.popularity)}
              <span className="text-xs text-gray-400 capitalize">{tool.popularity}</span>
            </div>

            {/* Visit Button */}
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
              Visit
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const TrendingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">Trending Now</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> AI Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the most popular and highly-rated AI tools this week
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trendingTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-2xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 flex items-center gap-2 mx-auto group">
            Explore All Tools
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingSection;
