import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white   dark:bg-black dark:text-white">
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
                className="text-white cursor-pointer bg-yellow-400 px-4 py-2 rounded-lg my-6 mr-6 inline-block dark:text-black"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
