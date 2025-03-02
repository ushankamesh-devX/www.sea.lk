import React from 'react'
import { useState } from "react";
import { RiListCheck } from "react-icons/ri";



function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div>
        <nav className=" backdrop-blur-md bg-black bg-opacity-50 p-4 fixed top-0 left-0 right-0 z-40">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    S.E.A.
                </div>
                <div className="hidden md:flex space-x-8 text-white">
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">About Us</a>
                    <a href="#" className="hover:text-gray-400">Drones</a>
                    <a href="#" className="hover:text-gray-400">Applications</a>
                </div>
          
                <div className='flex flex-row items-center justify-center gap-2'>
                    <a href="#" className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-red-600">
                        Contact Us
                    </a>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <RiListCheck className='text-4xl pt-1' />
                    </button>
                </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    <a href="#" className="block text-white py-2 hover:text-gray-400">Home</a>
                    <a href="#" className="block text-white py-2 hover:text-gray-400">About Us</a>
                    <a href="#" className="block text-white py-2 hover:text-gray-400">Drones</a>
                    <a href="#" className="block text-white py-2 hover:text-gray-400">Applications</a>
                </div>
            )}
        </nav>
    </div>
  )
}

export default Navbar