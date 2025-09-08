import React from "react";

export const BPink = ({ icon = "", displayText = "Register Now" }) => {
  return (
    <button className="flex items-center justify-center w-fit h-fit font-lato font-semibold bg-button rounded-sm md:rounded-md lg:rounded-lg  gap-1 md:gap-1.5 lg:gap-2 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 hover:bg-button/80 hover:transition-all cursor-pointer">
      <div className="flex items-center text-main size-3.5 md:size-4 lg:size-[1.125rem]">
        {icon}
      </div>
      <div className="text-center align-middle text-[0.625rem] tracking-wide transition-all md:text-xs md:tracking-wider lg:text-sm lg:tracking-widest">
        {displayText}
      </div>
    </button>
  );
};

export const BYellow = ({ icon = "", displayText = "Register Now" }) => {
  return (
    <button className="flex items-center justify-center w-fit h-fit font-lato font-semibold bg-primary text-background rounded-sm md:rounded-md lg:rounded-lg  gap-1 md:gap-1.5 lg:gap-2 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 hover:bg-primary/80 hover:transition-all cursor-pointer">
      <div className="flex items-center text-main size-3 md:size-4 lg:size-[18px]">
        {icon}
      </div>
      <div className="text-center align-middle text-[10px] tracking-wide transition-all md:text-xs md:tracking-wider lg:text-sm lg:tracking-widest">
        {displayText}
      </div>
    </button>
  );
};
