import React from 'react'

const ServicesSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-10 pt-20" id="services">
      <div className="text-6xl text-white text-grad font-bold h-24">
        <p>Why EntreShip?</p>
      </div>

      <div className="flex flex-row w-full my-10 justify-center items-center px-10">
        <div>
          <img src="/Assets/agile.png" alt="agile framework" />
        </div>
        <div className="text-white flex flex-col w-full ml-20 text-right">
          <p className="text-4xl text-white text-grad font-bold my-2">Practice AGILE Framework</p>
          <div className="flex flex-row my-2 font-semibold self-end mb-10">
            <p className="ring-2 ring-white rounded-full mr-4 p-2">#GroupTask</p>
            <p className="ring-2 ring-white rounded-full mr-4 p-2">#TeamWork</p>
            <p className="ring-2 ring-white rounded-full mr-4 p-2">#Agile</p>
          </div>
          <p>
            We at EntreShip believe in creating a foundation of real-world, client-based work, where interns learn first-hand challenges and work with agile methodology right from the start of internship. 
            <br /><br />
            All while teaming with batchmates and mentors to deliver real value to our clients. We place every EntreShip Intern in an environment that supports healthy growth and practical learning.
          </p>
        </div>
      </div>
    
      <svg
        viewBox="0 0 1920 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1075.58 61.5351C1281.51 24.4398 1405.68 202.968 1612.11 179.102C1818.55 155.237 1920 0 1920 0V399.5L0.00012207 399.5V263.15C0.00012207 263.15 100.442 163.527 258.927 163.527C417.413 163.527 545.056 317.015 694.006 283.162C852.492 247.141 869.653 98.6305 1075.58 61.5351Z"
          fill="white"
        />
      </svg>

      <div className="flex flex-row w-full my-10 justify-center items-center bg-white px-10 -mt-10">
        <div className="text-black flex flex-col w-full p-2 mr-20">
          <p className="text-4xl text-white gradient-text font-bold my-2">Get recognised by your work</p>
          <div className="flex flex-row my-2 font-semibold mb-10">
            <p className="ring-2 ring-black rounded-full mr-4 p-2">#Creditability</p>
            <p className="ring-2 ring-black rounded-full mr-4 p-2">#SkillsFirst</p>
            <p className="ring-2 ring-black rounded-full mr-4 p-2">#Recognition</p>
          </div>
          <p>
            We believe in integrating interns with our team and giving them opportunities to learn about the business and technology. 
            <br /><br /> 
            At Entreship, we focus on your skills and development rather than degrees and certificates and we also give due credits for intern's work in any project, ensuring an internship that's just as challenging and rewarding as your full-time job. 
            <br /><br /> 
            Thereby creating your own online project portfolio by working on different projects.
          </p>
        </div>
        <div>
          <img src="/Assets/skill.png" alt="skills recognition" />
        </div>
      </div>

      <svg
        className="-mt-10"
        viewBox="0 0 1920 364"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M844.416 302.465C638.486 339.56 514.322 161.032 307.887 184.898C101.451 208.763 0 364 0 364L0 0L1920 0V100.85C1920 100.85 1819.56 200.473 1661.07 200.473C1502.59 200.473 1374.94 46.9851 1225.99 80.8384C1067.51 116.859 1050.35 265.37 844.416 302.465Z"
          fill="white"
        />
      </svg>

      <div className="flex flex-row w-full my-10 justify-center items-center px-10">
        <div>
          <img src="/Assets/mentor.png" alt="mentorship" />
        </div>
        <div className="flex flex-col w-full p-2 ml-20 text-white text-right">
          <p className="text-4xl text-white text-grad font-bold my-2">Never work alone</p>
          <div className="flex flex-row my-2 font-semibold mb-10 self-end">
            <p className="ring-2 ring-white rounded-full mr-4 p-2">#LiveHelp</p>
            <p className="ring-2 ring-white rounded-full mr-4 p-2">#Mentorship</p>
            <p className="ring-2 ring-white rounded-full mr-4 p-2">#DoubtSolving</p>
          </p>
          <p>
            A program that provides: - 24/7 guidance through live sessions, phone calls and doubts channel. 
            <br /><br /> 
            We have in-house experts from multiple domains for every question that comes to a mind. - A customized time plan for each intern. Interns are assisted through a 1 to 1 mentorship program ensuring no blockage in the development cycle.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection