import { useEffect, useState } from "react";
import { getMovieList } from "../modules/movieService";
import MoviePanel from "./MoviePanel";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const movieData = await getMovieList();
    setMovies(movieData.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Popular Movies</h2>
      <ul className="movies">
        {movies.map((movie: any) => (
          <li className="movie" key={movie.id}>
            <MoviePanel
              id={movie.id}
              title={movie.title}
              posterPath={
                "https://image.tmdb.org/t/p/w500/" + movie.poster_path
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
