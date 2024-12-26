import { Movie } from "../constants/types";
import { FaStar } from "react-icons/fa";

type Props = {
  prop: Movie;
};

export const MovieCard = (props: Props) => {
  console.log(props);
  return (
    <div className="bg-[#F4F4F5]">
      <img
        className="rounded-tl-lg rounded-tr-lg"
        src={`https://image.tmdb.org/t/p/w500${props.prop.poster_path}`}
        alt=""
      />
      <div className="p-2">
        <div className="flex gap-2 items-center">
          <FaStar className="fill-yellow-400" />
          <p>{props.prop.vote_average.toFixed(1)}</p>
        </div>
        <p className="text-2xl font-bold mb-4 rounded-[8px] font-size-[14px]">
          {props.prop.title}
        </p>
      </div>
    </div>
  );
};
