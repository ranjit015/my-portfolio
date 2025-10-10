import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutMe = () => {
  const aboutDiv = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline();
      tl.from("#aboutH", {
        x: -50,
        duration: 0.5,
        stagger: 0.15,
        opacity: 0,
      }).from("#aboutP", {
        x: -80,
        duration: 0.5,
        stagger: 0.15,
        opacity: 0,
      });
    },
    { scope: aboutDiv }
  );

  return (
    <div
      ref={aboutDiv}
      className="w-full h-full flex flex-col justify-center items-center bg-transparent rounded-xl p-4 font-montserrat shadow-[0px_0px_21px_-4px_rgba(0,_0,_0,_0.1)] overflow-hidden"
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
      <div className="mt-4 text-base text-center font-raleway font-medium md:text-base text-lightPrimaryText leading-normal overflow-hidden">
        <div id="aboutP" className="">
          <p className="mt-3">
            I have hands-on experience with Python, SQL, and Power BI. Using
            Python libraries like Pandas, NumPy, Matplotlib, and scikit-learn, I
            can clean datasets, perform analysis, and train simple machine
            learning models. With SQL, I can manage and query large datasets
            effectively, and Power BI helps me design interactive dashboards
            that turn numbers into clear insights. I have worked on several
            small projects that include analyzing sales data, visualizing
            customer trends, and predicting outcomes using machine learning
            algorithms. These projects helped me understand the full data
            workflow — from collection and cleaning to visualization and model
            evaluation.
          </p>
          <p className="mt-3">
            I enjoy the process of turning raw data into meaningful insights and
            believe that data tells powerful stories when presented well. My
            goal is to keep improving my technical and analytical skills while
            gaining practical industry experience. I am eager to work on
            data-driven projects where I can learn from experts, contribute to
            problem-solving, and grow as a data professional. In the future, I
            aim to become a skilled Data Analyst and Machine Learning Engineer
            who can combine analytical thinking and technology to create
            intelligent, impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
