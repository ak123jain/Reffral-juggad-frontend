import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-90"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute left-1/2 transform -translate-x-1/2 pt-4"
        >
          <div className="grid grid-cols-2 gap-4 p-4 bg-[#112240] shadow-lg hover:bg-[#233554] transition">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative bg-[#0a192f] text-white flex justify-center space-x-4 px-8 py-4 rounded-none"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href }) => {
  return (
    <Link
      to={href}
      className="flex flex-col p-2 text-white hover:text-gray-300 focus:text-gray-300 transition bg-[#112240] hover:bg-[#233554] rounded-lg"
    >
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
    </Link>
  );
};

export const HoveredLink = ({ children, to }) => {
  return (
    <Link to={to} className="text-white hover:text-gray-300 transition">
      {children}
    </Link>
  );
};
