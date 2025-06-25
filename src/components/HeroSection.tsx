import React from 'react'
import Navbar from './Navbar'

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section flex flex-col items-center h-screen w-full justify-between px-10 pt-6">
      <Navbar />
      
      <div className="flex flex-row w-full h-full items-center justify-between mb-44 mt-16">
        <div className="flex flex-col">
          <p className="text-6xl text-white font-medium leading-none my-3 text-grad h-32">
            Work <span className="font-black">together</span> <br />
            L<span className="font-black">earn</span> together
          </p>
          <p className="text-white my-4">
            Internship for students to develop their technical and soft
            skills.<br />
            Help them find their first job. Get to know them better.
          </p>
          <div className="flex flex-row items-center text-white py-4">
            <a href="https://forms.gle/LckgYhsF4vhVUPsK7" target="_blank" rel="noopener noreferrer">
              <button className="flex flex-row items-center cursor-pointer rounded-full p-2 px-4 mr-4 gradient-button">
                <p className="cursor-pointer">Get Started</p>
              </button>
            </a>
            <a href="#services" className="border-4 rounded-full p-2 px-4 mr-4">
              Explore More
            </a>
          </div>  
        </div>
        
        <div className="flex flex-col items-end px-24">
          <img src="/Assets/among.png" className="w-4/6" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection