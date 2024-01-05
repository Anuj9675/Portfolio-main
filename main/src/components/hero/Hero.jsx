import React from "react";
import { TypeAnimation } from "react-type-animation";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div >
            <div className="space-y-2 grid md:justify-items-start">
              <p className="font-bold text-2xl">Hey!</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Anuj Upadhyay
              </p>
              <TypeAnimation
              data-aos="fade-up"
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
              className="text-yellow-400 text-4xl font-bold sm:text-3xl"
            />
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left text-xl">
              I'm a Web Developer. I specialize in Frontend Developing and am looking forward to learning Fullsatck Development soon.
              I'm passonate about creating visually appealing and functional websites.
              </p>
              
            </div>
          </div>
          <div>
            <img
              src={personImg}
              className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
