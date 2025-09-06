import React from "react";
import { Footprints, Sprout, UserStar, Zap } from "lucide-react";
import { Vector7, Vector8, Vector9 } from "./Assets";

const Benefits = () => {
  return (
    <>
      <section className="section_spacing">
        <div className="text-right">
          <h1 className="display_text">benefits</h1>
        </div>
        <div className="relative flex">
          <div className="font-lato flex flex-col gap-2 md:gap-2.5 lg:gap-3">
            <div className="w-fit rounded-sm bg-[#664C00] px-1.5 py-1.5 md:px-2 md:py-2">
              <Zap className="text-primary icon" />
            </div>
            <h6 className="font-bold tracking-wider title">
              Practical Skills, Fast
            </h6>
            <p className="text-white/60 tracking-widest description w-[180px] md:w-[400px] lg:w-[590px]">
              Skip outdated theory. Get hands-on strategies and techniques you
              can apply immediately to your career or projects.
            </p>
          </div>
          <Vector8 />
        </div>
        <div className="relative">
          <Vector9 />
          <div className="font-lato text-right flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3">
            <div className="w-fit rounded-sm bg-[#664C00] px-1.5 py-1.5 md:px-2 md:py-2">
              <UserStar className="text-primary icon" />
            </div>
            <h6 className="font-bold tracking-wider title">Expert Guidance</h6>
            <p className="text-white/60 tracking-widest description w-[180px] md:w-[400px] lg:w-[590px]">
              Learn directly from seasoned professionals who’ve done what they
              teach — with tips you won’t find in generic online tutorials.
            </p>
          </div>
        </div>
        <div className="relative flex">
          <div className="font-lato flex flex-col gap-2 md:gap-2.5 lg:gap-3">
            <div className="w-fit rounded-sm bg-[#664C00] px-1.5 py-1.5 md:px-2 md:py-2">
              <Footprints className="text-primary icon" />
            </div>
            <h6 className="font-bold tracking-wider title">Clear Next Steps</h6>
            <p className="text-white/60 tracking-widest description w-[180px] md:w-[400px] lg:w-[590px]">
              Walk away with a clear action plan, so you know exactly what to do
              next to keep growing, improving, and reaching your goals.
            </p>
          </div>
          <Vector7 />
        </div>
        <div className="font-lato text-right flex flex-col items-end gap-2 md:gap-2.5 lg:gap-3">
          <div className="w-fit rounded-sm bg-[#664C00] px-1.5 py-1.5 md:px-2 md:py-2">
            <Sprout className="text-primary icon" />
          </div>
          <h6 className="font-bold tracking-wider title">Grow Your Network</h6>
          <p className="text-white/60 tracking-widest description w-[185px] md:w-[410px] lg:w-[610px]">
            Connect with peers who share your goals — exchange ideas, get
            feedback, and stay motivated long after the webinar ends.
          </p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
