import React from "react";
import DroneModelA from "../Models/DroneModelA";
import { motion } from "framer-motion";

const fadeIn = (direction = "right", duration = 0.4) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});

function Hero() {
  return (
    <div className="relative max-w-screen-lg flex flex-col items-center justify-start min-h-screen">
      {/* Text Content */}
      <div className="text-center -translate-y-8 text-white z-20">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">
          Taking Flight into a Smarter Era
        </h1>
        <p className="text-lg md:text-base mb-8">
          Innovating Drone Technology for Security, Research, and Beyond.
        </p>
        <button className="px-6 py-2 border-2 border-2xl border-gray-400 font-semibold rounded-full text-gray-400 hover:text-white hover:border-white transition">
          Explore Our Drones
        </button>
      </div>

      {/* Drone Model */}
      <div className=" hidden md:block absolute top-22 left-[450px] transform -translate-x-1/2 z-10">
        <DroneModelA scale={25} />
      </div>
      {/* <div className="md:hidden absolute top-22 left-[600px] transform -translate-x-1/2 z-10">
        <DroneModelA scale={20} />
      </div> */}
    </div>
  );
}

export default Hero;
