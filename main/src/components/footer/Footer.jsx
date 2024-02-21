import React from "react";
import {BsLinkedin} from "react-icons/bs"; 
import {BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

const Footer = () => {
  return (
    <div id="works" className=" bg-yellow-400  dark:bg-black dark:text-white  mx-auto m-auto h-[300px] sm:h-[250px]">
      <div className=" h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-6 sm:gap-4">

          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://github.com/Anuj9675"
            className="box font-medium text-black dark:text-white flex items-center justify-center flex-col"
          >
            <BsGithub className=" text-black dark:text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Github</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://www.linkedin.com/in/anuj-upadhyay-a973b0238/"
            className="box font-medium text-black dark:text-white  flex items-center justify-center flex-col"
          >
            <BsLinkedin className=" text-black  dark:text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="mailto: anujupadhyay6265@gmail.com"
            className="box font-medium text-black dark:text-white flex items-center justify-center flex-col"
          >
            <SiGmail className=" text-black dark:text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Mail</p>
          </a>
        </div>
        <div className="sm:text-[12px] font-bold">
          | Copyright &copy; <span>2023 Anuj Upadhyay </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;