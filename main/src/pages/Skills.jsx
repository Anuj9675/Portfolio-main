import React from "react";

const Skills = () => {
  return (
    <section>
      <div className="container mx-auto sm:py-16 py-10">
        <div className="flex flex-col gap-10">
          <div className="text-center font-bold relative">
            <div className="text-6xl font-bold text-black/5">SKILLS</div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="bg-zinc-800 text-white font-medium px-6 py-4 text-2xl rounded-md grid gap-4">
            <div >
            <h1 className="text-green-500">Front-end :</h1>
            <div className="grid gap-2">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Redux</p>
            <p>Next.js</p>
            <p>Tailwindcss</p>
            </div>
            </div>
            <div >
            <h1 className="text-green-500">Back-end :</h1>
            <div className="grid gap-2">
            <p>Node.js</p>
            <p>Firebase</p>
            <p>MySql</p>
            </div>
            </div>
            <div >
            <h1 className="text-green-500">Devloper Tools :</h1>
            <div className="grid gap-2 ">
            <p>Git</p>
            <p>Github</p>
            <p>Redux-Toolkit</p>
            <p>VS Code</p>
            <p>Redux</p>
            <p>NPM</p>
            <p>Postman</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
