import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function more({closed}) {
  const onclosed=()=>{
    closed(false)

  }
  return (
    <motion.div
    animate={{x:[100,0]}}
      className="flex flex-col items-center gap-7 font-bold text-white text-[20px] bg-white/10 rounded-[1rem] h-[150px]"
    >
      <Link to="/" onClick={onclosed} className="hover:text-[#eb4a4c] duration-500 ">
        HOME
      </Link>

      <Link to="/about" onClick={onclosed} className="hover:text-[#eb4a4c] duration-500 ">
        ABOUT
      </Link>

      <Link to="/contact" onClick={onclosed} className="hover:text-[#eb4a4c] duration-500 ">
        CONTACT
      </Link>
    </motion.div>
  );
}

export default more;
