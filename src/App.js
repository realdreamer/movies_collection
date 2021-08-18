import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import useFetch from './hooks/useFetch';

import { URLS } from './consts';
import './App.css';

import Home from './components/Home';
import MovieOverview from './components/MovieOverview';

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
    <Router>
      <div className="app">
        <header>
          <h1 className="app__title">My Movies collection</h1>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movie/:id">
              <MovieOverview />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
