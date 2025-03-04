import React from 'react'
import { useState, useEffect } from "react";
import DroneModelB from "../Models/DroneModelB";
import blob from '../../assets/blob2.gif';

function Showcase() {
  
  return (
    <div className='max-w-screen-lg flex flex-col items-center justify-center mb-28 border p-16 rounded-[100px] shadow-2xl shadow-gray-800'>
      <h1 className='text-white font-extrabold text-7xl'>THE OCTOPUS</h1>
     <div className=' translate-x-5 -translate-y-20'>
     <DroneModelB scale={5}/>
     </div>
     <div className='flex flex-col items-center text-white -translate-y-14 '>
      <div className='flex flex-row items-center justify-center gap-10' >
        <button className='bg-[#FF4D00] py-2 pb-3 px-5 rounded-xl font-semibold text-4xl'>Pre-order</button>
        <p className='text-4xl font-bold'>LKR 1,000,000.00</p>
      </div>
      <div className='flex flex-row gap-20 '>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-bold uppercase'>Warranty</h2>
          <p className='text-sm'>5-year manufacturer warranty</p>
        </div>
        <div className='flex flex-col items-center pt-12'>
          <h2 className='text-xl font-bold uppercase'>Customization</h2>
          <p className='text-sm'>Modular components available.</p>
        </div>
        <div className='flex flex-col items-center pt-12'>
          <h2 className='text-xl font-bold uppercase'>Support</h2>
          <p className='text-sm'>24/7 technical assistance.</p>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-bold uppercase'>Safety</h2>
          <p className='text-sm'>Certified aviation compliance.</p>
        </div>
      </div>
      <p className='text-center text- font-semibold opacity-50 px-16 pt-12'>Our range of high-tech drones is designed for diverse applications, from security and agriculture to research and industrial use. Built with advanced materials and powered by AI-driven automation, each model offers unique features, including precision navigation, real-time data analysis, and autonomous flight capabilities. Whether for surveillance, mapping, or delivery, our drones provide reliability and efficiency for various professional needs. </p>
     </div>
             <img src={blob} alt=""  className=' absolute blur-3xl opacity-20 w-full translate-y-28'/>
     
    </div>
  );
}

export default Showcase