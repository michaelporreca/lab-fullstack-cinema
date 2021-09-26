import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Movies(props) {

  const [movies, setMovie] = useState([])

  useEffect(async () => {
      let res = await axios.get(`http://localhost:5000/movie`)
      setMovie(res.data)
  }, [])

  const AllMovies = () => {
    return movies.map(eachMovie => {
      return (
      <li><img src={eachMovie.image} /> {eachMovie.title}</li>
      )
    })
  }

    return (
      <div className="App">
        <Link to="/"><h1>Cinema Ironack</h1></Link>
        <Link to="/movies" className="button">Check the movies</Link>
        <h2>Movies</h2>
        <ul><AllMovies /></ul>.
      </div>
    );
  }

  export default Movies;