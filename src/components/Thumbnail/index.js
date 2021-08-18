import { Link } from 'react-router-dom';

import './index.css';

export default function Thumbnail({title, overview, posterPath, id}) {
  return (
    <Link to={`/movie/${id}`} className="movie-thumbnail">
      <div>
        <img
          className="thumbnail__image"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
        />
        <h3 className="thumbnail__title">{title}</h3>
      </div>
    </Link>
  );
}
