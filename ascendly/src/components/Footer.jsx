import React from "react";

const Footer = () => {
  return (
    <>
      <section className="section_spacing">
        <div className="flex flex-col spacing md:flex-row md:justify-between pb-5 md:pb-6 lg:pb-[30px]">
          <div className="flex flex-col font-lato gap-2.5 md:gap-3 lg:gap-3.5">
            <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
              <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                Social
              </p>
            </div>
            <div className="flex flex-col gap-2 font-bold text-xs md:text-sm lg:text-base">
              <p>LinkedIn</p>
              <p>GitHub</p>
              <p>Dribble</p>
              <p>Behance</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="flex flex-col font-lato gap-2.5 md:gap-3 lg:gap-3.5">
            <div className="w-fit bg-[#664C00] rounded-full text-center uppercase px-1.5 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2">
              <p className="text-primary font-bold text-[8px] md:text-[10px] lg:text-xs align-baseline">
                contact
              </p>
            </div>
            <div className="flex flex-col gap-2 font-bold text-xs md:text-sm lg:text-base">
              <p>company_email@example.com</p>
              <p>+63 912-345-6789</p>
            </div>
          </div>
          <div className="flex flex-col text-end">
            <p className="font-lato font-medium text-white/60 text-xs md:text-sm lg:text-base">
              Copyright © 2025. Designed and Developed by Ruther Dio.
            </p>
            <h1 className=" text-[60px] md:text-[80px] lg:text-[120px]">
              Ascendly
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
