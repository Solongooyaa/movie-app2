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
type Props ={
  title: string,
  endpoint: string
}
export const Section = async ({ title, endpoint }: Props) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  );
  const data = await response.json();
  const movies: Movie[] = data.results.slice(0, 10);

  return (
    
    <div className="p-3">
      
      <div className="flex justify-between">
        <h1 className="font-bold ">{title}</h1>
          <Link href={`/${endpoint}` }>
          <div className="flex items-center gap-2">
            <p className="">See more</p>
             <IoArrowForwardSharp/>
          </div>
          </Link>
       

      </div>

      <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-5 rounded-t-lg">
        {movies?.map((movie) => (
          <MovieCard prop={movie} />
        ))}
      </div>
    </div>
  );
};
