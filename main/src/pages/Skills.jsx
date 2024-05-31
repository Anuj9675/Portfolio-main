import React from "react";
import SkillBox from "./SkillBox";
import {
  SiHtml5, SiReact, SiTailwindcss, SiJavascript, SiCss3, SiGithub, SiPostman, SiNodedotjs, SiMysql
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
          <div className="flex flex-wrap justify-center items-center mx-auto gap-6 flex-row">
            <SkillBox logo={<SiHtml5 />} skill={"HTML"} />
            <SkillBox logo={<SiCss3 />} skill={"CSS"} />
            <SkillBox logo={<SiReact />} skill={"REACT"} />
            <SkillBox logo={<SiJavascript />} skill={"JAVA SCRIPT"} />
            <SkillBox logo={<SiGithub />} skill={"GitHub"} />
            <SkillBox logo={<SiTailwindcss />} skill={"Tailwindcss"} />
            <SkillBox logo={<TbBrandNextjs />} skill={"NextJS"} />
            <SkillBox logo={<SiPostman />} skill={"Postman"} />
            <SkillBox logo={<SiNodedotjs />} skill={"Nodejs"}/>
            <SkillBox logo={<SiMysql />} skill={"MySql"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
