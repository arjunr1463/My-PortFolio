import React, { useState } from "react";
import myimg from "../../Assets/myimg/arjun.png";
import LM from "../LearnMore/LearnMore";
import { motion } from "framer-motion";

function About() {
  const [state, setState] = useState(false);

  const trigger = () => {
    setState(!state);
  };

  return (
    <>
      <div className="relative bg-black">
        <div className="w-100 h-[100vh] flex items-center justify-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img
                src={myimg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-70"></div>
            </div>

            <div className="flex flex-col font-mont justify-center items-center gap-4 text-center">
              <h1 className="text-white font-bold text-xl md:text-3xl lg:text-4xl">
                ARJUN RAMAKRISHNAN
              </h1>
              <div className="flex item-center justify-center gap-2">
                <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-white">
                  Creative
                </h2>
                <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-white">
                  Developer
                </h2>
              </div>
              <hr className="w-16 border-b-2 border-red-500" />
              <div className="px-6 pb-2 flex flex-col gap-4 max-w-md">
                <p className="font-medium text-base md:text-lg lg:text-xl text-white">
                  My name is{" "}
                  <span className="text-red-500 font-bold">
                    Arjun Ramakrishnan
                  </span>
                  . I am a Web Developer following MERN, and I'm very passionate
                  to improve my skills. I have done many projects with MERN.
                </p>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-40 lg:h-[60px] flex justify-center items-center bg-red-500"
                >
                  <button
                    onClick={trigger}
                    className="text-white text-lg font-semibold"
                  >
                    Learn more
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        {state && <LM close={setState} />}
      </div>
    </>
  );
}

export default About;
