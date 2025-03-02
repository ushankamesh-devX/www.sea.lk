import React from "react";

function Footer() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3">
            How can we help you? <br />
            Get in touch
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            To ensure that all Wikipedia content is verifiable, anyone may
            question an uncited claim. If your work has been tagged.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <a
              href="#contact"
              className="bg-red-500 text-white text-center rounded-lg shadow px-10 py-3 flex items-center justify-center hover:bg-red-600 transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            <div>
              <svg
                width="84"
                height="25"
                viewBox="0 0 84 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your Logo SVG */}
              </svg>
            </div>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-gray-200 uppercase">
              About
            </a>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-gray-200 uppercase">
              Services
            </a>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-gray-200 uppercase">
              Why Us
            </a>
            <a className="hidden md:block cursor-pointer text-gray-600 hover:text-gray-200 uppercase">
              Contact
            </a>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg width="6" height="12" viewBox="0 0 6 12" fill="white">
                  {/* Facebook Icon */}
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="white">
                  {/* Instagram Icon */}
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw" target="_blank" rel="noopener noreferrer">
                <svg width="13" height="9" viewBox="0 0 13 9" fill="white">
                  {/* YouTube Icon */}
                </svg>
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2025 Besnik Creative
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
