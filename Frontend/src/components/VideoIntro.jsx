import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const VideoIntro = () => {
  const [showIntro, setShowIntro] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)

  useEffect(() => {
    // Check if user has already seen the intro
    const hasSeenIntro = localStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) {
      setShowIntro(false)
    }
  }, [])

  const handleVideoEnd = () => {
    setVideoEnded(true)
    // Mark that user has seen the intro
    localStorage.setItem('hasSeenIntro', 'true')
    
    // Hide intro after a short delay
    setTimeout(() => {
      setShowIntro(false)
    }, 500)
  }

  const handleSkipIntro = () => {
    setVideoEnded(true)
    localStorage.setItem('hasSeenIntro', 'true')
    setTimeout(() => {
      setShowIntro(false)
    }, 300)
  }

  if (!showIntro) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black"
      >
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Video Element */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onCanPlay={() => {
              // Video is ready to play
            }}
          >
            <source src="/intr0-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSkipIntro}
            className="absolute top-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-colors z-10"
          >
            Skip Intro
          </motion.button>

          {/* Loading Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/60 text-sm"
            >
              Loading...
            </motion.div>
          </div>

          {/* Fade out overlay when video ends */}
          {videoEnded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-black pointer-events-none"
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default VideoIntro
