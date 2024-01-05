import React from "react";
import WorksBox from "./WorksBox";

const Works = () => {
  return (
    <section  id="works" className="bg-white dark:bg-slate-800 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Works
        </h1>
        <p className="text-black dark:text-white text-center md:w-[50%] mx-auto">
        Here are some of my works.
        </p>
      </div>
      <div>
        <WorksBox />
      </div>
    </section>
  );
};

export default Works;
