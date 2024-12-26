import Link from "next/link";
import { Movie } from "../constants/types";
import { FaStar } from "react-icons/fa";

type Props = {
  prop: Movie;
};

export const MovieCard = (props: Props) => {
  console.log(props);
  return (
    <div className="bg-[#F4F4F5] rounded-b-xl rounded-t-xl">
      <Link href={`/movie/${props.prop.id}`}>
      <img
        className="rounded-t-xl "
        src={`https://image.tmdb.org/t/p/w500${props.prop.poster_path}`}
        alt=""
      />
      <div className="p-2">
        <div className="flex gap-2 items-center">
          <FaStar className="fill-yellow-400" />
          <p className="font-bold font-size-[12px]">{props.prop.vote_average.toFixed(1)}  /</p>
          <p>10</p>

        </div>
        <p className="text-2xl font-size-[14px]">
          {props.prop.title}
        </p>
        </div>
      </Link>
     
    </div>
  );
};
