import { Link } from 'react-router-dom';

import './index.css';

export default function Thumbnail({title, posterPath, id}) {
  return (
    <Link to={`/movie/${id}`} className="movie-thumbnail" title={title}>
      <div>
        <figure className="thumbnail__figure">
          <img
            className="thumbnail__image"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title}
          />
        </figure>
        <h3 className="thumbnail__title">{title}</h3>
      </div>
    </Link>
  );
}
