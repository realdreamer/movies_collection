import {  useParams } from 'react-router-dom';

import { URLS } from '../../consts';

import useFetch from '../../hooks/useFetch';

import MovieCredits from '../MovieCredits';
import './index.css';

export function convertMinsToHrs(mins) {
  const hrs = Math.floor(mins / 60);
  const remainingMinutes = mins - hrs * 60;
  return `${hrs}h ${remainingMinutes}min`;
}

export default function MovieOverview() {
  const { id } = useParams();
  const url = `${URLS.MOVIE_DETAILS}/${id}`;

  const { data, loading, error } = useFetch(url);

  if(loading) return <p>Loading...</p>;

  if(error) return <p>We lost you..! Please refresh the page and try again!</p>

  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    genres,
    vote_average,
    runtime,
    release_date,
    tagline,
  } = data || {};


  const [year] = release_date.split('-');
  const movieLength = convertMinsToHrs(runtime);

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
            <h2 className="movie-info__title">{title} ({year})</h2>
            <p className="movie-info__genres">
              <strong>Genres:</strong> {genreNames}
            </p>
            <div className="mc-flex">
              <h4 className="movie__rating">Rating: {vote_average}</h4>
              <span className="mc-dot-separator">&middot;</span>
              <h4 className="movie__time">Movie duration: {movieLength}</h4>
            </div>
            <p className="movie__tagline">{tagline}</p>
            <h3>Overview</h3>
            <p className="movie__overview-info">{overview}</p>
          </div>
        </div>
      </div>

      <MovieCredits id={id} />
    </div>
  );
}
