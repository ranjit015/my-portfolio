import React, { useRef } from 'react'

const AboutMe = () => {
  const aboutDiv = useRef();

  return (
    <div
    ref={aboutDiv}
    className="w-full h-full bg-[#d7d7d7] rounded-xl p-4 font-montserrat shadow-md lg:hover:scale-105 duration-300 ease-in-out overflow-hidden"
  >
    {/* Heading */}
    <h2
      id="aboutH"
      className="text-lightPrimaryText font-bold text-xl tracking-wide"
    >
      About Me
    </h2>

    {/* Horizontal Line */}
    <div className="mt-1 w-16 h-1 bg-[#797979] rounded-full"></div>

    {/* Description */}
    <div className="mt-4 text-base font-raleway font-medium md:text-base text-lightPrimaryText leading-normal overflow-hidden">
      <div id="aboutP" className="">
        <p className="">
          I am a Cyber Security and Data Analyst with a passion for using technology to solve real-world problems. I am a quick learner and I am always looking for new challenges.
        </p>
        <p className="mt-3">
          I am a Cyber Security and Data Analyst with a passion for using technology to solve real-world problems. I am a quick learner and I am always looking for new challenges.
        </p>
        <p className="mt-3">
          I am a quick learner and I am always looking for new challenges.
        </p>
      </div>
    </div>
  </div>
  )
}

export default AboutMe
