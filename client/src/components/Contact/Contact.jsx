import React from "react";

function Contact() {
  return (
    <div>
      <div className="isolate bg-black px-6 py-24 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Contact Sales
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Get in touch with us for any inquiries or sales-related questions.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-white">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-600 placeholder-gray-400 focus:outline-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-white">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-600 placeholder-gray-400 focus:outline-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold text-white">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-600 placeholder-gray-400 focus:outline-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-600 placeholder-gray-400 focus:outline-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white outline outline-1 outline-gray-600 placeholder-gray-400 focus:outline-2 focus:outline-indigo-500"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
