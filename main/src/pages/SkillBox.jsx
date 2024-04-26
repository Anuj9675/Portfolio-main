import React from "react";

const SkillBox = ({ logo, skill }) => {
  return (
    <div
      className={
        "bg-white box w-[6rem] h-[6rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-1 p-0.5"
      }
    >
      <div
        className={
          "p-1  rounded-full flex items-center justify-center text-4xl sm:text-3xl exsm:text-2xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold text-xs sm:text-sm exsm:text-xs">{skill}</p>
    </div>
  );
};

export default SkillBox;