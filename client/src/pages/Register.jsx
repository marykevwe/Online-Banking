import React from 'react'

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Create a New Account</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />
          <button className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-800">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
