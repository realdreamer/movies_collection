import useFetch from '../../hooks/useFetch';

import { URLS } from '../../consts';

export default function UpcomingMovies() {
  const { data, loading, error } = useFetch(URLS.UPCOMING_MOVIES);

  if(loading || error) return null;

  const { results = [] } = data || {};

  return (
    results.map(({ id, title, poster_path }) => (
      <div className="movie-card" key={id}>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <h3>{title}</h3>
      </div>
    ))
  );
}
