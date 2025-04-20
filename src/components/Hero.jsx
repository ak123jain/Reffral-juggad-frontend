import React from "react";
import { Spotlight } from "./Spotlight.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen w-full bg-[#0a192f] text-white px-6 overflow-hidden">
      {/* ✅ Spotlight Effect */}
      <Spotlight />

      {/* ✅ Hero Content */}
      <h1 className="text-5xl md:text-6xl max-w-[1000px] font-bold uppercase z-10">
        Get  <span className="text-green-500" >Referred</span> by Those Who’ve Been There!
      </h1>
      <p className="text-lg mt-4 max-w-xl z-10">
        Why figure it out alone? Learn from 250K+ experts across Tech, Careers, Finance, and more - with insights, mentorship, and referrals.
      </p>

      {/* ✅ Buttons in a Row */}
      <div className="flex flex-row gap-6 mt-6 z-10">
         <Link to='/recuiter' >
         <button className="px-6 py-3 bg-blue-900 text-white font-bold text-lg rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-700 active:scale-95 transition">
          Get JOB Referrals
        </button>
         </Link>
         <Link to='/addmentor' >
         <button className="px-6 py-3 bg-blue-900 text-white font-bold text-lg rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-700 active:scale-95 transition">
          For Experts
        </button>
         </Link>
      </div>
    </section>
  );
};

export default Hero;
