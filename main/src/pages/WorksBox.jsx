import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";


const Works = [
  {
    id: 1,
    title: "Todo App",
    desc: "Stay organized and work seamlessly with Todo App. Enjoy the flexibility of switching between Dark and Light theme while managing tasks.",
    link: "https://todo-app-o.vercel.app/",
    git: "https://github.com/Anuj9675/Todo_App",
  },
  {
    id: 2,
    title: "Animal Welfare",
    desc: "I created a dummy charity website as my internship task with The Sparks Foundation which shows payment Gateway Integration.",
    link: "https://animalwelfare.netlify.app/",
    git: "https://github.com/Anuj9675/Animal_Welfare.git",
  },
  {
    id: 3,
    title: "Food App",
    desc: "I created an online food order website where the user can search and addTo cart their order and make payment.",
    link: "https://food-anuj9675.vercel.app/",
    git: "https://github.com/Anuj9675/Food",
  },
  {
    id: 4,
    title: "Gaming Site",
    desc: "I created a Gaming website for a client to support his Gaming Organization Growth.",
    link: "https://moonlityt.vercel.app/",
    git: "https://github.com/Anuj9675/Client",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    desc: "My personal portfolio which shows my skills and works.",
    link: "https://itsanuj.vercel.app/",
    git: "https://github.com/Anuj9675/Portfolio-main",
  },
  {
    id:6,
    title: "Meeting Scheduler",
    desc: "Created a meeting-scheduler webapp as my final year project.",
    link: "https://meeting-scheduler-octa.vercel.app/",
    git: "https://github.com/Anuj9675/meeting-scheduler/",
  },
  {
    id:7,
    title: "Water Conservation & Environmental Platform",
    desc: "Created a Water Conservation & Environmental Platform for practicing MERN Stack.",
    link: "https://water-conservation.vercel.app/",
    git: "https://github.com/Anuj9675/Water-conservation",
  },
];

const WorksBox = () => {
  return (
    <>
      <div>
        {Works.map(({ id, title, desc, link, git }) => (
          <div key={id} className="p-12 ">
            
            <div className="flex flex-col justify-center items-start">
              <div className="p-18">
                <h1 className="text-5xl  font-bold text-black  mb-6">{title}</h1>
                <p className="text-black text-lg  m-2">{desc}</p>
                <div className="flex gap-4">
                  <Link
                    to={link}
                    target="_blank"
                    className=" rounded-md shadow-md p-2 flex gap-2 items-center justify-center text-black"
                  >
                    <RxExternalLink className="bg-white rounded-full border w-6 h-6 p-1" />
                    <p className=" font-mono">View</p>
                  </Link>
                  <Link
                    to={git}
                    target="_blank"
                    className=" rounded-md shadow-md p-2 flex gap-2 items-center justify-center text-black"
                  >
                    <AiOutlineGithub className="bg-white rounded-full border w-6 h-6 p-1" />
                    <p className=" font-mono">Code</p>
                  </Link>
                </div>
              </div>
            </div>
            <hr className="my-4 border border-1"/>
          </div>
        ))}
      </div>

    </>
  );
};

export default WorksBox;