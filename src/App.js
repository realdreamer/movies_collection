import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from "./components/Header";

import Home from './components/Home';
import MovieOverview from './components/MovieOverview';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__container">
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
