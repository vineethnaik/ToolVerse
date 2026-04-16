import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, RefreshCw, CheckCircle, Zap, Award, Globe, Clock } from 'lucide-react';

const metrics = [
  {
    value: 250,
    suffix: '+',
    label: 'AI Tools Indexed',
    description: 'Curated and verified tools',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    value: 50,
    suffix: '+',
    label: 'Categories',
    description: 'Organized by use case',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    value: 12,
    suffix: 'K+',
    label: 'Active Users',
    description: 'Growing community daily',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-600/20 to-emerald-600/20'
  },
  {
    value: 98,
    suffix: '%',
    label: 'Verified Listings',
    description: 'Quality assured tools',
    icon: CheckCircle,
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-600/20 to-red-600/20'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Updates',
    description: 'Fresh content always',
    icon: RefreshCw,
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-600/20 to-purple-600/20'
  },
  {
    value: 4.8,
    suffix: '/5',
    label: 'User Rating',
    description: 'Community trusted',
    icon: TrendingUp,
    color: 'from-teal-500 to-green-500',
    gradient: 'from-teal-600/20 to-green-600/20'
  }
];

const MetricCard = ({ metric, index, isInView }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const Icon = metric.icon;

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = metric.value / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setCount(metric.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(increment * currentStep));
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isInView, hasAnimated, metric.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card Background */}
      <div className="relative h-40 rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20">
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Value */}
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {hasAnimated ? count : 0}
            </span>
            <span className="text-2xl font-bold text-white">
              {metric.suffix}
            </span>
          </div>

          {/* Label */}
          <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            {metric.label}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400">
            {metric.description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const MetricsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Platform Metrics</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real numbers that show our commitment to quality and community
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <MetricCard 
              key={metric.label} 
              metric={metric} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Verified Tools</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Updated Daily</span>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Community Driven</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 mb-6">
            Join thousands of users who trust ToolVerse for their AI discovery needs
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
            Start Exploring
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
