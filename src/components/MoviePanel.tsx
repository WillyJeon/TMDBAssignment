import { Link } from "react-router-dom";

interface MoviePanelProps {
  id: number;
  title: string;
  posterPath: string;
}

const MoviePanel = ({ id, title, posterPath }: MoviePanelProps) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={posterPath} alt={title} />
      </Link>
    </div>
  );
};

export default MoviePanel;
