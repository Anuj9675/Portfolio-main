import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Works = [
  {
    id: 1,
    bg: 'https://cdn.discordapp.com/attachments/853242550243557408/1154302221287161876/Screenshot_92.png',
    title: "Todo App",
    desc: "Stay organized and work seamlessly with Todo App. Enjoy the flexibility of switching between Dark and Light theme while managing tasks.",
    link: "https://todo-app-o.vercel.app/",
    git: "https://github.com/Anuj9675/Todo_App",
  },
  {
    id: 2,
    bg: 'https://cdn.discordapp.com/attachments/853242550243557408/1141031721815527545/Screenshot_89.png',
    title: "Animal Welfare",
    desc: "I created a dummy charity website as my internship task with The Sparks Foundation which shows payment Gateway Integration.",
    link: "https://animalwelfare.netlify.app/",
    git: "https://github.com/Anuj9675/Animal_Welfare.git",
  },
 
];

const WorksBox = () => {
  return (
    <section className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Works.map(({ id, bg, title, desc, link, git }) => (
          <div key={id} className="relative group w-full h-full">
            <div
              className="bg-cover bg-center border border-black rounded-lg text-black dark:text-white transition-transform duration-300 ease-in-out transform group-hover:opacity-80"
              style={{ backgroundImage: `url(${bg})`, height: "300px" }} // Adjust the height as needed
            ></div>
            <div className="absolute top-0 left-0 p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p>{desc}</p>
              <div className="flex gap-4 mt-4">
                <Link
                  to={link}
                  target="_blank"
                  className="dark:bg-black rounded-md shadow-md p-2 flex gap-2 items-center justify-center font-medium text-black"
                >
                  <RxExternalLink className="bg-white rounded-full border w-6 h-6 p-1" />
                  <p className="dark:text-white">View</p>
                </Link>
                <Link
                  to={git}
                  target="_blank"
                  className="dark:bg-black rounded-md shadow-md p-2 flex gap-2 items-center justify-center font-medium text-black"
                >
                  <AiOutlineGithub className="bg-white rounded-full border w-6 h-6 p-1" />
                  <p className="dark:text-white">Code</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksBox;
