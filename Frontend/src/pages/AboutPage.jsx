import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">About ToolVerse</h1>
          <p className="mt-4 text-gray-300">
            ToolVerse helps people discover, compare, and adopt the best AI tools across categories like research,
            content, design, automation, and more.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h2 className="text-lg font-semibold text-white">Our Mission</h2>
              <p className="mt-2 text-sm text-gray-300">Make AI tool discovery fast, transparent, and practical.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h2 className="text-lg font-semibold text-white">What We Curate</h2>
              <p className="mt-2 text-sm text-gray-300">Verified tool links, logos, categories, and use-case focused lists.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
