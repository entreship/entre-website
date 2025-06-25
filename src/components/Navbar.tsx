import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div
      id="home"
      className="col-span-4 flex flex-row w-full my-4 justify-between items-center navbar"
    >
      <img src="/Assets/logo.png" alt="logo" className="h-8 object-contain" />
      <div className="flex flex-row gap-4 text-white font-semibold text-lg">
        <a href="#home" className="border-b-2 border-white">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar