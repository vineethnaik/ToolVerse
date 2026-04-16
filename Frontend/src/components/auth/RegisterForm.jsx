import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../../contexts/AuthContext'
import { Eye, EyeOff, UserPlus } from 'lucide-react'

const RegisterForm = ({ onSwitchMode, onRegistered }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const { register, isLoading, error } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setSuccessMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(formData)
      setSuccessMessage('Registration successful. Please sign in.')
      setFormData({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      })
      if (onRegistered) {
        onRegistered()
      }
    } catch (err) {
      // Error is handled by the auth context
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border border-white/35 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="text-center mb-4 md:mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 md:mb-4">
            <img 
              src="/register.jpg" 
              alt="Register" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1 md:mb-2 tracking-tight">Create Account</h2>
          <p className="text-gray-300 text-sm md:text-base">Join ToolVerse today</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
          >
            <p className="text-red-300 text-sm">{error}</p>
          </motion.div>
        )}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-lg"
          >
            <p className="text-emerald-200 text-sm">{successMessage}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label htmlFor="username" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                minLength={3}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pr-10 sm:pr-12"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-glossy w-full py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating account...
              </div>
            ) : (
              'Create Account'
            )}
          </motion.button>
        </form>

        <div className="mt-3 md:mt-5 text-center">
          <p className="text-gray-300">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchMode}
              className="font-semibold text-green-300 hover:text-green-200 transition-colors duration-200"
            >
              Sign in
            </button>
          </p>
        </div>

        <div className="mt-3 md:mt-4 text-xs text-gray-400 text-center hidden sm:block">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </motion.div>
  )
}

export default RegisterForm
