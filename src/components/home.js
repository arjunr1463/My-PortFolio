import React from "react";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="h-[80vh] w-100 -my-10 mx-20 flex flex-col justify-center items-center gap-4">
      <div className="flex items-center gap-4"><h className="text-white font-extrabold text-[35px] lg:text-[50px]">ARJUN</h><h className="text-[#eb4a4c] font-extrabold text-[35px] lg:text-[50px]">RAMAKRISHNAN</h></div>
      <div className="text-white flex item-center gap-2"><h2 className="text-[25px] font-semibold text-white/50">Creative</h2><h2 className="text-[25px] font-semibold">Developer</h2></div>
      <div className="bg-[#eb4a4c] rounded-[1.5rem] w-[150px] h-10">
      <Link to='/contact' className="text-[18px] text-white font-semibold   "><button className="hover:bg-white duration-500 hover:text-black rounded-[1.5rem] w-[150px] h-10">Get in Touch</button></Link>
      </div>
      
    </div>
  );
}

export default home;
