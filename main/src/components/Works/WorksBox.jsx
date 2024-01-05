import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Works = [
  {
    id: 1,
    img: 'https://cdn.discordapp.com/attachments/853242550243557408/1154302221287161876/Screenshot_92.png',
    title: "Todo App",
    desc: "Stay organized and work seamlessly with Todo App. Enjoy the flexibility of switching between Dark and Light theme while managing tasks.",
    link: "https://todo-app-o.vercel.app/",
    git: "https://github.com/Anuj9675/Todo_App",
  },
  {
    id: 2,
    img: 'https://cdn.discordapp.com/attachments/853242550243557408/1141031721815527545/Screenshot_89.png',
    title: "Animal Welfare",
    desc: "I created a dummy charity website as my internship task with The Sparks Foundation which shows payment Gateway Integration.",
    link: "https://animalwelfare.netlify.app/",
    git: "https://github.com/Anuj9675/Animal_Welfare.git",
  },
];
const WorksBox = () => {
  return (
    <section className="my-10 container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {Works.map(({ id, img, title, desc, link, git }) => (
          <div
            key={id}
            className={`bg-[url('${img}')]  border border-black rounded-lg text-black dark:text-white`}
          >
            
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl ">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksBox;
