import React from "react";
import WorksBox from "./WorksBox";

const Projects = () => {
  return (
  
    <section className=" py-10">
      <div className=" font-bold relative">
            <div className="text-center text-6xl font-bold text-black/5 ">
              Works
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Works
            </h1>
          </div>
      <div className="p-4">
        <WorksBox />
      </div>
    </section>
    
  );
};

export default Projects;