import React from 'react'
import { useState, useEffect } from "react";
import DroneModelB from "../Models/DroneModelB";


function Showcase() {
  
  return (
    <div className='max-w-screen-lg flex flex-col items-center justify-center mb-28'>
      <h1 className='text-white font-extrabold text-7xl'>THE OCTOPUS</h1>
     <div className=' -translate-x-20 -translate-y-20'>
     <DroneModelB scale={5}/>
     </div>
     <div className='flex flex-col items-center text-white -translate-y-14'>
      <div className='flex flex-row items-center justify-center gap-10' >
        <button className='bg-[#FF4D00] py-2 pb-3 px-5 rounded-xl font-semibold text-4xl'>Pre-order</button>
        <p className='text-4xl font-bold'>LKR 1,000,000.00</p>
      </div>
      <div className='flex flex-row gap-20 '>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-bold uppercase'>Warranty</h2>
          <p className='text-sm'>2-year manufacturer warranty</p>
        </div>
        <div className='flex flex-col items-center pt-12'>
          <h2 className='text-xl font-bold uppercase'>Warranty</h2>
          <p className='text-sm'>2-year manufacturer warranty</p>
        </div>
        <div className='flex flex-col items-center pt-12'>
          <h2 className='text-xl font-bold uppercase'>Warranty</h2>
          <p className='text-sm'>2-year manufacturer warranty</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-bold uppercase'>Warranty</h2>
          <p className='text-sm'>2-year manufacturer warranty</p>
        </div>
      </div>
      <p className='text-center text- font-semibold opacity-50 px-16 pt-12'>Drone MOur range of high-tech drones is designed for diverse applications, from security and agriculture to research and industrial use. Built with advanced materials and powered by AI-driven automation, each model offers unique features </p>
     </div>
    </div>
  );
}

export default Showcase