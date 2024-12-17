'use client'

import { useState } from 'react'
import { Menu, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-full bg-white bg-opacity-90 shadow-md"
      >
        <Menu size={24} />
      </button>
      
      {isMenuOpen && (
        <div className="absolute top-12 left-0 bg-white bg-opacity-90 p-4 rounded-md shadow-md">
          <ul>
            <li className="py-2"><Link href="/"></Link><a>Home</a></li>
            <li className="py-2"><a href="/about">About</a></li>
            <li className="py-2"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
          className="p-2 rounded-full bg-white bg-opacity-90 shadow-md flex items-center"
        >
          <Globe size={24} />
          <span className="ml-2">{language.toUpperCase()}</span>
        </button>
      </div>
    </nav>
  )
}

