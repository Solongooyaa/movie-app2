import { Movie } from "../constants/types";
import { MovieCard } from "./MovieCard";

const API_KEY = "f39690f9830ce804b7894ac1def4f7e9";


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
export const Section = async ({title, endpoint}: Props ) => {

 
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
    options
  )
  const data = await response.json()
    const movies: Movie[] = data.results.slice(0,10)
    console.log(movies)

    return (
        <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-5 rounded-t-lg">
            <div>
            <h1 className="font-bold ">{title}</h1>
            </div>
            
  {movies.map((movie) => <MovieCard prop={movie} />)}
        </div>
    )
}