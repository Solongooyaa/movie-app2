import Link from "next/link";
import { Movie } from "../constants/types";
import { MovieCard } from "./MovieCard";
import { IoArrowForwardSharp } from "react-icons/io5";

const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
type Props = {
  title: string;
  endpoint: string;
  moreLink?: string;
};
export const Section = async ({ title, endpoint, moreLink }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}`,
    options
  );
  //
  const data = await response.json();
  const movies: Movie[] = data?.results?.slice(0, 10);
  const href = moreLink ? moreLink : `/${endpoint}`;

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <Link href={href} className="flex items-center gap-2">
          <p>See more</p>
          <IoArrowForwardSharp />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-5 rounded-t-lg">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} prop={movie} />
        ))}
      </div>
    </div>
  );
};
