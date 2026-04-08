import { motion } from 'framer-motion'

/**
 * Transparent sliding page shell — subtle slide + opacity crossfade between routes.
 */
export default function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{
        opacity: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
        x: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`min-h-full w-full bg-transparent ${className}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  )
}
