import React from "react";

const SkillBox = ({ logo, skill }) => {
  return (
    <div
      className={
        "bg-white dark:bg-gray-700 box w-[6rem] h-[6rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-2 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
      }
    >
      <div
        className={
          "w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-5xl sm:text-4xl exsm:text-3xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold text-sm sm:text-md exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;