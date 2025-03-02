import React from "react";
import img from "../../assets/about.png";
import { FaCheckCircle } from "react-icons/fa";

function About() {
    const products = [
        "First Macintosh computer",
        "iMac",
        "iPod",
        "iPhone",
        "Apple Watch",
      ];
  return (
    <div  className=" max-w-screen-lg mt-28 mb-40">
    <div className=" flex flex-row">
        <img
            src={img}
            alt=""
            className=" opacity-50 w-[400px]"
        />
        <div className="text-white">
       <h1 className="font-bold text-8xl -translate-xd-28 translate-y-20 pl-10"> About Us</h1>
       <div className="pl-10 pt-24">
        <h2 className="text-3xl font-bold">About the Company:</h2>
        <p className="text-sm text-gray-200">Smart Era of Aviation (S.E.A) is a high-tech company inspired by aerospace pioneers like SpaceX. We develop cutting-edge drone technology, starting with our advanced surveillance drones designed for disaster response and security applications. Our mission is to push the boundaries of innovation, ensuring smarter and safer aerial solutions.</p>
       </div>
       <div className="pl-10 pt-10">
       <div className="relative">
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-900"></div>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center space-x-2">
            <FaCheckCircle className="text-white opacity-60 relative z-10" />
            <div className="bg-gray-950 bg-opacity-40 text-white px-4 py-2 rounded-md border border-gray-900">
              {product}
            </div>
          </div>
        ))}
      </div>
    </div>
       </div>
        </div>
        
    </div>
    </div>
  );
}

export default About;