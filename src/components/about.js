import React, { useState } from "react";
import myimg from "../assets/myimg/arjun.png";
import LM from "./learnmore";

function About() {
  const [state, setState] = useState(false);

  const trigger = () => {
    setState(!state);
  };

  return (
    <div>
      {/*----------------------------*/}



      <div className="">{state && <LM close={setState} />}</div>



      {/*----------Main------------------*/}



      <div className="h-[80vh] w-100 -my-5 flex items-center justify-center">




        {/*----------------------------*/}
        <div className="grid grod-cols-1 lg:grid-cols-2">




        <div className="bg-[#222222] w-[18vw] h-[40vh] rounded-[0.5rem] -ml-10">
          <img src={myimg} alt="" className="h-[20vh] lg:h-[40vh] mt-1.5" />
        </div>




        <div className=" flex flex-col justify-center items-center gap-4 h-[40vh] rounded-[0.5rem] -mx-40">
          <div className="flex items-center gap-2">
            <h className="text-white font-extrabold text-[15px] lg:text-[25px]">
              ARJUN
            </h>
            <h className="text-[#eb4a4c] font-extrabold text-[15px] lg:text-[25px]">
              RAMAKRISHNAN
            </h>
          </div>
          <div className="flex item-center gap-2">
            <h2 className="text-[15px] font-semibold text-white/50">
              Creative
            </h2>
            <h2 className="text-[15px] font-semibold text-white">Developer</h2>
          </div>
          <p className="text-[#eaeded]">
            -----------------------------------------------------------
          </p>
          <div className="w-[600px] h-40 ml-10 px-20 flex flex-col gap-4 mb-3">
            <p className="font-medium text-[18px] text-white/50">
              My name is <span className="text-white">Arjun Ramakrishnan.</span>{" "}
              I am a Web Developer following MERN, and I'm very passionate to
              improve my skills.I have done many projects with MERN.
            </p>

            <div className="bg-[#eb4a4c] rounded-[1.5rem] w-[150px] flex justify-center h-10 ">
              <button
                onClick={trigger}
                className="text-white text-[18px] font-semibold rounded-[1.5rem] w-[150px] hover:bg-white duration-500 hover:text-black"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>


        </div>

        
        
      </div>
    </div>
  );
}

export default About;
