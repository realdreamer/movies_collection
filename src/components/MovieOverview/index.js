import {  useParams } from 'react-router-dom';

import { URLS } from '../../consts';

import useFetch from '../../hooks/useFetch';

import './index.css';

export default function MovieOverview() {
  const { id } = useParams();
  const url = `${URLS.MOVIE_DETAILS}/${id}`;

  const { data } = useFetch(url);

  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    genres,
  } = data || {};

  const genreNames = genres?.map(({ name }) => name).join(', ');
  return (
    <div className="movie__overview">
      <div className="movie__banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}>
        <div className="movie__meta-info">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="movie__poster"
          />
          <div className="move-info">
            <h2 className="movie-info__title">{title}</h2>
            <p className="movie-info__genres">
              <strong>Genres:</strong> {genreNames}
            </p>
            <p>{overview}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
