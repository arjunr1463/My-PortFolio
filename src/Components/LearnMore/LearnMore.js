import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import "./learnmore.css";

function learnmore({ close }) {
  onclose = () => {
    close(false);
  };
  return (
    <div className="flex from-gray-900 z-[999] via-gray-800 inset-0 absolute top-0 w-full px-[10px] items-center justify-center">
      {/*Container*/}

      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-l from-gray-900 via-gray-800 to-black  rounded-[0.5rem]  px-6 pt-4  post mb-[110px]"
      >
        <div className="shadow-md">
          <button
            onClick={onclose}
            className="text-white/80 text-[25px] flex justify-end w-full hover:text-white "
          >
            {<AiFillCloseCircle />}
          </button>

          <div className=" flex items-center justify-center gap-2  ">
            <h className="text-white font-extrabold text-[18px] lg:text-[30px]">
              ARJUN
            </h>
            <h className="text-[#eb4a4c] font-extrabold text-[18px] lg:text-[30px]">
              RAMAKRISHNAN
            </h>
          </div>

          <div className="flex item-center justify-center gap-2 mx-10 ">
            <h2 className="text-[18px]  text-white/50 font-mont">Creative</h2>
            <h2 className="text-[18px] font-mont text-white">Developer</h2>
          </div>
        </div>
        <div className="overflow-x-hidden overflow-y-scroll h-[60vh]">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {/* My name */}
            <div className="">
              {/*Programming skills heading */}

              <div className="flex gap-2 mt-10 -mb-1">
                <h className="text-white font-mont font-bold text-[22px]">
                  My
                </h>
                <h className="text-[#eb4a4c] font-mont font-bold text-[22px]">
                  Skills
                </h>
              </div>
              <p className="text-[#eaeded] mb-4">
                --------------------------------
              </p>

              {/* Programming Skills */}
              <div className="flex flex-col gap-4">
                <div className="flex  items-center justify-between ">
                  <h className="text-white/50 font-mont">Python</h>
                  <h className="text-white/50 font-mont">80%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>

                <div className="flex  items-center justify-between">
                  <h className="text-white/50 font-mont">HTML & CSS</h>
                  <h className="text-white/50 font-mont">80%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>

                <div className="flex  items-center justify-between">
                  <h className="text-white/50 font-mont">JavaScript</h>
                  <h className="text-white/50 font-mont">80%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>

                <div className="flex  items-center justify-between">
                  <h className="text-white/50 font-mont">React JS</h>
                  <h className="text-white/50 font-mont">80%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>
                <div className="flex  items-center justify-between">
                  <h className="text-white/50 font-mont">React JS</h>
                  <h className="text-white/50 font-mont">80%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>
                <div className="flex  items-center justify-between">
                  <h className="text-white/50 font-mont">Node JS</h>
                  <h className="text-white/50 font-mont">75%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>
                <div className="flex  items-center justify-between">
                  <h className="text-white/50 font-mont">MongoDB</h>
                  <h className="text-white/50 font-mont">75%</h>
                </div>
                <div className="relative h-2 w-full bg-white/50 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/*Language heading */}

              <div className="flex gap-2 mt-10 -mb-1">
                <h className="text-white font-mont font-bold text-[22px]">
                  Language
                </h>
                <h className="text-[#eb4a4c] font-mont font-bold text-[22px]">
                  Skills
                </h>
              </div>
              <p className="text-[#eaeded] mb-4">
                --------------------------------
              </p>
              {/* Language Skills */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h className="text-white/50 font-mont">English</h>
                    <h className="text-white/50 font-mont">80%</h>
                  </div>
                  <div className="relative h-2 w-full bg-white/50 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1 }}
                      className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex  items-center justify-between">
                    <h className="text-white/50 font-mont">Malayalam</h>
                    <h className="text-white/50 font-mont">100%</h>
                  </div>
                  <div className="relative h-2 w-full bg-white/50 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1 }}
                      className="absolute top-0 left-0 h-full bg-[#eb4a4c] rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/*Education heading */}

              <div className="flex justify-center gap-2 mt-[45px] font-mont font-bold">
                <h className="text-white  text-[22px]">Education</h>
                <h className="text-[#eb4a4c]  text-[22px]">Timeline</h>
              </div>
              <p className="text-[#eaeded] text-center">
                --------------------------------
              </p>

              {/*Education Timeline */}
              <div className="flex flex-col gap-8 py-[10px] lg:p-8 ">
                <div className="bg-[white] rounded-lg p-4">
                  <div className="flex items-center gap-4 font-mont">
                    <div className="">
                      <h2 className="text-lg font-bold font-mont text-gray-800">
                        IHRD College of Engineering Kalloppara
                      </h2>
                      <div className="flex justify-between">
                        <h3 className="text-base  text-gray-500">
                          Computer Science
                        </h3>
                        <span>2018-2022</span>
                      </div>
                      <h4 className="text-base  text-gray-500">
                        CGPA - 7.64/10
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-4 font-mont">
                    <div className="w-full">
                      <h2 className="text-lg  font-bold font-mont text-gray-800">
                        GHSS Chorode Vadkara
                      </h2>
                      <div className="flex justify-between">
                        <h3 className="text-base  text-gray-500">
                          Biology Science
                        </h3>
                        <span className="">2016-2018</span>
                      </div>
                      <h4 className="text-base   text-gray-500">
                        Mark - 80.25/100
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 font-mont">
                  <div>
                    <h2 className="text-lg font-bold font-mont text-gray-800">
                      Fr.GKMHS Kaniyaram
                    </h2>
                    <div className="flex justify-between">
                      <h3 className="text-base  text-gray-500">
                        Secondary Education
                      </h3>
                      <span>2015-2016</span>
                    </div>
                    <h4 className="text-base  text-gray-500">Mark - 94/100</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Button */}
    </div>
  );
}

export default learnmore;
