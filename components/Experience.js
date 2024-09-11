import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Experience() {
  return (
    <section className="grid grid-cols-[40%_60%] p-16 bg-black text-white min-h-screen">
      {/* first column */}
      <div className=" flex flex-col  items-start justify-start ">
        <div className="text-6xl mt-12  mb-3 ">Get to Know more about me</div>
        <div className="text-2xl tracking-normal text-zinc-400 mb-8 ">
          E X P E R I E N CE
        </div>
        <a
          href="/Ammar_Shahzad_CV.pdf"
          download={"Ammar-Shahzad-CV"}
          target="_blank"
          className="bg-purple-800 p-4 text-white  flex justify-center items-center text-xl my-10"
        >
          <FaArrowDown className="flex justify-center items-center mx-2 " />{" "}
          <span className="mx-2">DOWNLOAD CV </span>{" "}
        </a>
      </div>
 

      <div className="experience flex flex-col  items-start justify-start  ">
        {/* First Experience  */}
        <div className="experience-1  ">
          <p className="text-purple-800 text-xl font-bold ">
            June 2021 - present
          </p>
          <p className="font-bold text-lg">upwork</p>
          <div className="flex items-center">
            <CiLocationOn style={{ color: "red", margin: "4px" }} /> Remote
          </div>

          <div className="first-experience-explanation">
            <h1>Full Stack developer </h1>
            <h3>june 21 to present . 1 year</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti? Cupiditate mollitia, iusto eius ullam dolorum sit nemo voluptates delect
              us laborum aperiam! Aliquid.</p>
          </div>
        </div>

        {/* Second Experience  */}

        <div className="experience-1  ">
          <p className="text-purple-800 text-xl font-bold ">
            June 2021 - present
          </p>
          <p className="font-bold text-lg">upwork</p>
          <div className="flex items-center">
            <CiLocationOn style={{ color: "red", margin: "4px" }} /> Remote
          </div>

          <div className="second-experience-explanation">
            <h1>Full Stack developer </h1>
            <h3>june 21 to present . 1 year</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti? Cupiditate mollitia, iusto eius ullam dolorum sit nemo voluptates delect
              us laborum aperiam! Aliquid.</p>
          </div>

        </div>

        {/* Third  Experience  */}

        <div className="experience-1 ">
          <p className="text-purple-800 text-xl font-bold ">
            June 2021 - present
          </p>
          <p className="font-bold text-lg">upwork</p>
          <div className="flex items-center">
            <CiLocationOn style={{ color: "red", margin: "4px" }} /> Remote
          </div>

          <div className="second-experience-explanation">
            <h1>Full Stack developer </h1>
            <h3>june 21 to present . 1 year</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti? Cupiditate mollitia, iusto eius ullam dolorum sit nemo voluptates delect
              us laborum aperiam! Aliquid.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

