import React from "react";
import footer_logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <>
      <div className="mb-4 mt-[3.75rem]">
        <div className="flex flex-col text-center gap-10 px-4  md:flex-row md:justify-between md:px-8 lg:px-16">
          <div className="flex flex-col items-center gap-5 md:w-[10.375rem] lg:w-[13.875rem] md:items-start">
            <p className="w-fit py-1 px-2.5 border border-primary bg-bg-button rounded-full text-main tracking-widest text-[0.5rem] md:text-[0.625rem] lg:text-xs">
              NAVIGATION
            </p>
            <div className="flex flex-col gap-2.5 text-base md:text-lg md:items-start lg:text-xl xl:text-2xl">
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                Home
              </a>
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                Movies
              </a>
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                TV Shows
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:w-[10.375rem] lg:w-[13.875rem]">
            <p className="w-fit py-1 px-2.5 border border-primary bg-bg-button rounded-full text-main tracking-widest text-[0.5rem] md:text-[0.625rem] lg:text-xs">
              SOCIAL
            </p>
            <div className="flex flex-col gap-2.5 text-base md:text-lg lg:text-xl xl:text-2xl">
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                Behance
              </a>
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                Dribble
              </a>
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:w-[10.375rem] lg:w-[13.875rem] md:items-end">
            <p className="w-fit py-1 px-2.5 border border-primary bg-bg-button rounded-full text-main tracking-widest text-[0.5rem] md:text-[0.625rem] lg:text-xs">
              CONTACT
            </p>
            <div className="flex flex-col gap-2.5 text-base md:text-lg md:items-end lg:text-xl xl:text-2xl">
              <p className="text-xs md:text-sm md:text-end lg:text-base">
                For questions or feedback,
                <br /> feel free to contact me.
              </p>
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                Gmail
              </a>
              <a
                href="/"
                className="hover:text-primaborder-primary transition-all cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[3.75rem] flex flex-col gap-3.5">
          <p className="text-center text-sub text-xs md:text-sm lg:text-base px-10">
            Copyright © 2025. Designed and Developed by Ruther Dio.
          </p>
          <div className="px-4 md:px-8 lg:px-16 transition-all">
            <img className="w-full" src={footer_logo} alt="Trailers Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
