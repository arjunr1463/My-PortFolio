import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function More({ closed }) {
  const handleClose = () => {
    closed(false);
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 1000,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className="mt-4  w-full flex flex-col items-start px-[10px] gap-7 py-[20px] font-mont text-white text-[16px] bg-gradient-to-r from-gray-900 via-gray-800 to-black h-full"
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
    >
      <motion.div variants={itemVariants}>
        <Link
          to="/"
          onClick={handleClose}
          className="hover:text-[#eb4a4c] duration-500"
        >
          HOME
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          to="/About"
          onClick={handleClose}
          className="hover:text-[#eb4a4c] duration-500"
        >
          ABOUT
        </Link>
      </motion.div>
      {/*<motion.div variants={itemVariants}>
        <Link
          to="/MyProject"
          onClick={handleClose}
          className="hover:text-[#eb4a4c] duration-500 uppercase"
        >
          My Project
        </Link>
  </motion.div>*/}

      <motion.div variants={itemVariants}>
        <Link
          to="/Contact"
          onClick={handleClose}
          className="hover:text-[#eb4a4c] duration-500"
        >
          CONTACT
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default More;
