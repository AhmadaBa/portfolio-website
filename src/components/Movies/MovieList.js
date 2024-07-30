import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ title, movies }) => {

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap -mx-2">
        {movies.map(movie => (
          <MovieItem key={movie.id} index={movie.id} title={movie.title} image={movie.image} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
