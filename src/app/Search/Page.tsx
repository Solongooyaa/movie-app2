"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { options } from "../_components/Section";
import { Movie } from "../constants/types";
import { MovieCard } from "../_components/MovieCard";
import { Navigation } from "../_components/Navigation";
import { Footer } from "../_components/Footer";
import { Pagination } from "../_components/Pagination";

export default function Search() {
  const searchParams = useSearchParams();
  const genres = searchParams.get("with_genres");
  const page = searchParams.get("page") || "1";

  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState({
    totalPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setPageInfo({
        currentPage: Number(page),
        totalPages: data?.total_pages || 0,
      });
      setMovies(data?.results?.slice(0, 5)) || [];
    };
    fetchMovies();
  }, [genres, page]);
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3">
      <Navigation />
      <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-5 rounded-t-lg">
        {movies?.map((movie) => (
          <MovieCard key={`movie-${movie.id}`} prop={movie} />
        ))}
      </div>
      <Pagination pageInfo={pageInfo} />
      <Footer />
    </div>
  );
}
