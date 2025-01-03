"use client"

import {usePathname, useRouter, useParams, useSearchParams} from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { options } from '../_components/Section';
import { Movie } from '../constants/types';
import { MovieCard } from '../_components/MovieCard';


export default function Home() {

    const searchParams = useSearchParams();
    const genreIds = searchParams.get('with_genres');
    const page = searchParams.get('page');

    const [movies, setMovies] = useState<Movie[]>();
    const [pageInfo, setPageInfo] = useState({
        totalPages: 0,
        currentPages: 0,
    })

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?with_genres=${genreIds}&language=en-US&page=${page}`,
                options
            );
            const data = await response.json();
            setPageInfo({
                currentPages: Number(page),
                totalPages: data.total_pages,
            });
            setMovies(data.results?.slice(0, 5));
        };
        fetchMovies();
    },[genreIds, page]);

  return (
    <div className="w-full h-screen">
        { movies?.map((movie) => (
            <MovieCard key={genreIds.id} prop={page} />

        )
    }
      {genreIds}, {page}
    </div>
  );
}
