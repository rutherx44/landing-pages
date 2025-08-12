import React from "react";

const Button = ({ icon = "", displayText = "WATCH NOW" }) => {
  return (
    <button className="flex items-center justify-center h-fit bg-button rounded-full gap-1 md:gap-1.5 lg:gap-2 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5">
      <div className="flex items-center text-main size-3 md:size-4 lg:size-[1.125rem]">
        {icon}
      </div>
      <div className="text-center align-middle text-[0.625rem] tracking-wide transition-all md:text-xs md:tracking-wider lg:text-sm lg:tracking-widest">
        {displayText}
      </div>
    </button>
  );
};

export default Button;
