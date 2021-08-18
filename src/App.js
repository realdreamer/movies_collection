import { useEffect } from 'react';

import useFetch from './hooks/useFetch';
import UpcomingMovies from './components/UpcomingMovies';
import PopularMovies from './components/PopularMovies';

import { URLS } from './consts';
import './App.css';

function App() {
  useEffect(() => {
    const {
      REACT_APP_API_BASE_URL,
      REACT_APP_API_BASE_VERSION,
      REACT_APP_API_KEY,
    } = process.env;
    fetch(`${REACT_APP_API_BASE_URL}/${REACT_APP_API_BASE_VERSION}/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  const {data, error, loading} = useFetch(URLS.CONFIGURATION);
  console.log(data, error, loading);

  return (
    <div className="App">
      <header>
        <h1>My Movies collection</h1>
      </header>
      <main>
        <PopularMovies />
        <UpcomingMovies />
      </main>
    </div>
  );
}

export default App;
