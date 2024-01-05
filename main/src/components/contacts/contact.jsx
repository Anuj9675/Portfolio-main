import React from "react";

import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 dark:bg-gray-900">
      <div className=" grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
      <div className="sm:order-2 font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              Contact
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl dark:text-white">
              Contact
            </h1>
          </div>

     
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto  flex items-center justify-center sm:flex-col m-4 lg:m-24">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
          </div>
        </div>
        <div className="flex flex-col">
              <h1 className=" dark:text-white font-bold text-2xl text-center mb-3">Let's chat.</h1>
          <form
            method="POST"
            action="https://getform.io/f/a9d0c43f-7d70-4e8d-9312-6bac1fb75353"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name="Email"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Your Name"
              name="Name"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="Message"

            />
            <button
              className="bg-orange-400 hover:bg- w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;