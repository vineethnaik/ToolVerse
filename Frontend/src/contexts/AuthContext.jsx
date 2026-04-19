import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import api from '../services/api'

/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} role
 */

/**
 * @typedef {Object} AuthContextType
 * @property {User|null} user
 * @property {string|null} token
 * @property {(username: string, password: string) => Promise<void>} login
 * @property {(userData: RegisterData) => Promise<void>} register
 * @property {(updates: {firstName: string, lastName: string, email: string}) => Promise<void>} updateProfile
 * @property {() => void} logout
 * @property {boolean} isLoading
 * @property {string|null} error
 */

/**
 * @typedef {Object} RegisterData
 * @property {string} username
 * @property {string} email
 * @property {string} password
 * @property {string} firstName
 * @property {string} lastName
 */

const AuthContext = createContext(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

/**
 * @param {Object} props
 * @param {ReactNode} props.children
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const parseAuthError = (err, fallbackMessage) => {
    const responseData = err?.response?.data

    if (typeof responseData === 'string' && responseData.trim().length > 0) {
      return responseData
    }

    if (responseData?.message) {
      return responseData.message
    }

    if (responseData?.detail) {
      return responseData.detail
    }

    return fallbackMessage
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')
    
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
  }, [])

  /**
   * @param {string} username
   * @param {string} password
   */
  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await api.post('/auth/login', {
        username,
        password
      }, {
        headers: {
          Authorization: '',
        },
      })
      
      const { token: newToken, ...userData } = response.data
      
      setToken(newToken)
      setUser(userData)
      localStorage.setItem('token', newToken)
      localStorage.setItem('user', JSON.stringify(userData))
    } catch (err) {
      setError(parseAuthError(err, 'Invalid username or password'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * @param {RegisterData} userData
   */
  const register = async (userData) => {
    setIsLoading(true)
    setError(null)
    
    try {
      await api.post('/auth/register', userData, {
        headers: {
          Authorization: '',
        },
      })
    } catch (err) {
      setError(parseAuthError(err, 'Registration failed'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const updateProfile = async (updates) => {
    if (!user?.username) {
      throw new Error('User is not logged in')
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await api.put(`/auth/me?username=${encodeURIComponent(user.username)}`, updates)
      const updatedUser = {
        ...user,
        ...response,
      }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    } catch (err) {
      setError(parseAuthError(err, 'Failed to update profile'))
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    user,
    token,
    login,
    register,
    updateProfile,
    logout,
    isLoading,
    error
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
