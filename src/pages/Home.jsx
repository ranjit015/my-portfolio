import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsPart from "../components/DetailsPart";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("aboutMe");
  const navigate = useNavigate();
  
  return (
    <div className="w-full min-h-screen bg-lightBg flex flex-col items-center p-5 md:p-8">
      {/* First Part */}
      <div className="w-full flex justify-center">
        <DetailsPart />
      </div>

      {/* Selected Section */}
      <div
        id="selectedSection"
        className="bg-[#eeeeee] p-2 mt-8 rounded-xl space-x-2 font-montserrat font-semibold shadow-md"
      >
        <button
          onClick={() => setSelectedSection("aboutMe")}
          className={`text-sm ${
            selectedSection === "aboutMe"
              ? "text-[#ffffff] bg-lightBtnBg shadow-md"
              : ""
          }  rounded-xl px-3 py-2 duration-300 ease-linear`}
        >
          About Me
        </button>

        <button
          onClick={() => setSelectedSection("skills")}
          className={`text-sm ${
            selectedSection === "skills"
              ? "text-[#ffffff]  bg-lightBtnBg shadow-md"
              : ""
          }  rounded-xl px-3 py-2 duration-300 ease-linear`}
        >
          Skills
        </button>

        <button
          onClick={() => {
            navigate("/project");
          }}
          className={`text-sm ${
            selectedSection === "projects"
              ? "text-[#ffffff]  bg-lightBtnBg shadow-md"
              : ""
          }  rounded-xl px-3 py-2 duration-300 ease-linear`}
        >
          Projects
        </button>
      </div>

      {/* Second Part */}
      <div className="w-full md:w-[40vw] mt-4">
        {selectedSection === "aboutMe" && <AboutMe />}

        {selectedSection === "skills" && <Skills />}
      </div>
    </div>
  );
};

export default Home;
