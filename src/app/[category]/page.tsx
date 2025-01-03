"use client";

import { options } from "../_components/Section";
import { Movie } from "../constants/types";
import { MovieCard } from "../_components/MovieCard";
import { Navigation } from "@/app/_components/Navigation";
import { Footer } from "../_components/Footer";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination } from "../_components/Pagination";
import { PageInfo } from "../constants/types";

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get('page')
  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`,
        options
      )
      const data = await response.json();
      setMovies(data.results);
      setPageInfo({ currentPage: Number(page), totalPages: data.total_page})
      console.log(data)
    };

    fetchMovies();
  }, [params.category, page]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navigation />
      <div className="flex justify-between items-center gap-2 p-4">
        <h1 className="text-2xl font-bold capitalize">{params.category}</h1>
        <div className="flex items-center gap-2 cursor-pointer">
          <p>See more</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id + 'movie'} prop={movie} />
        ))}
        
      </div>
      <Pagination pageInfo={pageInfo}/>
      <Footer />
    </div>
  );
}
