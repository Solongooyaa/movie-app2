"use client";
import { useState, useEffect } from "react";

export const Homescreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");

  type Movie = {
    name: string;
  };

  const [movie, setMovie] = useState<Movie>({ name: "" });

  useEffect(() => {
    setTimeout(() => {
      //   setMovie({ name: "Inception" });
      setTitle("Welcome to Movie Z");
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="w-full h-[606.5px] flex items-center justify-center">
        {isLoading ? (
          <div className="text-xl font-bold">Түр хүлээнэ үү...</div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            {/* <p className="text-lg">Movie Name: {movie.name}</p> */}
          </div>
        )}
      </div>
    </>
  );
};
