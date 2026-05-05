import { useEffect, useState } from "react";
import { getMovieList } from "../modules/movieService";

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
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
