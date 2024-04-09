import React from "react";

const SkillBox = ({ logo, skill }) => {
  return (
    <div
      className={
        "bg-white dark:bg-gray-700 box w-[5rem] h-[5rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-1 p-0.5 sm:w-[6rem] sm:h-[6rem] exsm:w-[5.5rem] exsm:h-[5.5rem]"
      }
    >
      <div
        className={
          "w-10 sm:w-8 exsm:w-6 h-10 sm:h-8 exsm:h-6 p-1 rounded-full flex items-center justify-center text-4xl sm:text-3xl exsm:text-2xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold text-xs sm:text-sm exsm:text-xs">{skill}</p>
    </div>
  );
};

export default SkillBox;
