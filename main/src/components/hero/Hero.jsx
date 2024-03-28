import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import AnimatedBackground from "../AnimatedBackground";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="dark:bg-zinc-900 dark:text-white">
      <AnimatedBackground/>
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          
          <div>
          
            <img
              src="/assets/pic.jpeg"
              className="h-[320px] w-[320px] mx-auto backdrop-blur-sm rounded-full"
              alt="person"
            />
          </div>
          <div >
            <div className="space-y-2 grid justify-items-start backdrop-blur-sm">
              <p className="font-bold text-4xl">Hey!</p>
              <p className="text-4xl font-bold text-black/80 dark:text-white ">
                I'm Anuj Upadhyay
              </p>
              <TypeAnimation
                
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "",
                ]}
                speed={30}
                wrapper="h2"
                repeat={Infinity}
                className="text-sky-500 text-4xl font-bold "
              />
              <Link

                to="https://www.google.com/maps/place/Dehradun,+Uttarakhand/@30.3253251,77.8523242,11z/data=!3m1!4b1!4m6!3m5!1s0x390929c356c888af:0x4c3562c032518799!8m2!3d30.3164945!4d78.0321918!16zL20vMDRiejJm?entry=ttu"
                className="box text-black dark:text-white text-2xl flex items-center justify-center flex-row gap-4  hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500 dark:hover:text-sky-500"
              >
                🗺️
                <p className="text-lg">
                  Dehradun, India
                </p>
              </Link>
              <Link
                
                to=""
                className="box text-black dark:text-white text-2xl flex items-center justify-center flex-row gap-4  hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500 dark:hover:text-sky-500"
              >
                ☕
                <p className="text-lg">
                  Fueled by coffee
                </p>
              </Link>
              <Link
              
                to="/contact"
                className="box text-black dark:text-white text-2xl flex items-center justify-center flex-row gap-4  hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500 dark:hover:text-sky-500"
              >
                💻
                <p className="text-lg">
                  Open to work
                </p>
              </Link>

            </div>
            <div className="py-6">
              <div className=" flex items-start justify-start gap-8">
                <a
                  

                  href="https://github.com/Anuj9675"
                  className="box font-medium text-black dark:text-white flex items-center justify-center flex-col"
                >
                  <BsGithub className=" text-black dark:text-white text-3xl hover:scale-125 cursor-pointer" />

                </a>
                <a
                  

                  href="https://www.linkedin.com/in/anuj-upadhyay-a973b0238/"
                  className="box font-medium text-black dark:text-white  flex items-center justify-center flex-col"
                >
                  <FaLinkedinIn className=" text-black  dark:text-white text-3xl hover:scale-125 cursor-pointer" />

                </a>
                <a
                 

                  href="mailto: anujupadhyay6265@gmail.com"
                  className="box font-medium text-black dark:text-white flex items-center justify-center flex-col"
                >
                  <SiGmail className=" text-black dark:text-white text-3xl hover:scale-125 cursor-pointer" />

                </a>
              </div>
            </div>
          </div>

        </div>
        
      </section>
    </>
  );
};

export default Hero;
