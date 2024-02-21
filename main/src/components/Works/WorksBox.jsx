import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
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
  {
    id: 3,
    bg: 'https://cdn.discordapp.com/attachments/853242550243557408/1209539971422228542/Screenshot_1.png?ex=65e74ae1&is=65d4d5e1&hm=3505202c900fe9f60b3204010be30f824f23ebbcee5d0ba74f6c12f4ae3d462a&',
    title: "Food App",
    desc: "I created an online food order website where the user can search and addTo cart their order and make payment.",
    link: "https://food-anuj9675.vercel.app/",
    git: "https://github.com/Anuj9675/Food",
  },
];

const WorksBox = () => {
  return (
    <section className="my-10 container">
      <AwesomeSlider className="slider-container" style={{ height: "400px", width: "700px", margin: "auto", overflow: "hidden" }}>
        {Works.map(({ id, bg, title, desc, link, git }) => (
          <div key={id} className="relative group w-full h-full">
            <div
              className="bg-cover bg-center border border-1 text-black dark:text-white transition-transform duration-300 ease-in-out "
              style={{ backgroundImage: `url(${bg})`, height: "400px", width: "700px", objectFit: "cover" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 md:p-16 space-y-3 rounded-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 backdrop-blur-lg">
              <h1 className="text-2xl font-bold text-black">{title}</h1>
              <p className="text-black">{desc}</p>
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
      </AwesomeSlider>
    </section>
  );
};

export default WorksBox;
