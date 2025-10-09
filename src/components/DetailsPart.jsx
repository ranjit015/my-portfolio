import React, { useRef } from "react";
import { Link } from "react-router-dom";
import profileImage2 from "../assets/IMG_1798.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const DetailsPart = () => {
  const personal = useRef(null);

  const handleDownloadCV = () => {
    const cvPath =
    "https://drive.google.com/file/d/1-zXgCvjO8J9zV2vN15p4zUfNQZ-LnZq/view?usp=sharing";
    window.open(cvPath, "_blank");
  };

  const handleContactMe = () => {
    const email = "ranjitsamal004@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <div ref={personal} className="w-full md:w-1/3 flex flex-col">
      {/* Profile Photo */}
      <div className="flex justify-center mt-5">
        <div
          id="profileImg"
          className="w-[130px] h-[130px] bg-neutral-400 rounded-full hover:scale-110 transition-all duration-300 shadow-lightBtnBg/30 overflow-hidden flex items-center justify-center border-2 border-[#ababab]"
        >
          <img loading="lazy" src={profileImage2} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Personal Details */}
      <div className="flex flex-col items-center mt-5 font-montserrat">
        <h1
          id="personalDetails"
          className="text-2xl font-bold text-lightPrimaryText"
        >
          Ranjit Kumar Samal
        </h1>

        <h2
          id="personalDetails"
          className="text-base font-medium text-lightSecondaryText font-raleway"
        >
          Data Analyst & ML Explorer
        </h2>
      </div>

      {/* Social Logos */}
      <div className="flex justify-center gap-3 mt-5">
        <Link
          id="logoSocial"
          to={"https://github.com/ranjit015"}
          aria-label="Visit my GitHub profile"
          className="group bg-lightBtnBg text-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-md shadow-lightBtnBg/30 ring-1 ring-black/5 hover:ring-black/10 hover:shadow-lg transition-transform duration-200 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lightBtnBg"
        >
          <FaGithub fontSize={21} className="transition-transform duration-200 group-hover:scale-110" />
        </Link>
        <Link
          id="logoSocial"
          to={"https://linkedin.com/in/ranjit015"}
          aria-label="Visit my LinkedIn profile"
          className="group bg-lightBtnBg text-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-md shadow-lightBtnBg/30 ring-1 ring-black/5 hover:ring-black/10 hover:shadow-lg transition-transform duration-200 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lightBtnBg"
        >
          <FaLinkedin fontSize={20} className="transition-transform duration-200 group-hover:scale-110" />
        </Link>

        <button
          id="logoSocial"
          onClick={handleDownloadCV}
          title="Download my CV"
          aria-label="Download my CV"
          className="group bg-lightBtnBg text-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-md shadow-lightBtnBg/30 ring-1 ring-black/5 hover:ring-black/10 hover:shadow-lg transition-transform duration-200 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lightBtnBg"
        >
          <span className="font-montserrat font-semibold tracking-wide transition-transform duration-200 group-hover:scale-110">CV</span>
        </button>
        <button
          id="logoSocial"
          onClick={handleContactMe}
          title="Send me an email"
          aria-label="Send me an email"
          className="group bg-lightBtnBg text-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full shadow-md shadow-lightBtnBg/30 ring-1 ring-black/5 hover:ring-black/10 hover:shadow-lg transition-transform duration-200 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lightBtnBg"
        >
          <FaEnvelope fontSize={20} className="transition-transform duration-200 group-hover:scale-110" />
        </button>
      </div>
    </div>
  );
};

export default DetailsPart;
