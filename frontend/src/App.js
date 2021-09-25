import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

function Home() {
  return (
    <div className="App">
      <Link to="/"><h1>Cinema Ironack</h1></Link>
      <Link to="/movies" className="button">Check the movies</Link>
    </div>
  );
}

function Movies() {
  return (
    <div className="App">
      <Link to="/"><h1>Cinema Ironack</h1></Link>
      <Link to="/movies" className="button">Check the movies</Link>
      <h2>Movies</h2>
    </div>
  );
}

export default App;
