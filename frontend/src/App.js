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
import { useState, useEffect } from 'react';

function App() {

  useEffect (async () => {
    let res = await axios.get('http://localhost:5000/movie')
  }, [])

  return (
    <Router>
    <Switch>
    <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
