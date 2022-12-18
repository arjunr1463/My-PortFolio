import React from "react";
import { Link } from "react-router-dom";
import {motion } from "framer-motion";

function home() {
 
  return (
    
    <motion.div animate={{ scale: 0.9 }} className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-4 break-all pb-40">
      <div className="flex items-center gap-4 ">
        <h className="text-white font-extrabold text-[21px] sm:text-[25px] md:text-[35px] lg:text-[50px]">
          ARJUN
        </h>
        <h className="text-[#eb4a4c] font-extrabold text-[21px] sm:text-[25px] md:text-[35px] lg:text-[50px]">
          RAMAKRISHNAN
        </h>
      </div>
      <div className="text-white flex item-center gap-2 ">
        <h2 className="text-[18px] sm:text-[22px] md:text-[25px] lg:text-[28px] font-semibold text-white/50">
          Creative
        </h2>
        <h2 className="text-[18px] sm:text-[22px] md:text-[25px]  lg:text-[28px] font-semibold">
          Developer
        </h2>
      </div>
      <div className="bg-[#eb4a4c] rounded-[1.5rem] w-[150px] h-10">
        <Link to="/contact" className="text-[18px] text-white font-semibold   ">
          <button className="hover:bg-white duration-500 hover:text-black rounded-[1.5rem] w-[150px] h-10">
            Get in Touch
          </button>
        </Link>
      </div>
    </motion.div>
   
  );
}

export default home;
