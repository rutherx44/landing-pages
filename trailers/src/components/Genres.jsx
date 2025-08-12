import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../api/tmdb";
import Loading from "./Loading";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Genres = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error loading genres</div>;

  const genresArray = Object.values(data).sort((a, b) => a.localeCompare(b));

  const gradientClasses = [
    "bg-gradient-to-bl from-[#60EFFF] to-[#0061FF]",
    "bg-gradient-to-bl from-[#F4F269] to-[#5CB270]",
    "bg-gradient-to-bl from-[#F89B29] to-[#FF0F7B]",
    "bg-gradient-to-bl from-[#F8ACFF] to-[#696EFF]",
    "bg-gradient-to-bl from-[#FFF95B] to-[#FF930F]",
    "bg-gradient-to-bl from-[#EDE342] to-[#FF51EB]",
    "bg-gradient-to-bl from-[#F9BC2C] to-[#F74C06]",
    "bg-gradient-to-bl from-[#83D0CB] to-[#145277]",
    "bg-gradient-to-bl from-[#FCB0F3] to-[#3D05DD]",
    "bg-gradient-to-bl from-[#EF709B] to-[#FF0000]",
  ];

  return (
    <>
      <section className="flex flex-col gap-5 mt-[3.75rem]">
        <div className="flex gap-2.5 md:gap-3 lg:gap-3.5">
          <div className="w-1 bg-primary ml-4 md:ml-8 md:w-[5px] lg:ml-16 lg:w-1.5 rounded-full"></div>
          <h1 className="font-semibold tracking-wider text-base md:text-lg lg:text-2xl">
            BROWSE BY GENRE
          </h1>
        </div>
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={10}
          className="swiper-carousel"
        >
          {genresArray.map((genre, idx) => {
            const gradientClass = gradientClasses[idx % gradientClasses.length];

            return (
              <SwiperSlide
                key={idx}
                className="w-fit! first:pl-4 md:first:pl-8 lg:first:pl-16 cursor-pointer"
              >
                <div className="w-fit flex flex-col gap-1 lg:gap-2">
                  <div
                    title={genre}
                    className={`flex items-end px-4 pb-4 rounded-md w-[12.4375rem] h-[7.625rem] md:w-[14.25rem] md:h-[8rem] lg:w-[15.875rem] lg:h-[9rem] ${gradientClass} hover:opacity-90`}
                  >
                    <p
                      title={genre}
                      className="w-full font-bold tracking-widest transition-all text-xs md:text-base lg:text-lg truncate"
                    >
                      {genre}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Genres;
