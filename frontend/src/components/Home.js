import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Movies from './Movies'

function Home(props) {
    const [movie, setMovie] = useState([])

    useEffect(async () => {
        let res = await axios.get(`http://localhost:5000/movie`)
        setMovie(res.data)
    }, [])

    return (
      <div className="App">
        <Link to="/"><h1>Cinema Ironack</h1></Link>
        <Link to="/movies" className="button">Check the movies</Link>
      </div>
    );
  }

  export default Home;