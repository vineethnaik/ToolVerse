import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigate, useSearchParams } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import { useAuth } from '../contexts/AuthContext'

const AuthPage = () => {
  const [searchParams] = useSearchParams()
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'register')
  const { user, token } = useAuth()

  if (user && token) {
    return <Navigate to="/home" replace />
  }

  return (
    <div className={`relative flex items-center justify-center px-3 sm:px-4 py-2 ${isLogin ? 'h-screen overflow-hidden' : 'min-h-screen overflow-y-auto'}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/35 via-violet-900/20 to-black/50"></div>
      
      <div className="relative z-10 w-full max-w-sm sm:max-w-md my-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 md:mb-6"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 p-1 shadow-lg shadow-violet-500/20">
              <img 
                src="/tc.png" 
                alt="ToolVerse Logo" 
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">ToolVerse</h1>
          </div>
          <p className="text-sm sm:text-base text-gray-300">Discover the best AI tools for your needs</p>
        </motion.div>

        <motion.div
          key={isLogin ? 'login' : 'register'}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -24, scale: 0.98 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {isLogin ? (
            <LoginForm onSwitchMode={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchMode={() => setIsLogin(true)} onRegistered={() => setIsLogin(true)} />
          )}
        </motion.div>

      </div>

      <div className="absolute bottom-4 left-3 sm:left-4 hidden md:block text-gray-400 text-xs">
        © 2024 ToolVerse. All rights reserved.
      </div>
    </div>
  )
}

export default AuthPage
