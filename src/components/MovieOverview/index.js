import {  useParams } from 'react-router-dom';

import { URLS } from '../../consts';

import useFetch from '../../hooks/useFetch';

import MovieCredits from '../MovieCredits';
import MovieInfo from '../MovieInfo';

export function convertMinsToHrs(mins) {
  const hrs = Math.floor(mins / 60);
  const remainingMins = mins - hrs * 60;
  return `${hrs}h ${remainingMins}min`;
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
  const movieDuration = convertMinsToHrs(runtime);

  const genreNames = genres?.map(({ name }) => name).join(', ');
  return (
    <div className="movie__overview">
      <MovieInfo
        bannerPath={backdrop_path}
        genres={genreNames}
        movieDuration={movieDuration}
        overview={overview}
        posterPath={poster_path}
        rating={vote_average}
        tagline={tagline}
        title={title}
        year={year}
      />
      <MovieCredits id={id} />
    </div>
  );
}
