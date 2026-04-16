import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import CategoryGrid from '../components/sections/CategoryGrid'
import TrendingSection from '../components/sections/TrendingSection'
import UseCaseSection from '../components/sections/UseCaseSection'
import ComparisonSection from '../components/sections/ComparisonSection'
import MetricsSection from '../components/sections/MetricsSection'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Category Grid */}
        <CategoryGrid />

        {/* Trending Tools */}
        <TrendingSection />

        {/* Use Case Section */}
        <UseCaseSection />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Metrics Section */}
        <MetricsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
