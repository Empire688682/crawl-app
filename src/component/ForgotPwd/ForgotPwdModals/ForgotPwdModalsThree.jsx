'use client'

import { useGlobalContext } from '@/component/Context';
import { useState } from 'react'

const ForgotPwdModalsThree = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {route} = useGlobalContext();

  const passwordValidations = [
    { label: 'At least 8 characters', isValid: password.length >= 8 },
    { label: 'At least 1 uppercase letter', isValid: /[A-Z]/.test(password) },
    { label: 'At least 1 lowercase letter', isValid: /[a-z]/.test(password) },
    { label: 'At least 1 special character', isValid: /[!@#$%^&*]/.test(password) },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    console.log('Password reset with:', password)
    // Handle API call to reset password

    setInterval(()=>{
      route.push("/library")
    },2000)
  }

  return (
    <div className="mt-20 flex items-center justify-center px-4">
      <div className="text-white w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold">Set New Password</h1>
        <p className="text-sm text-gray-400">For additional security, set a password</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white placeholder-gray-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-300"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white placeholder-gray-400"
          />

          <ul className="space-y-1 text-sm text-gray-300">
            {passwordValidations.map((rule, index) => (
              <li key={index} className={rule.isValid ? 'text-green-500' : ''}>
                {rule.isValid ? '✔' : '•'} {rule.label}
              </li>
            ))}
          </ul>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 mt-4 rounded-xl font-medium hover:bg-gray-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPwdModalsThree
