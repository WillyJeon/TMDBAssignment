import { useEffect, useState } from "react";
import { getMovieList } from "../modules/movieService";
import { useParams } from "react-router-dom";
import MoviePanel from "./MoviePanel";

const MovieList = () => {
  const movieType = useParams<{ movieType: string }>();
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const type = movieType.movieType?.replace("-", "_") || "popular";
    console.log(type);
    const movieData = await getMovieList(type);
    setMovies(movieData.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [movieType]);

  const formatHeader = (type: string) => {
    type = type
      .replace("-", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return type;
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">
        {formatHeader(movieType.movieType || "popular")}
      </h2>
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
