import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
const VITE_AUTH_KEY = import.meta.env.VITE_AUTH_KEY;

export const options = {
  params: {
    language: "en-US",
    include_image_language: "en",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${VITE_AUTH_KEY}`,
  },
};

export const fetchGenres = async () => {
  const [movieGenres, tvGenres] = await Promise.all([
    axios.get(`${BASE_URL}/genre/movie/list`, options),
    axios.get(`${BASE_URL}/genre/tv/list`, options),
  ]);

  const genreMap = {};
  [...movieGenres.data.genres, ...tvGenres.data.genres].forEach((genre) => {
    genreMap[genre.id] = genre.name;
  });

  return genreMap;
};
