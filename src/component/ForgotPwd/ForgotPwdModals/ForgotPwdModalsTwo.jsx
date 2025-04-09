'use client'

import { useState, useRef } from 'react'

const ForgotPwdModalsTwo = ({ setModal }) => {
  const length = 6
  const [otp, setOtp] = useState(Array(length).fill(''))
  const inputsRef = useRef([])

  const handleChange = (e, index) => {
    const val = e.target.value
    if (!/^[0-9]?$/.test(val)) return

    const newOtp = [...otp]
    newOtp[index] = val
    setOtp(newOtp)

    if (val && index < length - 1) {
      inputsRef.current[index + 1].focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = otp.join('')
    console.log('Submitted OTP:', code)
    // Add verification API logic here
    setModal("StageThree");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center text-white space-y-6">
        <h1 className="text-2xl font-bold">OTP Verification</h1>
        <p className="text-sm text-gray-400">Check your email for verification code</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                className="w-10 h-10 text-center text-lg bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPwdModalsTwo
