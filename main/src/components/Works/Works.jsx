import React from "react";
import WorksBox from "./WorksBox";

const Works = () => {
  return (
  
    <section className="dark:bg-zinc-900 dark:text-white py-10">
      <div className="container items-center mb-6">
        <p className="text-black dark:text-white text-center md:w-[50%] mx-auto text-xl">
        Here are some of my works.
        </p>
      </div>
      <div className="p-4">
        <WorksBox />
      </div>
    </section>
    
  );
};

export default Works;
