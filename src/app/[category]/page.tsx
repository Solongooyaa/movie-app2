"use client"

import { options } from "../_components/Section";
import { Movie } from "../constants/types";
import { MovieCard } from "../_components/MovieCard";
import { Navigation } from "@/app/_components/Navigation";
import { Footer } from "../_components/Footer";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams()
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async ()=> {
      const response = await fetch( `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=1`, options);
      const resJson = await response.json();
      const data: Movie[] = resJson.results;
      setMovies(data)
    }
    fetchMovies();
   
  },[])
  
  return (
      <div className="w-full">
        <Navigation/>
        <div className="flex justify-between gap-2 p-4">
          <p className="font-bold ">popular</p>
         <div className="flex items-center gap-2">
            <p className="">See more</p>
                  <IoArrowForwardSharp/>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-3 lg:grid-cols-5 rounded-t-lg">
        {movies?.map((movie) => (
                <MovieCard prop={movie} />
              ))}
        </div>
             <Footer/>
            </div>
  );
}
