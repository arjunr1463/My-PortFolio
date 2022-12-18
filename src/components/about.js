import React, { useState } from "react";
import myimg from "../assets/myimg/arjun.png";
import LM from "./learnmore";
import {motion } from "framer-motion";

function About() {
  const [state, setState] = useState(false);

  const trigger = ()=>{
    setState(!state)
  }

  return (
    <div  className="">
      {/*----------------------------*/}

      <div className="">{state && <LM close={setState} />}</div>

      {/*----------Main------------------*/}

      <div  className="w-100 h-[100vh] flex items-center justify-center">
        {/*----------------------------*/}
        <motion.div animate={{x:[100,0]}} className="flex flex-col justify-center items-center mb-[100px] px-3 gap-10 sm:flex-row md:flex-row lg:flex-row ">
          <div className="bg-[#222222] h-[200px] w-[220px]  lg:h-[280px] lg:w-[260px] rounded-[0.5rem] ">
            <img src={myimg} alt="" className="h-[204px] w-[220px] lg:h-[285px] lg:w-[250px] " />
          </div>

          <div className=" flex flex-col justify-center items-center gap-4  ">
            <div className="flex items-center justify-center gap-2  w-full">
              <h className="text-white font-extrabold text-[15px] lg:text-[25px]">
                ARJUN
              </h>
              <h className="text-[#eb4a4c] font-extrabold text-[15px] lg:text-[25px]">
                RAMAKRISHNAN
              </h>
            </div>
            <div className="flex item-center justify-center w-full gap-2">
              <h2 className="text-[15px] font-semibold text-white/50">
                Creative
              </h2>
              <h2 className="text-[15px] font-semibold text-white">
                Developer
              </h2>
            </div>
            <p className="text-[#eaeded] ">
              ------------------------------------------------------
            </p>
            <div className="px-20 pb-2 flex flex-col gap-4 w-[350px] lg:w-[600px] ">
              <p className="font-medium text-[15px] lg:text-[18px] text-white/50">
                My name is{" "}
                <span className="text-white">Arjun Ramakrishnan.</span> I am a
                Web Developer following MERN, and I'm very passionate to improve
                my skills.I have done many projects with MERN.
              </p>

              <motion.div animate={{y:[100,0]}} className="bg-[#eb4a4c] rounded-[1.5rem] w-[90px] h-[30px] flex justify-center items-center ">
                <button
                  onClick={trigger}
                  className="text-white text-[15px] font-semibold rounded-[1.5rem] w-[90px] h-[30px] hover:bg-white hover:text-black"
                >
                  Learn more
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
