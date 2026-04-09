import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const plans = [
  { 
    name: 'Free', 
    price: '0', 
    originalPrice: '$0',
    features: ['Explore tools', 'Bookmarks', 'Basic filters'],
    popular: false
  },
  { 
    name: 'Pro', 
    price: '1,599', 
    originalPrice: '$19/mo',
    features: ['Advanced filters', 'Priority support', 'Saved collections'],
    popular: true
  },
  { 
    name: 'Team', 
    price: '4,199', 
    originalPrice: '$49/mo',
    features: ['Shared workspace', 'Team bookmarks', 'Admin controls'],
    popular: false
  },
]

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="mt-4 text-lg text-gray-400">Simple pricing for individuals and teams in India</p>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-violet-500/50 bg-gradient-to-b from-violet-900/20 to-blue-900/20 shadow-2xl shadow-violet-500/20' 
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </motion.div>
                )}
                
                <div className="text-center">
                  <h2 className={`text-2xl font-bold ${
                    plan.popular ? 'text-violet-300' : 'text-white'
                  }`}>
                    {plan.name}
                  </h2>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-sm text-gray-400">INR</span>
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className={`text-4xl font-bold ml-2 ${
                          plan.popular ? 'text-violet-300' : 'text-white'
                        }`}
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-sm text-gray-400 ml-1">/mo</span>
                    </div>
                    {plan.originalPrice && (
                      <p className="mt-1 text-xs text-gray-500 line-through">
                        {plan.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + featureIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + featureIndex * 0.1 }}
                        className={`mr-3 h-5 w-5 rounded-full ${
                          plan.popular ? 'bg-violet-500' : 'bg-blue-500'
                        } flex items-center justify-center`}
                      >
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Choose {plan.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PricingPage
