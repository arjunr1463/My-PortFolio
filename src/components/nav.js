import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

function nav() {
  return (
      <div className="h-20 w-[100vw] flex items-center justify-between">
        <div className="px-5 mx-3 mb-3 lg:px-80 pt-5">
            <img src={logo} alt="" className="w-20"/>
        </div>
        <div className="font-semibold text-white flex gap-5 lg:gap-10 px-20 text-[20px] ">
          <Link to="/" className="hover:text-[#eb4a4c] duration-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#eb4a4c] duration-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#eb4a4c] duration-500">
            Contact
          </Link>
        </div>
      </div>
  );
}

export default nav;
