import React from 'react'
import { useNavigate } from 'react-router-dom'

const IntroPage = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full overflow-y-auto">
      <video className="fixed inset-0 h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="/intr0-1.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-[110vh] items-end justify-center px-4 pb-12 md:pb-16">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/auth?mode=login')}
            className="rounded-full border border-white/45 bg-white/15 px-8 py-3 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/25 md:px-10 md:py-3.5 md:text-lg"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/auth?mode=register')}
            className="btn-glossy rounded-full px-8 py-3 text-base font-semibold text-white md:px-10 md:py-3.5 md:text-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default IntroPage
