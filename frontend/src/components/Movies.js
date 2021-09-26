import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Movies() {
    return (
      <div className="App">
        <Link to="/"><h1>Cinema Ironack</h1></Link>
        <Link to="/movies" className="button">Check the movies</Link>
        <h2>Movies</h2>
      </div>
    );
  }

  export default Movies;