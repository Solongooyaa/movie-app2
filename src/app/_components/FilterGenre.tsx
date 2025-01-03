"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { options } from "./Section";
import { Badge } from "@/components/ui/badge";

export const FilterGenre = () => {
  const [genre, getGenre] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
        options
      );
      const data = await response.json();
      getGenre(data.genres);
    };
    fetchGenre();
  }, []);
  const genres = genre;
  return;
  <Popover>
    <PopoverTrigger>
      <div className="w-[150px] border rounded p-4">Genre</div>
    </PopoverTrigger>
    <PopoverContent>
      {genres?.map((genre) => (
        <Badge> {genre?.name} </Badge>
      ))}
    </PopoverContent>
  </Popover>;
};
