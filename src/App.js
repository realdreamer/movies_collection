import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './components/Home';
import MovieOverview from './components/MovieOverview';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1 className="app__title">My Movies collection</h1>
        </header>
        <main>
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
