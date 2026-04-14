import React, { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { useForm, ValidationError } from '@formspree/react'

const initialState = {
  toolIdea: '',
  problemItSolves: '',
  desiredCategory: '',
  email: '',
}

const RequestsPage = () => {
  const [state, handleSubmit, reset] = useForm("xjgjvdkp")

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded, reset])

  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Request a Tool</h1>
          <p className="mt-2 text-gray-400">Tell us which AI tool should be added next.</p>

          {state.succeeded && (
            <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-16 w-16 text-emerald-400 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="animate-ping"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                    className="animate-bounce"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-emerald-200">
                Request Submitted Successfully!
              </h3>
              <p className="text-emerald-300">
                Thank you for your tool suggestion. We'll review it soon.
              </p>
              <p className="mt-2 text-sm text-emerald-400">
                Form will reset in 5 seconds...
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="hidden"
              name="_subject"
              value="Request a Tool - New Tool Submission"
            />
            <div>
              <label htmlFor="toolIdea" className="mb-2 block text-sm font-medium text-gray-300">
                Tool Idea
              </label>
              <input
                id="toolIdea"
                name="toolIdea"
                placeholder="Tool idea"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
              />
              <ValidationError 
                prefix="Tool Idea" 
                field="toolIdea"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
            <div>
              <label htmlFor="problemItSolves" className="mb-2 block text-sm font-medium text-gray-300">
                What problem does it solve?
              </label>
              <textarea
                id="problemItSolves"
                name="problemItSolves"
                placeholder="What problem does it solve?"
                required
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400 resize-none"
              />
              <ValidationError 
                prefix="Problem It Solves" 
                field="problemItSolves"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
            <div>
              <label htmlFor="desiredCategory" className="mb-2 block text-sm font-medium text-gray-300">
                Desired Category
              </label>
              <input
                id="desiredCategory"
                name="desiredCategory"
                placeholder="Desired category"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
              />
              <ValidationError 
                prefix="Desired Category" 
                field="desiredCategory"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 font-semibold text-white transition-all hover:from-violet-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Submitting...' : 'Submit Request'}
            </button>
            {state.errors && state.errors.length > 0 && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                <p className="text-sm text-red-200">
                  Please fix the errors above and try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RequestsPage
