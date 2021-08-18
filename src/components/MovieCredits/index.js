import useFetch from '../../hooks/useFetch';

import { URLS } from '../../consts';
import Cast from './Cast';
import Crew from './Crew';

import './index.css';

export default function MovieCredits({id}) {
  const creditsUrl = `${URLS.MOVIE_DETAILS}/${id}/credits`;
  const { loading, error, data } = useFetch(creditsUrl);
  if(loading || error) return null;

  const { cast, crew } = data;
  return (
    <section className="container credits-container">
      <Cast data={cast} />
      <Crew data={crew} />
    </section>
  );
}
