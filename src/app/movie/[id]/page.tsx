// import { MovieCard } from "@/app/_components/MovieCard";
import { Director } from "@/app/_components/Director";
import { Footer } from "@/app/_components/Footer";
import { Navigation } from "@/app/_components/Navigation";
import { options } from "@/app/_components/Section";
import { MovieDetail } from "@/app/constants/types";
import { FaStar } from "react-icons/fa";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    options
  );
  const data: MovieDetail = await response.json();
  console.log(data);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navigation />
      <div className="p-4 space-y-6">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-gray-500">{data.release_date}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <p className="text-xl font-bold">
              {data.vote_average.toFixed(1)} / 10
            </p>
          </div>
        </div>
        <div className="w-full h-[211px] bg-gray-200 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">{data.video}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            className="w-full md:w-1/3 rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={`${data.title} Poster`}
          />
          <p className="text-lg text-gray-700 leading-relaxed md:w-2/3">
            {data.overview}
          </p>
        </div>
      </div>
      <Director/>
      <Footer />
    </div>
  );
}
