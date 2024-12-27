import Link from "next/link";
import { Movie } from "../constants/types";
import { FaStar } from "react-icons/fa";

type Props = {
  prop: Movie;
};

export const MovieCard = ({ prop }: Props) => {
  return (
    <div className="bg-[#F4F4F5] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <Link href={`/movie/${prop.id}`}>
        <img
          className="w-full h-64 object-cover"
          src={`https://image.tmdb.org/t/p/w500${prop.poster_path}`}
          alt={prop.title}
        />
        <div className="p-2">
          <div className="flex items-center gap-1 mb-1">
            <FaStar className="text-yellow-400" />
            <p className="font-bold text-sm">
              {prop.vote_average.toFixed(1)} /
            </p>
            <p className="text-sm">10</p>
          </div>
          <p className="text-lg font-semibold truncate">{prop.title}</p>
        </div>
      </Link>
    </div>
  );
};
