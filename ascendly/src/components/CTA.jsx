import React from "react";
import Countdown from "./Countdown";
import { BPink, BYellow } from "./Button";
import { Armchair, ArrowUpRight } from "lucide-react";
import { Vector1, Vector2 } from "./Assets";
import gradient from "../assets/gradient.svg";

export const CTA1 = () => {
  return (
    <>
      <section className="mt-[60px] md:mt-20 lg:mt-[100px] mx-auto flex flex-col gap-[30px] md:gap-10 lg:gap-[50px] transition-all">
        <div className="flex flex-col items-center justify-center py-[100px] md:py-[140px] lg:py-[180px]">
          <img src={gradient} alt="gradient" className="z-0 absolute" />
          <div className="z-20 container flex flex-col gap-2 md:gap-2.5 lg:gap-3">
            <Countdown />
            <div className="text-center font-lato">
              <h6 className="relative w-fit mx-auto title uppercase">
                Try Ascendly with your team for{" "}
                <span className="text-primary">free</span>
                <Vector2 />
              </h6>
              <p className="text-white/60 tracking-widest description">
                "Only 50 seats left"
              </p>
            </div>
          </div>
          <div className="z-20 flex justify-center mt-3 md:mt-[15px] lg:mt-[18px]">
            <BPink icon={<Armchair />} displayText="Save My Seat" />
          </div>
        </div>
      </section>
    </>
  );
};

export const CTA2 = () => {
  return (
    <>
      <section className="mt-[60px] md:mt-20 lg:mt-[100px] flex flex-col bg-button gap-[30px] md:gap-10 lg:gap-[50px] transition-all">
        <div className="container relative mx-auto flex flex-col justify-between px-4 md:px-[30px] xl:px-[117px] py-[30px] md:py-[40px] lg:py-[80px] lg:flex-row lg:items-center">
          <div className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
            <h1 className="text-[#3D173A] uppercase text-[40px]/9 md:text-6xl/13 lg:text-[80px]/18">
              Don't
              <br />
              Miss Out!
            </h1>
            <p className="font-lato text-[#3D173A]/60 font-semibold tracking-widest description">
              Don’t miss this opportunity, Reserve your free seat today.
            </p>
          </div>
          <Vector1 />
          <div className="flex justify-end mt-3 md:mt-[15px] lg:mt-[18px]">
            <BYellow icon={<ArrowUpRight />} displayText="Register Now" />
          </div>
        </div>
      </section>
    </>
  );
};
