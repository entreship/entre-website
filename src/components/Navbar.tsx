import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact Us', href: '#contact' }
  ]

  return (
    <div
      id="home"
      className="col-span-4 flex flex-row w-full my-4 justify-between items-center navbar"
    >
      <img src="/Assets/logo.png" alt="logo" className="h-8 object-contain" />
      <div className="flex flex-row gap-4 text-white font-semibold text-lg relative">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`relative px-2 py-1 transition-all duration-300 hover:text-gray-200 ${
              activeSection === item.id ? 'text-white' : 'text-gray-300'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform transition-all duration-300 ease-out"></div>
            )}
          </a>
        ))}
        
        {/* Animated underline background */}
        <div 
          className="absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 ease-out"
          style={{
            width: `${navItems.find(item => item.id === activeSection)?.label.length || 0}ch`,
            left: `${navItems.slice(0, navItems.findIndex(item => item.id === activeSection)).reduce((acc, item) => acc + item.label.length + 4, 0)}ch`,
            transform: 'translateX(0.5rem)'
          }}
        />
      </div>
    </div>
  )
}

export default Navbar