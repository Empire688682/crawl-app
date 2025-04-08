'use client'

import { useState } from 'react';
import Image from 'next/image';

const ForgotPwdMpdalsOne = ({ setModal }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true);
    setModal(StageTwo)
    // Replace with real API call
    console.log('Reset link sent to:', email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1e] px-6">
      <div className="w-full max-w-md text-center text-white space-y-6">
        {/* Logo */}
        <Image
          src="/crawl-logo-2.png"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => route.push("/landing-page")}
        />

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold">Forgot Password</h2>
          <p className="text-sm text-gray-400">Did you forget your password?</p>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-sm text-gray-300">
              Enter your email to reset password
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full outline-none px-4 py-2 bg-gray-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />

            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-2 rounded-xl transition hover:bg-gray-200"
            >
              Continue
            </button>
          </form>
        ) : (
          <div className="text-sm text-green-400">
            Reset link sent to <span className="font-semibold">{email}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPwdMpdalsOne
