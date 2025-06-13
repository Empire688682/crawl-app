"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useGlobalContext } from '../Context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AuthForms = () => {
  const { publicApiUrl } = useGlobalContext();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    rememberMe: false,
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    if (isLogin) {
      // Login logic - ready for backend integration
      const loginData = {
        username: formData.username,
        password: formData.password
      };

      console.log('Login data:', loginData);

      // Example API call:
      try {
        setLoading(true);
        const response = await fetch(`${publicApiUrl}login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData)
        });
        const result = await response.json();
        console.log("result:", result)
        if (response.ok) {
          const now = new Date().getMinutes();
          const threeDays = 1000 * 60 * 60 * 24 * 3;
          const expiredAt = now + threeDays;
          const token = result.token
          const userData = {
            token: token,
            username: result.user.username,
            subscription_status: result.user.subscription_status,
            email: result.user.email,
            first_name: result.user.first_name,
            last_name: result.user.last_name,
            expiredAt: expiredAt
          }
          localStorage.setItem("CrawlUser", JSON.stringify(userData));
          window.location.reload();
          console.log('Login successful:', result);

        } else {
          toast.error(result.error);
        }
      } catch (error) {
        console.log('Login error:', error);
        toast.error("An error occured");
      }
      finally {
        setLoading(false);
      }

    } else {
      // Signup logic - ready for backend integration
      if (formData.password !== formData.confirm_password) {
        alert('Passwords do not match!');
        return;
      }

      if (!formData.agreeToTerms) {
        alert('Please agree to the terms and conditions');
        return;
      }

      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        agreeToTerms: formData.agreeToTerms
      };

      console.log('Signup data:', signupData);

      // Example API call:
      try {
        setLoading(true)
        const response = await fetch(`${publicApiUrl}users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(signupData)
        });
        const result = await response.json();
        if (response.ok) {
          const now = new Date().getMinutes();
          const threeDays = 1000 * 60 * 60 * 24 * 3;
          const expiredAt = now + threeDays;
          const token = result.token
          const userData = {
            token: token,
            username: result.user.username,
            subscription_status: result.user.subscription_status,
            email: result.user.email,
            first_name: result.user.first_name,
            last_name: result.user.last_name,
            expiredAt: expiredAt
          }
          localStorage.setItem("CrawlUser", JSON.stringify(userData));
          window.location.reload();
          console.log('Signup successful:', result);
        } else {
          // Handle signup error
          console.log('Signup failed:', result.message);
        }
      } catch (error) {
        console.log('Signup error:', error);
      }
      finally {
        setLoading(false)
      }
    }
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    // Reset form when switching
    setFormData({
      first_name: "",
      last_name: "",
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      rememberMe: false,
      agreeToTerms: false
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-md">
        <div className="bg-black rounded-lg p-8">
          <h1 className="text-white text-2xl font-semibold text-center mb-8">
            {isLogin ? 'Login to your Account' : 'Sign UP'}
          </h1>

          <div className="space-y-6">
            {/* Firstname Field */}
            {
              !isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white pl-12 pr-4 py-2 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                    required
                  />
                </div>
              )
            }
            {
              !isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                    required
                  />
                </div>
              )
            }
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                required
              />
            </div>

            {/* Email Field (only for signup) */}
            {!isLogin && (
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                  required
                />
              </div>
            )}

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-800 text-white pl-12 pr-12 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Confirm Password Field (only for signup) */}
            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white pl-12 pr-12 py-3 rounded-lg border border-gray-700 focus:border-gray-600 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            )}

            {/* Remember Me (only for login) */}
            {isLogin && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                  Remember me
                </label>
              </div>
            )}

            {/* Terms Agreement (only for signup) */}
            {!isLogin && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 mt-1"
                  required
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-300">
                  By registering, you are agreeing to our{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Terms of use</a> and{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              disabled={loading}
              type="button"
              onClick={handleSubmit}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              {loading ? "Processing...." : isLogin ? 'Login' : 'Register'}
            </button>

            {/* Forgot Password (only for login) */}
            {isLogin && (
              <div className="text-center">
                <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">
                  {isLogin ? 'or continue with' : ''}
                </span>
              </div>
            </div>

            {/* Social Login (only for login) */}
            {isLogin && (
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-white font-bold">G</span>
                </button>
                <button
                  type="button"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </button>
                <button
                  type="button"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-white font-bold">X</span>
                </button>
              </div>
            )}
          </div>

          {/* Toggle Form */}
          <div className="mt-8 text-center">
            <span className="text-gray-400 text-sm">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </span>
            <button
              onClick={toggleForm}
              className="text-white font-semibold hover:text-gray-300 transition-colors"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;