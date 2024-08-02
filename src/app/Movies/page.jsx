import React from 'react';
import MovieList from '@/components/Movies/MovieList';
import { fetchMovieImage } from '@/utils/moviesApi';

export const metadata = {
  title: 'Movie - Ahmad B'
};

const Movies = async () => {
  let movieIndex = 0;

  const topMoviesToFetch = [
    { title: 'Inception', year: 2010 },
    { title: 'The Big Short', year: 2015 },
    { title: 'Percy Jackson And The Lightning Thief', year: 2010 },
    { title: 'Winter\'s Bone', year: 2010 },
    { title: 'Green Book', year: 2018  },
    { title: 'The Social Network', year: 2010 },
    { title: 'The Conjuring', year: 2013 },
    { title: 'spider man no way home', year: 2021 },
    { title: 'The Fast and the Furious: Tokyo Drift', year: 2006 }
  ];

  const watchlistToFetch = [
    { title: 'Oppenheimer', year: 2023 },
    { title: 'interstellar', year: 2014 },
    { title: 'Napoleon', year: 2023 },
    { title: 'The Equalizer 3', year: 2023 },
    { title: 'Dune: Part Two', year: 2024 }
  ];

  const fetchMovies = async (movies) => {
    const moviePromises = movies.map(movie => fetchMovieImage(movie.title, movie.year));
    const movieResults = await Promise.all(moviePromises);
    return movieResults.map((result) => ({
      id: ++movieIndex,
      title: result.results[0].title,
      image: `https://image.tmdb.org/t/p/w500/${result.results[0].poster_path}`
    }));
  };

  const topMovies = await fetchMovies(topMoviesToFetch);
  const watchlistMovies = await fetchMovies(watchlistToFetch);

  return (
    <main className="flex flex-col items-center md:h-auto text-base md:text-lg">
      {topMovies && watchlistMovies && (
        <div className="w-5/6 text-md flex flex-col space-y-14">
          <MovieList title="Top Movies" movies={topMovies} />
          <MovieList title="Watchlist" movies={watchlistMovies} />
        </div>
      )}
    </main>
  );
};

export default Movies;
