import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <>
      <svg 
        className="absolute -bottom-20"
        viewBox="0 0 1920 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1076.14 61.5354C1282.18 24.44 1406.41 202.968 1612.95 179.102C1819.5 155.237 1921 0.000244141 1921 0.000244141V319.5L0.000366211 319.5V263.15C0.000366211 263.15 100.494 163.528 259.063 163.528C417.631 163.528 545.341 317.015 694.368 283.162C852.937 247.141 870.106 98.6307 1076.14 61.5354Z" fill="white"/>
      </svg>
      
      <div 
        className="about-section flex flex-col items-center bg-white px-20 h-screen w-full -mb-2 justify-center"
        id="about"
      >
        <div className="flex flex-row w-full">
          <div>
            <p className="gradient-text text-6xl font-bold mb-6">Our Vision</p>
            <p className="text-lg">
              Our vision is the generation of young professionals who have
              acquired <br />
              hands-on skills in technical, business, and entrepreneurial problem
              solving, and <br />
              who are prepared to lead.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full mt-20">
          <div>
            <p className="gradient-text text-6xl font-bold mb-6 text-right">Our Mission</p>
            <p className="text-lg text-right">
              To reshape the way the world looks at internships by changing conventional paradigms <br /> and creating the most valuable internship program in the world.
            </p>
          </div>
        </div>
      </div>
      
      <svg
        viewBox="0 0 1920 364"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M844.856 246.465C638.818 283.56 514.59 105.032 308.047 128.898C101.504 152.763 0 308 0 308L0 0.5L1921 0.5V44.8498C1921 44.8498 1820.51 144.473 1661.94 144.473C1503.37 144.473 1375.66 -9.01489 1226.63 24.8384C1068.06 60.8589 1050.89 209.37 844.856 246.465Z" fill="white"/>
      </svg>
    </>
  )
}

export default AboutSection