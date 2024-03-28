import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import AnimatedBackground from "../AnimatedBackground";

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
            <div className="space-y-2 grid justify-items-start">
              <p className="font-bold text-4xl">Hey!</p>
              <p className="text-4xl font-bold text-black/80 dark:text-white">
                I'm Anuj Upadhyay
              </p>
              <TypeAnimation
                
                sequence={[
                  "Front-End Developer",
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
              <a

                href="https://www.linkedin.com/in/anuj-upadhyay-a973b0238/"
                className="box text-black dark:text-white text-2xl flex items-center justify-center flex-row gap-4  hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500 dark:hover:text-sky-500"
              >
                🗺️
                <p className="text-lg">
                  Dehradun, India
                </p>
              </a>
              <a
                
                href="https://www.linkedin.com/in/anuj-upadhyay-a973b0238/"
                className="box text-black dark:text-white text-2xl flex items-center justify-center flex-row gap-4  hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500 dark:hover:text-sky-500"
              >
                ☕
                <p className="text-lg">
                  Fueled by coffee
                </p>
              </a>
              <a
              
                href="https://www.linkedin.com/in/anuj-upadhyay-a973b0238/"
                className="box text-black dark:text-white text-2xl flex items-center justify-center flex-row gap-4  hover:-translate-y-1 transition-transform duration-300 hover:text-sky-500 dark:hover:text-sky-500"
              >
                💻
                <p className="text-lg">
                  Open to work
                </p>
              </a>

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
