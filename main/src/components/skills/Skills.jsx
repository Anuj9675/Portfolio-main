import React from "react";
import SkillBox from "./SkillBox";
import {
  SiHtml5, SiReact, SiTailwindcss, SiJavascript, SiCss3, SiGithub, SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <section id="about" className="bg-gray-100  dark:bg-black dark:text-white ">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-2 font-bold relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="flex justify-center flex-row flex-wrap p-5 gap-4">
            <div className="flex flex-row flex-wrap gap-4">
              <SkillBox logo={<SiHtml5 />} skill={"HTML"} />
              <SkillBox logo={<SiCss3 />} skill={"CSS"} />
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              <SkillBox logo={<SiReact />} skill={"REACT"} />
              <SkillBox logo={<SiJavascript />} skill={"JAVA SCRIPT"} />
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              <SkillBox logo={<SiGithub />} skill={"GitHub"} />
              <SkillBox logo={<SiTailwindcss />} skill={"Tailwindcss"} />
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              <SkillBox logo={<TbBrandNextjs />} skill={"NextJS"} />
              <SkillBox logo={<SiPostman />} skill={"Postman"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;