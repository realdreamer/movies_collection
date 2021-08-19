import useFetch from '../../hooks/useFetch';

import { URLS } from '../../consts';
import Thumbnail from '../Thumbnail';

export default function TrendingMovies() {
  const { data, loading, error } = useFetch(URLS.TRENDING_MOVIES);

  if(loading) return <p>Loading...</p>;

  if(error) return <p>We lost you..! Please refresh the page and try again!</p>

  const { results = [] } = data || {};

  return (
    <div className="mc-flex mc-flex-column">
      <h2>What's Trending Today?</h2>
      <div className="mc-flex mc-flex-row mc-flex-nowrap movies__list-wrapper">
        {results.map(({ id, title, poster_path, overview }) => (
          <Thumbnail
            key={id}
            title={title}
            posterPath={poster_path}
            overview={overview}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}
