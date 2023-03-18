import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import More from "./Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo/logo.png";
import { motion } from "framer-motion";

function Nav() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const trigger = () => {
    setState(!state);
  };

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    //{ name: "My Project", path: "/MyProject" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 md:py-8 bg-black w-full font-mont"
    >
      <div className="container mx-auto  flex items-center justify-between px-[10px] md:px-0 lg:justify-around">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[65px]"
            onClick={() => navigate("/")}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden font-mont lg:flex gap-8 text-white text-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-gray-400 duration-300 ${
                location.pathname === item.path ? "text-gray-400" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-white/90 text-4xl lg:hidden"
        >
          <button onClick={trigger}>
            <RiMenu3Fill />
          </button>
        </motion.div>
      </div>
      {state && <More closed={setState} />}
    </motion.div>
  );
}

export default Nav;
