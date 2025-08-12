import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dot, Info } from "lucide-react";
import dayjs from "dayjs";
import Button from "./Button";
import Loading from "./Loading";
import { BASE_URL, fetchGenres, options } from "../api/TMDB";

const Trailers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trailers"],
    queryFn: async () => {
      const [trending, genreMap] = await Promise.all([
        axios.get(`${BASE_URL}/trending/movie/day`, options),
        fetchGenres(),
      ]);

      const items = trending.data.results;

      const trailerItems = await Promise.all(
        items.map(async (item) => {
          let videoPath = true;

          try {
            const videos = await axios.get(
              `${BASE_URL}/movie/${item.id}/videos`,
              options
            );
            videoPath = videos || false;
          } catch {
            console.warn("Error fetching video for:", item.id);
          }

          const genres =
            item.genre_ids?.map((id) => genreMap[id]).filter(Boolean) || [];

          return {
            ...item,
            video: videoPath.data.results[0],
            genres,
          };
        })
      );
      return trailerItems;
    },
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error loading trailers</div>;

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-[3.75rem]">
      <div>
        {data.slice(0, 1).map((movie, idx) => (
          <div
            key={idx}
            className="w-full h-full flex justify-center cursor-pointer transition-all"
          >
            <div className="w-full h-full flex flex-col md:w-[44rem] lg:w-[62rem] xl:w-[74rem] transition-all">
              <div className="w-full h-full aspect-video transition-all">
                {movie.video ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.video.key}`}
                    title={movie.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full full aspect-video rounded-md border border-bg-button"
                  ></iframe>
                ) : (
                  <p className="font-black text-left text-sm md:text-base leading-tight">
                    No trailer available
                  </p>
                )}
              </div>
              <div className="w-full transition-all mt-2.5">
                <div className="flex gap-1.5 justify-between items-center">
                  <div className="flex items-center gap-2 truncate">
                    <div className="flex flex-col text-sub truncate">
                      <p
                        title={movie.title || movie.name}
                        className="font-bold tracking-widest transition-all text-sm md:text-base lg:text-lg truncate"
                      >
                        {movie.title || movie.name}
                      </p>
                      <p className="flex font-normal tracking-widest transition-all text-sm md:text-base lg:text-lg">
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
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button icon={<Info />} displayText="VIEW DETAILS" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
