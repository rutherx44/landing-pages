import React from "react";
import Countdown from "./Countdown";
import { BPink } from "./Button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="container mt-[60px] md:mt-20 lg:mt-[100px] mx-auto flex flex-col items-center gap-2 md:gap-2.5 lg:gap-3 text-center w-[282px] md:w-[470px] lg:w-[770px] transition-all">
        <h1 className="text-2xl md:text-[32px] lg:text-5xl/15">
          Elevate Your Skills, Accelerate Your{" "}
          <span className="text-primary">Future.</span>
        </h1>
        <p className="font-lato text-white/60 tracking-widest description w-[220px] md:w-[400px] lg:w-[510px]">
          Discover expert-led lessons designed to take you from where you are to
          where you want to be — faster than ever.
        </p>
        <Countdown />
        <div className="flex justify-center mt-3 md:mt-[15px] lg:mt-[18px]">
          <BPink icon={<ArrowUpRight />} displayText="Register Now" />
        </div>
      </section>
    </>
  );
};

export default Hero;
