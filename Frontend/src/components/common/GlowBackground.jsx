import React from 'react'
import { motion } from 'framer-motion'

const GlowBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="blob absolute top-0 -left-4 w-72 h-72 bg-purple-500"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="blob absolute top-0 -right-4 w-72 h-72 bg-yellow-500"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="blob absolute -bottom-8 left-20 w-72 h-72 bg-blue-500"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="blob absolute bottom-0 right-20 w-72 h-72 bg-pink-500"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="blob absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500"
        animate={{
          x: [0, 80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
    </div>
  )
}

export default GlowBackground
