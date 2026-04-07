import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const plans = [
  { name: 'Free', price: '$0', features: ['Explore tools', 'Bookmarks', 'Basic filters'] },
  { name: 'Pro', price: '$19/mo', features: ['Advanced filters', 'Priority support', 'Saved collections'] },
  { name: 'Team', price: '$49/mo', features: ['Shared workspace', 'Team bookmarks', 'Admin controls'] },
]

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Pricing</h1>
          <p className="mt-2 text-gray-400">Simple plans for individuals and teams.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
                <p className="mt-2 text-3xl font-bold text-violet-300">{plan.price}</p>
                <ul className="mt-6 space-y-2 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 font-semibold text-white">
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PricingPage
