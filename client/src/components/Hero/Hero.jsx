import React from "react";
import DroneModelA from "../Models/DroneModelA";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen">
      {/* Text Content */}
      <div className="text-center text-white z-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Taking Flight into a Smarter Era
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Innovating Drone Technology for Security, Research, and Beyond.
        </p>
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-400 hover:text-white hover:border-white transition">
          Explore Our Drones
        </button>
      </div>

      {/* Drone Model */}
      <div className=" hidden md:block absolute top-22 left-[400px] transform -translate-x-1/2 z-10">
        <DroneModelA scale={25} />
      </div>
      <div className="md:hidden absolute top-22 left-[400px] transform -translate-x-1/2 z-10">
        <DroneModelA scale={20} />
      </div>
    </div>
  );
}

export default Hero;
