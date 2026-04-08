import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import PageTransition from './components/common/PageTransition'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import IntroPage from './pages/IntroPage'
import CategoriesPage from './pages/CategoriesPage'
import RequestsPage from './pages/RequestsPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <IntroPage />
            </PageTransition>
          }
        />
        <Route
          path="/auth"
          element={
            <PageTransition>
              <AuthPage />
            </PageTransition>
          }
        />
        <Route
          path="/home"
          element={
            <PageTransition>
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route
          path="/categories"
          element={
            <PageTransition>
              <ProtectedRoute>
                <CategoriesPage />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route
          path="/requests"
          element={
            <PageTransition>
              <ProtectedRoute>
                <RequestsPage />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route
          path="/pricing"
          element={
            <PageTransition>
              <ProtectedRoute>
                <PricingPage />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTransition>
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <AnimatedRoutes />
    </AuthProvider>
  )
}
