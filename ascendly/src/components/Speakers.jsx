import React from "react";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import { Speaker1, Speaker2, Speaker3, Speaker4 } from "./Assets";

const Speakers = () => {
  return (
    <>
      <section className="section_spacing">
        <div className="text-left">
          <h1 className="display_text">
            OUR
            <br />
            SPEAKERS
          </h1>
        </div>
        <div className="flex flex-col spacing xl:flex-row xl:flex-wrap xl:justify-between">
          <div className="flex justify-end">
            <div className="flex flex-col items-start gap-2 md:gap-2.5 lg:gap-3 w-fit">
              <div className="flex flex-col items-end">
                <div className="flex gap-4 lg:gap-6">
                  <Speaker1 />
                  <div className="flex flex-row leading-none transition-all">
                    <div className="text-primary tracking-wider text-[38px] md:text-[74px] lg:text-[117px] vertical">
                      Cooper
                    </div>
                    <div className="font-lato text-base md:text-2xl lg:text-[28px] vertical">
                      Bessie
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 md:gap-2.5 lg:gap-3 w-fit">
                <p className="text-white tracking-wider font-lato description w-[100px] md:w-[200px] lg:w-[300px]">
                  Research Planner and Web Designer
                </p>
                <img
                  src={logo3}
                  alt="logo3"
                  className="h-2.5 md:h-[15px] lg:h-5"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3 w-fit translate-x-[22px] md:translate-x-[142px] xl:translate-x-0">
              <div className="flex flex-col items-end">
                <div className="flex gap-4 lg:gap-6">
                  <div className="flex flex-row leading-none transition-all">
                    <div className="font-lato text-base md:text-2xl lg:text-[28px] sideways">
                      Jane
                    </div>
                    <div className="text-primary tracking-wider text-[38px] md:text-[74px] lg:text-[117px] sideways">
                      Wilson
                    </div>
                  </div>
                  <Speaker2 />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 md:gap-2.5 lg:gap-3 w-fit">
                <p className="text-white tracking-wider font-lato description w-[100px] md:w-[200px] lg:w-[300px]">
                  Research Planner and Web Designer
                </p>
                <img
                  src={logo4}
                  alt="logo4"
                  className="h-2.5 md:h-[15px] lg:h-5"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col items-start gap-2 md:gap-2.5 lg:gap-3 w-fit translate-x-[-57px] md:translate-x-[-130px] xl:translate-x-0">
              <div className="flex flex-col items-end">
                <div className="flex gap-4 lg:gap-6">
                  <Speaker3 />
                  <div className="flex flex-row leading-none transition-all">
                    <div className="text-primary tracking-wider text-[38px] md:text-[74px] lg:text-[117px] vertical">
                      Lehner
                    </div>
                    <div className="font-lato text-base md:text-2xl lg:text-[28px] vertical">
                      William
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 md:gap-2.5 lg:gap-3 w-fit">
                <p className="text-white tracking-wider font-lato description w-[100px] md:w-[200px] lg:w-[300px]">
                  Research Planner and Web Designer
                </p>
                <img
                  src={logo5}
                  alt="logo5"
                  className="h-2.5 md:h-[15px] lg:h-5"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3 w-fit translate-x-[92px] md:translate-x-[330px] xl:translate-x-0">
              <div className="flex flex-col items-end">
                <div className="flex gap-4 lg:gap-6">
                  <div className="flex flex-row leading-none transition-all">
                    <div className="font-lato text-base md:text-2xl lg:text-[28px] sideways">
                      Abraham
                    </div>
                    <div className="text-primary tracking-wider text-[38px] md:text-[74px] lg:text-[117px] sideways">
                      Gibson
                    </div>
                  </div>
                  <Speaker4 />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 md:gap-2.5 lg:gap-3 w-fit">
                <p className="text-white tracking-wider font-lato description w-[100px] md:w-[200px] lg:w-[300px]">
                  Research Planner and Web Designer
                </p>
                <img
                  src={logo6}
                  alt="logo6"
                  className="h-2.5 md:h-[15px] lg:h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speakers;
