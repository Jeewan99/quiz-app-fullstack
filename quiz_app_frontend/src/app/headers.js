import React from 'react'

const Header = () => {
  return (
    <> <nav className="w-full h-12 bg-blue-700 text-amber-50 font-bold flex items-center px-4 gap-6">
      <p href="/" className="hover:text-amber-200 transition-colors">
        Home
      </p>
      <p href="/about" className="hover:text-amber-200 transition-colors">
        About
      </p>
    </nav></>
 
  )
}

export default Header
