import useFetch from '../../hooks/useFetch';

import { URLS } from '../../consts';

import Cast from './Cast';
import Crew from './Crew';

import './index.css';

export default function MovieCredits({id}) {
  const creditsUrl = `${URLS.MOVIE_DETAILS}/${id}/credits`;
  const { loading, error, data } = useFetch(creditsUrl);

  if(loading) return <p>Loading...</p>;

  if(error) return <p>We lost you..! Please refresh the page and try again!</p>

  const { cast, crew } = data;
  return (
    <section className="container credits-container">
      <Cast data={cast} />
      <Crew data={crew} />
    </section>
  );
}
