import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "./Ratings";
import { Dot, Play } from "lucide-react";
import dayjs from "dayjs";
import Loading from "./Loading";
import { BASE_URL, fetchGenres, IMAGE_BASE, options } from "../api/TMDB";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopTenMovies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["topTenMovie"],
    queryFn: async () => {
      const [movies, genreMap] = await Promise.all([
        axios.get(`${BASE_URL}/trending/movie/day`, options),
        fetchGenres(),
      ]);

      const items = movies.data.results;

      const movieItems = await Promise.all(
        items.map(async (item) => {
          let logoPath = null;

          try {
            const imageRes = await axios.get(
              `${BASE_URL}/movie/${item.id}/images`,
              options
            );
            logoPath = imageRes.data.logos[0]?.file_path || null;
          } catch {
            console.warn("Error fetching image for:", item.id);
          }

          const genres =
            item.genre_ids?.map((id) => genreMap[id]).filter(Boolean) || [];

          return {
            ...item,
            logo: logoPath,
            genres,
          };
        })
      );
      return movieItems;
    },
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error loading movies</div>;

  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex gap-2.5 md:gap-3 lg:gap-3.5">
          <div className="w-1 bg-primary ml-4 md:ml-8 md:w-[5px] lg:ml-16 lg:w-1.5 rounded-full"></div>
          <h1 className="font-semibold tracking-wider text-base md:text-lg lg:text-2xl">
            TOP 10 MOVIES
          </h1>
        </div>
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={10}
          className="swiper-carousel"
        >
          {data?.slice(0, 10).map((movie, idx) => (
            <SwiperSlide
              key={idx}
              className="w-fit! first:pl-4 md:first:pl-8 lg:first:pl-16 cursor-pointer"
            >
              <div className="w-fit flex flex-col gap-1 lg:gap-2">
                <div className="group relative w-[12.4375rem] h-[7.625rem] md:w-[14.25rem] md:h-[8rem] lg:w-[15.875rem] lg:h-[9rem] rounded-md transition-all border border-bg-button">
                  <div className="absolute hidden group-hover:block w-full h-full z-30 bg-bg-button opacity-25"></div>
                  <div className="absolute hidden group-hover:flex inset-0 m-auto size-8 z-30 border border-button bg-bg-button items-center justify-center rounded-full md:size-10 md:border-[1.5px] lg:size-11 lg:border-2">
                    <Play className="size-4 text-button md:size-[1.125rem] lg:size-6" />
                  </div>
                  <img
                    title={movie.title}
                    className="cursor-pointer w-full h-full rounded-md hover:"
                    src={
                      movie.backdrop_path
                        ? `${IMAGE_BASE}${movie.backdrop_path}`
                        : "/no-image-landscape.svg"
                    }
                    alt={movie.id}
                  />
                  <div className="absolute bottom-0 mx-auto mb-2.5 ml-2.5 max-w-32">
                    <div>
                      {movie.logo ? (
                        <img
                          title={movie.title}
                          src={`${IMAGE_BASE}${movie.logo}`}
                          alt={movie.title}
                        />
                      ) : (
                        <p className="font-black text-left text-sm md:text-base leading-tight backdrop-blur-[2px]">
                          {movie.title || movie.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-[12.4375rem] md:w-[14.25rem] lg:w-[15.875rem] transition-all">
                  <div className="flex gap-1.5 justify-between items-center">
                    <div className="flex items-center gap-2 truncate">
                      <div className="text-primary font-roboto font-black text-[2.5rem] md:text-[2.75rem] lg:text-5xl">
                        {idx + 1}
                      </div>
                      <div className="flex flex-col text-sub truncate">
                        <div
                          title={movie.title}
                          className="font-bold tracking-widest transition-all text-xs lg:text-sm truncate"
                        >
                          {movie.title}
                        </div>
                        <div className="flex w-full items-center font-normal tracking-widest truncate transition-all text-xs lg:text-sm">
                          {dayjs(movie.release_date).format("YYYY")}
                          {movie.genres.slice(0, 1).map((genre, idx, arr) => (
                            <span
                              key={idx}
                              className="flex items-center truncate"
                            >
                              {idx < arr.length - 0 && (
                                <span>
                                  <Dot className="text-main size-4 md:size-[1.125rem] lg:size-6" />
                                </span>
                              )}
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Rating rating={Number(movie.vote_average).toFixed(1)} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default TopTenMovies;
