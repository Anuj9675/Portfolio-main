import React from "react";
import Skills from "../skills/Skills";

const About = () => {
  return (
    <section className="dark:bg-zinc-900 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="font-sans text-lg">
            <p>
            I am a web developer with a Bachelor's degree in Computer Science. Despite the skills I've acquired so far, I'm looking forward to learning more and improving them.
            </p>
            <br></br>
            <p>
            I dive into coding adventures daily. Seeking to transform ideas into impactful online realities, I'm dedicated to mastering the craft. Let's collaborate and bring visions to life in the digital realm!
            </p>
            <div>
              <a
                href="../../assets/Resume.pdf"
                className="text-white cursor-pointer font-medium bg-sky-400 px-6 py-2 rounded-lg my-6 mr-6 inline-block dark:text-black"
                download
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Skills/>
      </div>
    </section>
  );
};

export default About;
