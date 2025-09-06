import React from "react";
import { Avatar1, Avatar2, Avatar3, Avatar4 } from "./Assets";

const Reviews = () => {
  return (
    <section className="section_spacing">
      <div className="text-left">
        <h1 className="display_text">Reviews</h1>
      </div>
      <div className="container flex flex-col mx-auto spacing md:px-[60px] lg:px-[100px]">
        <div className="flex flex-col mx-auto font-lato gap-2 md:gap-2.5 lg:gap-3 w-[220px] md:w-[370px] lg:w-[550px] ml-8">
          <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
            <Avatar1 />
            <div className="flex flex-col">
              <h6 className="font-bold tracking-wider uppercase title">
                Jordan L.
              </h6>
              <p className="text-white/60 tracking-widest description">
                UX Designer
              </p>
            </div>
          </div>
          <span className="font-bold text-primary tracking-widest uppercase description">
            “Practical, Not Just Theory”
          </span>
          <p className="text-white/60 tracking-widest description">
            “Finally, a webinar that doesn’t waste time. Every topic was
            actionable. I left with a real plan, not just motivation.”
          </p>
        </div>
        <div className="flex flex-col items-end text-right mx-auto font-lato gap-2 md:gap-2.5 lg:gap-3 w-[220px] md:w-[370px] lg:w-[550px] mr-8">
          <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
            <div className="flex flex-col">
              <h6 className="font-bold tracking-wider uppercase title">
                Alex P.
              </h6>
              <p className="text-white/60 tracking-widest description">
                Data Analyst
              </p>
            </div>
            <Avatar4 />
          </div>
          <span className="font-bold text-primary tracking-widest uppercase description">
            “The Networking Was a Bonus!”
          </span>
          <p className="text-white/60 tracking-widest description">
            “Meeting other motivated learners in the chat was amazing. I’ve
            already connected with two people working in the same field as me.”
          </p>
        </div>
        <div className="flex flex-col mx-auto font-lato gap-2 md:gap-2.5 lg:gap-3 w-[220px] md:w-[370px] lg:w-[550px] ml-8">
          <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
            <Avatar3 />
            <div className="flex flex-col">
              <h6 className="font-bold tracking-wider uppercase title">
                Maya R.
              </h6>
              <p className="text-white/60 tracking-widest description">
                Marketing Specialist
              </p>
            </div>
          </div>
          <span className="font-bold text-primary tracking-widest uppercase description">
            “Game-Changing Insights”
          </span>
          <p className="text-white/60 tracking-widest description">
            “Ascendly gave me clarity on what to focus on and how to actually do
            it. In just a week, I applied one of the strategies at work and got
            immediate results.”
          </p>
        </div>
        <div className="flex flex-col items-end text-right mx-auto font-lato gap-2 md:gap-2.5 lg:gap-3 w-[220px] md:w-[370px] lg:w-[550px] mr-8">
          <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
            <div className="flex flex-col">
              <h6 className="font-bold tracking-wider uppercase title">
                Sam K.
              </h6>
              <p className="text-white/60 tracking-widest description">
                Project Manager
              </p>
            </div>
            <Avatar2 />
          </div>
          <span className="font-bold text-primary tracking-widest uppercase description">
            “Boosted My Confidence”
          </span>
          <p className="text-white/60 tracking-widest description">
            “I was unsure if I had the right skills for my next career step.
            Ascendly helped me see my strengths and fill the gaps.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
