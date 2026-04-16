import { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Image, Bot, Search, Presentation, Palette, Music, TrendingUp, ArrowRight, Users, Clock, Zap } from 'lucide-react';

const useCases = [
  {
    title: 'Write Content',
    description: 'Generate blog posts, articles, and marketing copy with AI writing assistants',
    icon: PenTool,
    color: 'from-blue-500 to-cyan-500',
    tools: 89,
    difficulty: 'Easy',
    time: '5-10 min',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    title: 'Generate Images',
    description: 'Create stunning visuals, artwork, and graphics from text descriptions',
    icon: Image,
    color: 'from-purple-500 to-pink-500',
    tools: 67,
    difficulty: 'Easy',
    time: '2-5 min',
    gradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    title: 'Build Chatbots',
    description: 'Develop intelligent conversational AI for customer service and automation',
    icon: Bot,
    color: 'from-green-500 to-emerald-500',
    tools: 45,
    difficulty: 'Medium',
    time: '30-60 min',
    gradient: 'from-green-600/20 to-emerald-600/20'
  },
  {
    title: 'Research Faster',
    description: 'Analyze data, find insights, and accelerate your research process',
    icon: Search,
    color: 'from-indigo-500 to-purple-500',
    tools: 28,
    difficulty: 'Easy',
    time: '10-15 min',
    gradient: 'from-indigo-600/20 to-purple-600/20'
  },
  {
    title: 'Make Presentations',
    description: 'Create professional presentations and slides with AI assistance',
    icon: Presentation,
    color: 'from-orange-500 to-red-500',
    tools: 19,
    difficulty: 'Easy',
    time: '15-20 min',
    gradient: 'from-orange-600/20 to-red-600/20'
  },
  {
    title: 'Create Logos',
    description: 'Design unique logos and branding materials with AI design tools',
    icon: Palette,
    color: 'from-yellow-500 to-orange-500',
    tools: 31,
    difficulty: 'Easy',
    time: '5-10 min',
    gradient: 'from-yellow-600/20 to-orange-600/20'
  },
  {
    title: 'Edit Audio',
    description: 'Enhance, edit, and generate audio content with AI-powered tools',
    icon: Music,
    color: 'from-pink-500 to-rose-500',
    tools: 23,
    difficulty: 'Medium',
    time: '20-30 min',
    gradient: 'from-pink-600/20 to-rose-600/20'
  },
  {
    title: 'Market Products',
    description: 'Optimize marketing campaigns and analyze customer behavior with AI',
    icon: TrendingUp,
    color: 'from-teal-500 to-green-500',
    tools: 34,
    difficulty: 'Medium',
    time: '25-35 min',
    gradient: 'from-teal-600/20 to-green-600/20'
  }
];

const UseCaseCard = ({ useCase, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = useCase.icon;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
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
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
    >
      {/* Card Background */}
      <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20">
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            {useCase.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-300 line-clamp-2 mb-4 flex-grow">
            {useCase.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">{useCase.tools} tools</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">{useCase.time}</span>
            </div>
          </div>

          {/* Difficulty Badge */}
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border ${getDifficultyColor(useCase.difficulty)} mb-4`}>
            <Zap className="w-3 h-3" />
            {useCase.difficulty}
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105">
              Explore Tools
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
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
    </motion.div>
  );
};

const UseCaseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300 font-medium">Task-First Discovery</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Find by
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"> Use Case</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse AI tools by what you want to accomplish, not just by category
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
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
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-teal-700 transition-all duration-200 flex items-center gap-2 mx-auto group">
            View All Use Cases
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
