import React from "react";
import { Vector3, Vector4, Vector5, Vector6 } from "./Assets";
import vector6 from "../assets/vector6.png";

const Agenda = () => {
  return (
    <>
      <section className="section_spacing">
        <div className="text-right">
          <h1 className="display_text">agenda</h1>
        </div>
        <div className="flex flex-col w-full tracking-wide spacing">
          <div className="relative flex">
            <div className="font-lato flex flex-col gap-2 md:gap-2.5 lg:gap-3">
              <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
                <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                  Step 1
                </p>
              </div>
              <h6 className="font-bold tracking-wider uppercase title w-[150px] md:w-full">
                Welcome & Orientation
              </h6>
              <p className="text-white/60 tracking-widest description w-[180px] md:w-[320px] lg:w-[480px]">
                A quick intro to Ascendly, what to expect, and how to get the
                most out of the session.
              </p>
            </div>
            <Vector6 />
          </div>
          <div className="relative flex justify-end">
            <Vector5 />
            <div className="w-fit font-lato text-right flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3 -translate-x-[70px] md:-translate-x-[130px] lg:-translate-x-[230px]">
              <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
                <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                  Step 2
                </p>
              </div>
              <h6 className="font-bold tracking-wider uppercase title w-[150px] md:w-full">
                Understanding the Skills Gap
              </h6>
              <p className="text-white/60 tracking-widest description w-[180px] md:w-[320px] lg:w-[480px]">
                Why certain skills matter today — and how closing your gap can
                accelerate your career.
              </p>
            </div>
          </div>
          <div className="relative flex">
            <div className="font-lato flex flex-col gap-2 md:gap-2.5 lg:gap-3 md:translate-x-[100px] lg:translate-x-[120px]">
              <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
                <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                  Step 3
                </p>
              </div>
              <h6 className="font-bold tracking-wider uppercase title">
                Core Skills Deep Dive
              </h6>
              <p className="text-white/60 tracking-widest description w-[180px] md:w-[320px] lg:w-[480px]">
                Step-by-step walkthrough of the most in-demand skills, with
                practical examples you can start applying immediately.
              </p>
            </div>
            <Vector4 />
          </div>
          <div className="relative flex justify-end">
            <Vector3 />
            <div className="w-fit font-lato text-right flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3">
              <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
                <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                  Step 4
                </p>
              </div>
              <h6 className="font-bold tracking-wider uppercase title w-[170px] md:w-full">
                Interactive Q&A & Live Practice
              </h6>
              <p className="text-white/60 tracking-widest description w-[180px] md:w-[320px] lg:w-[480px]">
                Your chance to ask questions, see real-world use cases, and get
                feedback from our expert instructor.
              </p>
            </div>
          </div>
          <div className="relative flex">
            <div className="font-lato flex flex-col gap-2 md:gap-2.5 lg:gap-3 md:translate-x-[40px]">
              <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
                <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                  Step 5
                </p>
              </div>
              <h6 className="font-bold tracking-wider uppercase title w-[180px] md:w-full">
                Crafting Your Personal Action Plan
              </h6>
              <p className="text-white/60 tracking-widest description w-[180px] md:w-[320px] lg:w-[480px]">
                Guided exercise to build a clear, personalized next-step roadmap
                for growth.
              </p>
            </div>
            <img
              src={vector6}
              alt="vector6"
              className="absolute h-[20vw] max-h-50 max-w-100 right-0 -bottom-10 xs:-bottom-10 xs:-rotate-[25deg] sm:-bottom-10 md:right-10 md:-bottom-20 lg:-bottom-25 xl:right-10 xl:-bottom-25 2xl:right-0"
            />
          </div>
          <div className="font-lato text-right flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3 -translate-x-[55px] md:-translate-x-[130px] lg:-translate-x-[130px]">
            <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
              <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                Step 6
              </p>
            </div>
            <h6 className="font-bold tracking-wider uppercase title w-[150px] md:w-full">
              Closing Notes & Exclusive Offer
            </h6>
            <p className="text-white/60 tracking-widest description w-[180px] md:w-[320px] lg:w-[480px]">
              Special resources and bonuses for attendees to keep learning after
              the webinar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agenda;
