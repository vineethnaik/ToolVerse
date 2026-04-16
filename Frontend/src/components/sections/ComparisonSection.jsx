import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, X, DollarSign, Users, ExternalLink, ArrowRight, Plus, Minus } from 'lucide-react';

const comparisonData = [
  {
    name: 'ChatGPT',
    category: 'Chatbot',
    rating: 4.8,
    pricing: 'Freemium',
    icon: 'https://via.placeholder.com/48x48/6366f1/ffffff?text=CG',
    gradient: 'from-blue-500 to-cyan-500',
    bestUse: 'General conversations & writing',
    freePlan: 'Yes (limited)',
    features: [
      'Advanced conversational AI',
      'Code generation',
      'Writing assistance',
      'Image analysis',
      'Plugin ecosystem'
    ],
    pros: ['Easy to use', 'Versatile', 'Large knowledge base'],
    cons: ['Limited free tier', 'Can be slow during peak times']
  },
  {
    name: 'Claude',
    category: 'Chatbot',
    rating: 4.7,
    pricing: 'Freemium',
    icon: 'https://via.placeholder.com/48x48/10b981/ffffff?text=CL',
    gradient: 'from-green-500 to-emerald-500',
    bestUse: 'Long-form writing & analysis',
    freePlan: 'Yes (limited)',
    features: [
      'Constitutional AI',
      'Long context window',
      'Code generation',
      'Document analysis',
      'Ethical reasoning'
    ],
    pros: ['Ethical approach', 'Long context', 'Better for complex tasks'],
    cons: ['Newer platform', 'Smaller community']
  },
  {
    name: 'Midjourney',
    category: 'Image',
    rating: 4.9,
    pricing: 'Paid',
    icon: 'https://via.placeholder.com/48x48/8b5cf6/ffffff?text=MJ',
    gradient: 'from-purple-500 to-pink-500',
    bestUse: 'Artistic image generation',
    freePlan: 'No',
    features: [
      'High-quality art generation',
      'Style customization',
      'Community features',
      'Commercial license',
      'API access'
    ],
    pros: ['Exceptional quality', 'Artistic styles', 'Active community'],
    cons: 'No free tier', 
    cons: ['No free tier', 'Subscription required']
  }
];

const ComparisonSection = () => {
  const [selectedTools, setSelectedTools] = useState([0, 1]);

  const toggleTool = (index) => {
    if (selectedTools.includes(index)) {
      if (selectedTools.length > 1) {
        setSelectedTools(selectedTools.filter(i => i !== index));
      }
    } else {
      if (selectedTools.length < 3) {
        setSelectedTools([...selectedTools, index]);
      }
    }
  };

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Freemium': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Paid': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const ComparisonTable = () => {
    const tools = selectedTools.map(index => comparisonData[index]);

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
              {tools.map((tool, index) => (
                <th key={index} className="text-center py-4 px-4 min-w-[200px]">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center overflow-hidden`}>
                        <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-white">{tool.name}</span>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border ${getPricingColor(tool.pricing)}`}>
                      <DollarSign className="w-3 h-3" />
                      {tool.pricing}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {/* Rating */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">Rating</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-medium">{tool.rating}</span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Category */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">Category</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4 text-center">
                  <span className="text-gray-300">{tool.category}</span>
                </td>
              ))}
            </tr>

            {/* Best Use */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">Best For</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4 text-center">
                  <span className="text-sm text-gray-300">{tool.bestUse}</span>
                </td>
              ))}
            </tr>

            {/* Free Plan */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">Free Plan</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4 text-center">
                  <span className={`text-sm ${tool.freePlan === 'Yes (limited)' ? 'text-green-400' : 'text-red-400'}`}>
                    {tool.freePlan}
                  </span>
                </td>
              ))}
            </tr>

            {/* Key Features */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium align-top">Key Features</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4">
                  <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Pros */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium align-top">Pros</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4">
                  <ul className="space-y-1">
                    {tool.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center gap-2 text-sm text-green-400">
                        <Plus className="w-3 h-3 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Cons */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium align-top">Cons</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4">
                  <ul className="space-y-1">
                    {tool.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center gap-2 text-sm text-red-400">
                        <Minus className="w-3 h-3 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Action */}
            <tr className="hover:bg-white/5 transition-colors">
              <td className="py-4 px-4 text-gray-300 font-medium">Action</td>
              {tools.map((tool, index) => (
                <td key={index} className="py-4 px-4 text-center">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center gap-2 mx-auto">
                    Visit Tool
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Smart Comparison</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Compare AI Tools
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Side by Side</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Make informed decisions with our comprehensive tool comparison feature
          </p>
        </motion.div>

        {/* Tool Selection */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Select up to 3 tools to compare</h3>
            <p className="text-gray-400">Click on tools to add/remove them from comparison</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {comparisonData.map((tool, index) => (
              <motion.button
                key={index}
                onClick={() => toggleTool(index)}
                className={`relative px-6 py-3 rounded-xl border transition-all duration-200 ${
                  selectedTools.includes(index)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-500'
                    : 'bg-slate-800/50 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center overflow-hidden`}>
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium">{tool.name}</span>
                  {selectedTools.includes(index) && (
                    <Check className="w-4 h-4" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        {selectedTools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <ComparisonTable />
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {selectedTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No tools selected</h3>
            <p className="text-gray-400">Select tools above to start comparing them</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center gap-2 mx-auto group">
            Compare More Tools
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
