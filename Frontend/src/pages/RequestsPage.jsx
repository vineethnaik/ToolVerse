import React, { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { requestService } from '../services/api'

const initialState = {
  toolIdea: '',
  problemItSolves: '',
  desiredCategory: '',
  email: '',
}

const RequestsPage = () => {
  const [formData, setFormData] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
        setFormData(initialState)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitted(false)
    setError('')

    try {
      await requestService.submitRequest({
        ...formData,
        status: 'PENDING',
      })
      setSubmitted(true)
      setFormData(initialState)
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        (typeof err?.response?.data === 'string' ? err.response.data : '') ||
        'Failed to submit request. Please try again.'
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Request a Tool</h1>
          <p className="mt-2 text-gray-400">Tell us which AI tool should be added next.</p>

          {submitted && (
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
          {error && (
            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="hidden"
              name="_subject"
              value="Request a Tool - New Tool Submission"
            />
            <input
              name="toolIdea"
              value={formData.toolIdea}
              onChange={handleChange}
              placeholder="Tool idea"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
            />
            <textarea
              name="problemItSolves"
              value={formData.problemItSolves}
              onChange={handleChange}
              placeholder="What problem does it solve?"
              required
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
            />
            <input
              name="desiredCategory"
              value={formData.desiredCategory}
              onChange={handleChange}
              placeholder="Desired category"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 font-semibold text-white"
            >
              {submitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RequestsPage
