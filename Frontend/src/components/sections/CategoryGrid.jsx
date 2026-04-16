import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Image, Music, TrendingUp, Search, Palette, PenTool, Video, Zap, ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Chatbot',
    icon: MessageSquare,
    count: 45,
    description: 'AI-powered conversational assistants',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    name: 'Image',
    icon: Image,
    count: 67,
    description: 'Generate and edit images with AI',
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    name: 'Audio',
    icon: Music,
    count: 23,
    description: 'Music generation and audio processing',
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-600/20 to-emerald-600/20'
  },
  {
    name: 'Marketing',
    icon: TrendingUp,
    count: 34,
    description: 'Marketing automation and analytics',
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-600/20 to-red-600/20'
  },
  {
    name: 'Research',
    icon: Search,
    count: 28,
    description: 'Research and data analysis tools',
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-600/20 to-purple-600/20'
  },
  {
    name: 'Presentation',
    icon: Palette,
    count: 19,
    description: 'Create stunning presentations',
    color: 'from-pink-500 to-rose-500',
    gradient: 'from-pink-600/20 to-rose-600/20'
  },
  {
    name: 'Logo',
    icon: Palette,
    count: 31,
    description: 'Logo design and branding tools',
    color: 'from-yellow-500 to-orange-500',
    gradient: 'from-yellow-600/20 to-orange-600/20'
  },
  {
    name: 'Writing',
    icon: PenTool,
    count: 89,
    description: 'AI writing assistants and editors',
    color: 'from-blue-500 to-indigo-500',
    gradient: 'from-blue-600/20 to-indigo-600/20'
  },
  {
    name: 'Video',
    icon: Video,
    count: 34,
    description: 'Video creation and editing tools',
    color: 'from-red-500 to-pink-500',
    gradient: 'from-red-600/20 to-pink-600/20'
  },
  {
    name: 'Productivity',
    icon: Zap,
    count: 52,
    description: 'Boost productivity with AI',
    color: 'from-green-500 to-teal-500',
    gradient: 'from-green-600/20 to-teal-600/20'
  }
];

const CategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore by
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Category</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find the perfect AI tools organized by category and use case
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === category.name;

            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Card Background */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20">
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Category Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {category.name}
                    </h3>

                    {/* Tool Count */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <span className="w-2 h-2 bg-current rounded-full" />
                      <span>{category.count} tools</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 line-clamp-2 mb-auto">
                      {category.description}
                    </p>

                    {/* Hover Action */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore tools
                      </span>
                      <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                {/* Floating Badge on Hover */}
                {isHovered && (
                  <motion.div
                    className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    Popular
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center gap-2 mx-auto group">
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
