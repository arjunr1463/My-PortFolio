import React, { useState} from "react";
import { ImMenu } from "react-icons/im";
import More from "./more";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { motion } from "framer-motion";

function Nav() {
  const [state, setState] = useState(false);
  const trigger = () => {
    setState(!state);
  };

  
  return (
    <motion.div animate={{ scale:0.9 }} className="">
      <div className="h-20 w-full flex items-center justify-between">
        <div className="px-4">
          <img src={logo} alt="" className="w-[70px] h-[60px]" />
        </div>
        <div className="hidden font-semibold text-white px-20 gap-10 text-[23px] lg:flex md:flex sm:flex xl:flex">
          <Link to="/" className="hover:text-[#eb4a4c] duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#eb4a4c] duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#eb4a4c] duration-300">
            Contact
          </Link>
        </div>
        <div className="text-white/50 text-[35px] px-5 sm:hidden md:hidden lg:hidden xl:hidden">
          <button onClick={trigger}>
            <ImMenu />
          </button>
        </div>
      </div>
      <div className="">{state && <More closed={setState} />}</div>
    </motion.div>
  );
}

export default Nav;
