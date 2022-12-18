import React from "react";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import {motion } from "framer-motion";

function contact() {
  return (
    <motion.div animate={{ scale: 0.9 }} className="h-[100vh] w-100 flex flex-col justify-center items-center pb-40 ">
      <div className="">
        <div className="flex gap-2 justify-center items-center  ">
        <h className="font-extrabold text-[50px] text-white">Get in</h>
        <h className="font-extrabold text-[50px] text-[#eb4a4c]">Touch</h>
        </div>
        
        <p className="text-[#eaeded]">
          -----------------------------------------------
        </p>
      </div>
      <div className="my-5 flex flex-col gap-8 break-all px-2 w-[350px] sm:w-[400px]  ">
        <div className="h-[45px] flex gap-5 items-center bg-[#222222] text-white rounded-[0.3rem]">
          <h className="text-[#eb4a4c] text-[25px]">{<ImLocation />} </h>
          <h className="text-[20px] lg:text-[25px] font-serif cursor-pointer hover:text-[#eb4a4c] duration-200">Dwaraka,kurikkilad,vadakara</h>
        </div>
        <div className="h-[45px] flex gap-5 items-center bg-[#222222] text-white rounded-[0.3rem]">
          <h className="text-[#eb4a4c] text-[25px]">{<BsTelephoneFill />} </h>
          <h className="text-[22px] lg:text-[25px] font-sans cursor-pointer hover:text-[#eb4a4c] duration-200">+91 9539796304</h>
        </div>
        <div className="h-[45px] flex gap-5 items-center bg-[#222222] text-white rounded-[0.3rem]">
          <h className="text-[#eb4a4c] text-[25px]">{<GrMail />} </h>
          <h className="text-[20px] lg:text-[25px] font-serif cursor-pointer hover:text-[#eb4a4c] duration-200">arjunr1463@gmail.com</h>
        </div>
        <div className="h-[45px] flex gap-5 items-center bg-[#222222] text-white rounded-[0.3rem]">
          <h className="text-[#eb4a4c] text-[25px]">{<BsInstagram />} </h>
          <h className="text-[22px] lg:text-[25px] font-serif cursor-pointer hover:text-[#eb4a4c] duration-200">arjun__a_r_j</h>
        </div>
      </div>
    </motion.div>
  );
}

export default contact;
