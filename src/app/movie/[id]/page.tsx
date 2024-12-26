import { Footer } from "@/app/_components/Footer";
import { MovieCard } from "@/app/_components/MovieCard";
import { Navigation } from "@/app/_components/Navigation";
import { options } from "@/app/_components/Section";
import { Movie } from "@/app/constants/types";
import Link from "next/link";

type Props = {
    params: {
        id: string,
    }
}
export default async function Page({ params }: Props) {
    const response = await fetch( `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&page=1`, options);
      const data = await response.json();
      
  return (
      <div className="w-full">
        <Navigation/>
        <div className=" w-full grid gap-2 p-2 rounded-t-lg">
       <div className="flex justify-between w-full h-[56px]">
        <div>
        <p className="font-bold">{data.title} </p> 
        <p>{data.release_date}</p>
        </div>
       <div className="flex">
       <p className="font-bold font-size-[12px]">{data.vote_average.toFixed(1)}  /</p>
       <p>10</p>
       <p>{data.id}</p>
       </div>
       
       </div>
       <div className=" w-full h-[211px]">Trailer</div>
       <div className="flex h-[344px]">
       <img
        className="rounded-t-xl "
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="poster"
      />
      {/* <p>{data.genre_ids}</p> */}
        <p>{data.overview} </p> 
       </div>
        </div>
       <Footer/>
     </div>
   
  );
}