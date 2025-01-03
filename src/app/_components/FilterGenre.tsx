"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { options } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Genre } from "../constants/types";
import { ArrowBigDown, } from "lucide-react";
import Link from "next/link";

export const FilterGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  useEffect(() => {
    const fetchGenre = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
        options
      );
      const data = await response.json();
      setGenre(data.genres);
    };
    fetchGenre();
  }, []);
  const genres = genre;
  return(
  <Popover>
    <PopoverTrigger>
      <div className="w-[60px] border rounded p-4 flex justify-center items-center"><ArrowBigDown/></div>
    </PopoverTrigger>
    <PopoverContent>
      {genres?.map((genre: Genre) => (
        <Link className="p-1" key={genre.id} href={`/discover?with_genres=${genre.id}&page=1`}>
        <Badge key={`genre-${genre.id}`}> {genre?.name} </Badge>
        </Link>
      ))}
    </PopoverContent>
  </Popover>
)}
