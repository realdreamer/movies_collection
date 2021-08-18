import useFetch from '../../hooks/useFetch';

import { URLS } from '../../consts';
import Thumbnail from '../Thumbnail';

export default function UpcomingMovies() {
  const { data, loading, error } = useFetch(URLS.UPCOMING_MOVIES);

  if(loading || error) return null;

  const { results = [] } = data || {};

  return (
    <div className="mc-flex mc-flex-column">
      <h2>Upcoming Movies</h2>
      <div className="mc-flex mc-flex-row mc-flex-nowrap movies__list-wrapper">
        {results.map(({ id, title, poster_path, overview }) => (
          <Thumbnail key={id} title={title} posterPath={poster_path} overview={overview} />
        ))}
      </div>
    </div>
  );
}
