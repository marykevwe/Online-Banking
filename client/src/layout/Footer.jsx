import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} Capital One. All rights reserved.</p>
    </footer>
  )
}
