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
    <section className="my-10 container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {Works.map(({ id, bg, title, desc, link, git }) => (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksBox;
