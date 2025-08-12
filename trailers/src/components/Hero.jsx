import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "./Ratings";
import { Dot, Play } from "lucide-react";
import Button from "./Button";
import Loading from "./Loading";
import { BASE_URL, fetchGenres, IMAGE_BASE, options } from "../api/tmdb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Hero = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["heroTrending"],
    queryFn: async () => {
      const [trending, genreMap] = await Promise.all([
        axios.get(`${BASE_URL}/trending/all/day`, options),
        fetchGenres(),
      ]);

      const items = trending.data.results;

      const heroItems = await Promise.all(
        items.map(async (item) => {
          const mediaType = item.media_type;
          let logoPath = null;

          try {
            const imageRes = await axios.get(
              `${BASE_URL}/${mediaType}/${item.id}/images`,
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
      return heroItems;
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
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="swiper-carousel"
      >
        {data?.slice(0, 10).map((movie, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative">
              <div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-10% from-[#080101/1] to-90% to-[#080101]"></div>
                <img
                  title={movie.title}
                  className="cursor-pointer relative h-dvh w-dvw object-cover object-center transition-all ease-in-out"
                  src={
                    movie.backdrop_path
                      ? `${IMAGE_BASE}${movie.backdrop_path}`
                      : "/no-image-landscape.svg"
                  }
                  alt={movie.id}
                />
              </div>
              <div className="absolute flex flex-col gap-3 items-center left-0 right-0 bottom-40 mx-auto px-4 z-20 max-w-96 h-fit md:bottom-[7.5rem] md:left-8 md:mx-0 md:gap-3.5 lg:w-96 lg:bottom-44 lg:left-16 lg:gap-4 transition-all ease-in-out">
                <div className="flex">
                  {movie.logo ? (
                    <img
                      title={movie.title}
                      src={`${IMAGE_BASE}${movie.logo}`}
                      alt={movie.title}
                    />
                  ) : (
                    <span className="font-black text-center text-4xl md:text-left lg:text-5xl">
                      {movie.title || movie.name}
                    </span>
                  )}
                </div>
                <p className="flex w-full items-center justify-center uppercase md:justify-start">
                  <span className="text-[0.625rem] md:text-xs lg:text-sm">
                    {movie.media_type}
                  </span>
                  <Dot className="text-main size-4 md:size-[1.125rem] lg:size-6" />
                  {movie.genres.slice(0, 2).map((genre, idx, arr) => (
                    <span key={idx} className="flex items-center">
                      <span className="text-[0.625rem] md:text-xs lg:text-sm">
                        {genre}
                      </span>
                      {idx < arr.length - 1 && (
                        <span>
                          <Dot className="text-main size-4 md:size-[1.125rem] lg:size-6" />
                        </span>
                      )}
                    </span>
                  ))}
                </p>
                <div className="hidden font-normal text-[0.625rem] md:text-xs md:flex lg:text-sm">
                  <span className="line-clamp-2">{movie.overview}</span>
                </div>
                <div className="flex w-full items-center justify-center gap-3 md:justify-start md:gap-3.5 lg:gap-4">
                  <Button icon={<Play />} displayText="WATCH NOW" />
                  <Rating rating={Number(movie.vote_average).toFixed(1)} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
