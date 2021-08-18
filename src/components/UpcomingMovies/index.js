import useFetch from '../../hooks/useFetch';

import { URLS } from '../../consts';
import Thumbnail from '../Thumbnail';

export default function UpcomingMovies() {
  const { data, loading, error } = useFetch(URLS.UPCOMING_MOVIES);

  if(loading || error) return null;

  const { results = [] } = data || {};

  return (
    results.map(({ id, title, poster_path, overview }) => (
      <Thumbnail key={id} title={title} posterPath={poster_path} overview={overview} />
    ))
  );
}
