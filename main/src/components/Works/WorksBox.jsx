import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";


const Works = [
  {
    id: 1,
    image: "/assets/img1.png",
    title: "Todo App",
    desc: "Stay organized and work seamlessly with Todo App. Enjoy the flexibility of switching between Dark and Light theme while managing tasks.",
    link: "https://todo-app-o.vercel.app/",
    git: "https://github.com/Anuj9675/Todo_App",
  },
  {
    id: 2,
    image: "/assets/img2.png",
    title: "Animal Welfare",
    desc: "I created a dummy charity website as my internship task with The Sparks Foundation which shows payment Gateway Integration.",
    link: "https://animalwelfare.netlify.app/",
    git: "https://github.com/Anuj9675/Animal_Welfare.git",
  },
  {
    id: 3,
    image: "/assets/img3.png",
    title: "Food App",
    desc: "I created an online food order website where the user can search and addTo cart their order and make payment.",
    link: "https://food-anuj9675.vercel.app/",
    git: "https://github.com/Anuj9675/Food",
  },
  {
    id: 4,
    image: "/assets/img4.png",
    title: "Contact Form",
    desc: "I created a contact form for my own use with React and Tailwindcss.",
    link: "",
    git: "",
  },
  {
    id: 5,
    image: "/assets/img5.png",
    title: "Personal Portfolio",
    desc: "My personal portfolio which shows my skills and works.",
    link: "https://itsanuj.vercel.app/",
    git: "https://github.com/Anuj9675/Portfolio-main",
  },
];

const WorksBox = () => {
  return (
    <>
      <div>
        {Works.map(({ id, image, title, desc, link, git }) => (
          <div key={id} className=" flex gap-16 p-12 flex-col md:flex-row">
            <img
              className="md:h-[320px] md:w-[620px] h-[180px] w-[480px] border border-black"
              src={image}
            ></img>
            <div className="flex flex-col justify-center items-start">
              <div className="p-18">
                <h1 className="text-5xl font-bold text-black dark:text-white mb-6">{title}</h1>
                <p className="text-black text-lg dark:text-white m-2">{desc}</p>
                <div className="flex gap-4">
                  <Link
                    to={link}
                    target="_blank"
                    className="dark:bg-zinc-950 rounded-md shadow-md p-2 flex gap-2 items-center justify-center font-medium text-black"
                  >
                    <RxExternalLink className="bg-white rounded-full border w-6 h-6 p-1" />
                    <p className="dark:text-white">View</p>
                  </Link>
                  <Link
                    to={git}
                    target="_blank"
                    className="dark:bg-zinc-950 rounded-md shadow-md p-2 flex gap-2 items-center justify-center font-medium text-black"
                  >
                    <AiOutlineGithub className="bg-white rounded-full border w-6 h-6 p-1" />
                    <p className="dark:text-white">Code</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default WorksBox;
