import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 8,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 8,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-screen font-mont w-full flex flex-col justify-center bg-[black] items-center gap-4 pb-40 "
    >
      <div className="flex items-center gap-4 ">
        <motion.h1
          variants={textVariants}
          className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
        >
          ARJUN
        </motion.h1>
        <motion.h1
          variants={textVariants}
          className="text-red-500 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
        >
          RAMAKRISHNAN
        </motion.h1>
      </div>
      <motion.div
        variants={textVariants}
        className="text-white flex item-center gap-2 "
      >
        <motion.h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/50">
          Creative
        </motion.h2>
        <motion.h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Developer
        </motion.h2>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        className=" "
      >
        <Link to="/contact">
          <button className="text-white rounded-full w-40 h-12 flex items-center justify-center bg-red-500 font-semibold text-lg hover:bg-white duration-500 hover:text-black">
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Home;
