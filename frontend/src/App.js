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

function App() {
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
