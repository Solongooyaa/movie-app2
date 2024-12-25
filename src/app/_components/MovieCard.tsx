import { Movie } from "../constants/types";


type Props = {
  prop: Movie
}

export const MovieCard = (props: Props) => {
  console.log(props)
  return (
      <div className="w-[100%]  bg-[#F4F4F5]">
          <div className="">
            <img src={`https://image.tmdb.org/t/p/w500${props.prop.poster_path}`} alt="" />
            <p className="text-2xl font-bold mb-4 rounded-[8px] font-size-[14px]">{props.prop.title}</p>
            <div>s</div>
            <p>{props.prop.vote_average.toFixed(1)}</p>
          </div>
      </div>
  );
};
