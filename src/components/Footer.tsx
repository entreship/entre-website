import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <svg
        className="relative top-16"
        viewBox="0 0 1920 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1075.58 61.5351C1281.51 24.4398 1405.68 202.968 1612.11 179.102C1818.55 155.237 1920 0 1920 0V399.5L0.00012207 399.5V263.15C0.00012207 263.15 100.442 163.527 258.927 163.527C417.413 163.527 545.056 317.015 694.006 283.162C852.492 247.141 869.653 98.6305 1075.58 61.5351Z"
          fill="white"
        />
      </svg>
    
      <footer className="footer bg-white pt-1 w-full z-30">
        <div className="container mx-auto px-6">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <a href="">
                  <img src="/Assets/logo-dark.png" className="font-bold text-gray-700 w-52 object-contain uppercase mb-4" alt="EntreShip Logo" />
                </a>
                <p className="text-lg font-semibold">Address : <span className="font-medium">Mansarovar, Jaipur</span></p>
                <p className="text-lg font-semibold">Contact No. : <span className="font-medium">0141- 316 8608</span></p>
                <p className="text-lg font-semibold">Email Id : <span className="font-medium">entreshipindia@gmail.com</span></p>
              </div>
              <div className="flex flex-col gap-2 font-normal text-lg">
                <p className="font-semibold">Page Links</p>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact Us</a>
                <a href="/terms.html">Terms and Conditions</a>
              </div>
              <div className="flex flex-col gap-2 font-normal text-lg">
                <p className="font-semibold">Important Links</p>
                <a href="https://forms.gle/LckgYhsF4vhVUPsK7" target="_blank" rel="noopener noreferrer">EntreShip Intern Program</a>
                <a href="https://linkedin.com/company/entreship" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="border-t-2 border-gray-300 flex flex-col items-center">
            <div className="text-center py-2">
              <p className="font-bold">
                Entreship © 2024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer