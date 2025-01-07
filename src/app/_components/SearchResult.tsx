import { useEffect, useState } from "react";
import { options } from "./Section";
import Link from "next/link";
import { Movie } from "../constants/types";

type SearchResultListProps = {
  searchValue: string;
};

export const SearchResults = ({ searchValue }: SearchResultListProps) => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 5));
    };
    fetchMovie();
  }, [searchValue]);
  return (
    <div>
      {!movies ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {" "}
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div>{movie.title}</div>
              </Link>
            ))}
          </div>

          <div>
            <Link href={`/search?query= ${searchValue}`}>
              See all results for &#34;{searchValue}&#34;
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
