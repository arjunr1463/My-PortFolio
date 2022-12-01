import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function learnmore({ close }) {
  onclose = () => {
    close(false);
  };
  return (
    <div className=" bg-black h-[100vh] w-[100vw] fixed flex items-center justify-center my-5">
      {/*Container*/}

      <div className="bg-[#222222] w-[60vw] h-[75vh] rounded-[0.5rem] mb-20 px-6 pt-4">
      <div className="flex items-center justify-center gap-2">
          <h className="text-white font-extrabold text-[15px] lg:text-[24px]">
            ARJUN
          </h>
          <h className="text-[#eb4a4c] font-extrabold text-[15px] lg:text-[24px]">
            RAMAKRISHNAN
          </h>
        </div>
        <div className="flex item-center justify-center gap-2 mx-10">
          <h2 className="text-[18px] font-semibold text-white/50">Creative</h2>
          <h2 className="text-[18px] font-semibold text-white">Developer</h2>
        </div>
        <div className="flex justify-between  ">
        {/* My name */}
        <div>
        
        {/*Programming skills heading */}

        <div className="flex gap-2 mt-10 -mb-1">
          <h className="text-white font-bold lg:text-[18px]">Programming</h>
          <h className="text-[#eb4a4c] font-bold text-[18px]">Skills</h>
        </div>
        <p className="text-[#eaeded] mb-4">--------------------------------</p>
        
        {/* Programming Skills */}
        <div className="flex justify-between my-2">
        <h className="text-white/50">Python</h>
        <h className="text-white/50">80%</h>
        </div>
        
        
        <div className="flex flex-col">
          
          <div className="bg-white/50 h-[3px] w-80">
          <div className="bg-[#eb4a4c] h-[3px] w-60"></div>
          </div>


          <div className="flex justify-between my-2">
        <h className="text-white/50">HTML & CSS</h>
        <h className="text-white/50">80%</h>
        </div>
  
          <div className="bg-white/50 h-[3px] w-80">
          <div className="bg-[#eb4a4c] h-[3px] w-60"></div>
          </div>


          <div className="flex justify-between my-2">
        <h className="text-white/50">JavaScript</h>
        <h className="text-white/50">60%</h>
        </div>
  
          <div className="bg-white/50 h-[3px] w-80">
          <div className="bg-[#eb4a4c] h-[3px] w-40"></div>
          </div>


          <div className="flex justify-between my-2">
        <h className="text-white/50">React JS</h>
        <h className="text-white/50">60%</h>
        </div>
          <div className="bg-white/50 h-[3px] w-80">
          <div className="bg-[#eb4a4c] h-[3px] w-40"></div>
          </div>
        </div>

        {/*Language heading */}

        <div className="flex gap-2 mt-10 -mb-1">
          <h className="text-white font-bold text-[18px]">Language</h>
          <h className="text-[#eb4a4c] font-bold text-[18px]">Skills</h>
        </div>
        <p className="text-[#eaeded] mb-4">--------------------------------</p>
        {/* Language Skills */}
        <div className="flex justify-between my-2">
        <h className="text-white/50">English</h>
        <h className="text-white/50">80%</h>
        </div>


        <div className="flex flex-col">
          
          <div className="bg-white/50 h-[3px] w-80">
          <div className="bg-[#eb4a4c] h-[3px] w-60"></div>
          </div>

          <div className="flex justify-between my-2">
        <h className="text-white/50">Malayalam</h>
        <h className="text-white/50">100%</h>
        </div>
          
          
          <div className="bg-white/50 h-[3px] w-80">
          <div className="bg-[#eb4a4c] h-[3px] w-80"></div>
          </div>
          
        </div>
        </div>
        <div>
           {/*Education heading */}

         <div className="flex gap-2 mt-[45px] -mb-1">
          <h className="text-white font-bold text-[18px]">Education</h>
          <h className="text-[#eb4a4c] font-bold text-[18px]">Timeline</h>
        </div>
        <p className="text-[#eaeded] mb-4">--------------------------------</p>

        {/*Education Timeline */}
        <div className="flex flex-col gap-8">


        <div>
        <div className="flex gap-10">
        <div className="bg-[#eb4a4c] h-10 flex items-center justify-center w-20 rounded-[1rem]">
          <h className="text-white font-semibold">2018-2022</h>
        </div>
        <div className="flex flex-col">
        <h className="text-white/50">IHRD College of Engineering Kalloppara</h>
        <h className="text-white/50">Computer Science</h>
        <h className="text-white/50"> cgpa - 7.64/10</h>
        </div>
        </div>
        </div>


        <div>
        <div className="flex gap-10">
        <div className="bg-[#eb4a4c] h-10 flex items-center justify-center w-20 rounded-[1rem]">
          <h className="text-white font-semibold">2016-2018</h>
        </div>
        <div className="flex flex-col">
        <h className="text-white/50">GHSS Chorode Vadkara</h>
        <h className="text-white/50">Biology Science</h>
        <h className="text-white/50">Mark-80.25/100</h>
        </div>
        </div>
        </div>
        

        <div>
        <div className="flex gap-10">
        <div className="bg-[#eb4a4c] h-10 flex items-center justify-center w-20 rounded-[1rem]">
          <h className="text-white font-semibold">2015-2016</h>
        </div>
        <div className="flex flex-col">
        <h className="text-white/50">Fr.GKMHS Kaniyaram</h>
        <h className="text-white/50">Mark-94/100</h>
        </div>
        </div>
        </div>


        </div>
        </div>


        


        </div>

        
        



        

        






      </div>

      {/* Button */}
      <div>
        <button
          onClick={onclose}
          className="text-white/80  font-bold text-[35px] mb-[640px] hover:text-white"
        >
          {<AiFillCloseCircle />}
        </button>
      </div>
    </div>
  );
}

export default learnmore;
