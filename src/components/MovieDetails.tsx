import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits } from "../modules/movieService";
import { IoPersonOutline } from "react-icons/io5";

interface MovieDetailsProps {
  movieId: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  tagline: string;
  homepage: string;
  genres: {
    name: string;
  }[];
  prodiction_companies: {
    name: string;
  }[];
  production_countries: {
    name: string;
  }[];
}

interface MovieCreditsProps {
  cast: {
    name: string;
    character: string;
    profile_path: string;
  }[];
  crew: {
    name: string;
    job: string;
    profile_path: string;
  }[];
}

const MovieDetails = ({ setBg }: { setBg: (style: any) => void }) => {
  const pararms = useParams();
  const movieId = pararms.id ? parseInt(pararms.id) : 0;
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(
    null,
  );
  const [movieCredits, setMovieCredits] = useState<MovieCreditsProps | null>(
    null,
  );
  const fetchMovieDetails = async () => {
    const details = await getMovieDetails(movieId);
    setMovieDetails(details);
    console.log(details);
  };
  const fetchMovieCredits = async () => {
    const credits = await getMovieCredits(movieId);
    setMovieCredits(credits);
    console.log(credits);
  };
  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCredits();
  }, [movieId]);

  useEffect(() => {
    if (movieDetails?.backdrop_path) {
      setBg({
        backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.7), rgba(5, 5, 5, 0.8)), url(https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      });
    }
  }, [movieDetails, setBg]);

  return (
    <div className="details">
      <div className="text-4xl font-bold underline text-center">
        {movieDetails?.original_title}
      </div>
      <div className="text-2xl font-bold text-center">
        {movieDetails?.tagline}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          className="poster"
          src={"https://image.tmdb.org/t/p/w500/" + movieDetails?.poster_path}
          alt={movieDetails?.original_title}
        />
        <div className="information">
          <div className="genres">
            {movieDetails?.genres.map((genre) => (
              <div key={genre.name}>{genre.name}</div>
            ))}
          </div>

          <div className="overview">{movieDetails?.overview}</div>
          <div className="text-sm font-light">
            Release Date: {movieDetails?.release_date}
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold underline">Cast</div>
      <div className="actors">
        {movieCredits?.cast.map((actor) => (
          <div className="actor text-[#28262b]" key={actor.name}>
            {actor.profile_path ? (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}
                alt={actor.name}
              />
            ) : (
              <IoPersonOutline className="w-24 h-24" />
            )}
            <div className="names">
              <div className="text-lg font-bold">{actor.name}</div>
              <div className="text-md">{actor.character}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
