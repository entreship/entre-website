import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      // Check if page is scrolled for sticky background
      setIsScrolled(window.scrollY > 50)

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div
        id="home"
        className="flex flex-row w-full py-4 px-10 justify-between items-center navbar"
      >
        <img src="/Assets/logo.png" alt="logo" className="h-8 object-contain" />
        <div className="flex flex-row gap-6 text-white font-semibold text-lg relative">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-3 py-2 transition-all duration-300 hover:text-gray-200 rounded-lg hover:bg-white/10 ${
                activeSection === item.id ? 'text-white' : 'text-gray-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-all duration-300 ease-out rounded-full"></div>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar