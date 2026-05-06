import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits } from "../modules/movieService";
import { IoPersonOutline } from "react-icons/io5";

interface MovieDetailsProps {
  movieId: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  tagline: string;
  homepage: string;
  genres: {
    name: string;
  }[];
  production_companies: {
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
    const credits = await getMovieCredits(movieId);
    setMovieDetails(details);
    setMovieCredits(credits);
    console.log(details);
    //console.log(credits);
  };
  useEffect(() => {
    fetchMovieDetails();
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
    <div className="details font-bold">
      <div className="text-4xl underline text-center">
        {movieDetails?.title}
      </div>
      <div className="text-2xl text-center p-2">{movieDetails?.tagline}</div>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          className="poster"
          src={"https://image.tmdb.org/t/p/w500/" + movieDetails?.poster_path}
          alt={movieDetails?.title}
        />
        <div className="information">
          <div className="section">Genres</div>
          <div className="genres">
            {movieDetails?.genres.map((genre) => (
              <div className="genre" key={genre.name}>
                {genre.name}
              </div>
            ))}
          </div>
          <div className="section">Overview</div>
          <div className="overview">{movieDetails?.overview}</div>
          <div className="section">Release Date</div>
          <div>{movieDetails?.release_date}</div>
          <div className="section">Production Companies</div>
          <div>
            {movieDetails?.production_companies.map((company) => (
              <div key={company.name}>{company.name}</div>
            ))}
          </div>
          <div className="section">Production Countries</div>
          <div>
            {movieDetails?.production_countries.map((country) => (
              <div key={country.name}>{country.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="section">Cast</div>
      <div className="actors">
        {movieCredits?.cast.map((actor) => (
          <div className="actor " key={actor.name}>
            {actor.profile_path ? (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}
                alt={actor.name}
              />
            ) : (
              <IoPersonOutline className="w-24 h-24" />
            )}
            <div className="names">
              <div className="text-lg">{actor.name}</div>
              <div className="text-md font-semibold">{actor.character}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
