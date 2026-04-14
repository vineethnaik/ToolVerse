import React, { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xzdjgwgq")

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded, reset])

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
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
          Message Sent Successfully!
        </h3>
        <p className="text-emerald-300">
          Thank you for contacting us. We'll get back to you soon.
        </p>
        <p className="mt-2 text-sm text-emerald-400">
          Form will reset in 5 seconds...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
          placeholder="your@email.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-400"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400"
          placeholder="How can we help you?"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="mt-1 text-sm text-red-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-400 resize-none"
          placeholder="Tell us more about your request..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-400"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 font-semibold text-white transition-all hover:from-violet-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {state.errors && state.errors.length > 0 && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-sm text-red-200">
            Please fix the errors above and try again.
          </p>
        </div>
      )}
    </form>
  )
}

export default ContactForm
