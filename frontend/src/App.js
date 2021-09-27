import './App.css';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movies from '../src/components/Movies'
import Home from '../src/components/Home'
import MovieDetail from './components/MovieDetail'
import { useState, useEffect } from 'react';

function App() {

  useEffect (async () => {
    let res = await axios.get('http://localhost:5000/movie')
  }, [])

  return (
    <Router>
    <Switch>
      <Route exact path="/movies" component={Movies}>
        <Movies />
      </Route>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route exact path="/movies/:movieId" component={MovieDetail}>
        <MovieDetail />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
