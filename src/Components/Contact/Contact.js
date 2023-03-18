import React from "react";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen font-mont w-full flex flex-col justify-center items-center pb-40 bg-black"
    >
      <motion.div variants={itemVariants} className="text-center text-white">
        <div className="flex gap-2 justify-center items-center">
          <h1 className="font-extrabold text-5xl">Get in</h1>
          <h1 className="font-extrabold text-5xl text-[#eb4a4c]">Touch</h1>
        </div>

        <p className="text-[#eaeded]">
          -----------------------------------------------
        </p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="my-5 flex flex-col gap-8 break-all px-2 w-350 sm:w-400"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-45 flex gap-5 items-center px-[10px] py-[5px] bg-[#222222] text-white rounded-[0.3rem]"
        >
          <h2 className="text-[#eb4a4c] text-3xl">{<ImLocation />}</h2>
          <h2 className="text-xl lg:text-2xl  cursor-pointer hover:text-[#eb4a4c] duration-200">
            Dwaraka, Kurikkilad, Vadakara
          </h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-45 flex gap-5 items-center px-[10px] py-[5px] bg-[#222222] text-white rounded-[0.3rem]"
        >
          <h2 className="text-[#eb4a4c] text-3xl">{<BsTelephoneFill />}</h2>
          <h2 className="text-xl lg:text-2xl  cursor-pointer hover:text-[#eb4a4c] duration-200">
            +91 9539796304
          </h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-45 flex gap-5 items-center bg-[#222222] px-[10px] py-[5px] text-white rounded-[0.3rem]"
        >
          <h2 className="text-[#eb4a4c] text-3xl">{<GrMail />}</h2>
          <h2 className="text-xl lg:text-2xl  cursor-pointer hover:text-[#eb4a4c] duration-200">
            arjunr1463@gmail.com
          </h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-45 flex gap-5 items-center bg-[#222222] px-[10px] py-[5px] text-white rounded-[0.3rem]"
        >
          <h2 className="text-[#eb4a4c] text-3xl">{<BsInstagram />}</h2>
          <h2 className="text-xl lg:text-2xl  cursor-pointer hover:text-[#eb4a4c] duration-200">
            arjun__a_r_j
          </h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default Contact;
