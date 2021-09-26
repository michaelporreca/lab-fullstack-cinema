import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Movies from './Movies'

function Home(props) {
    return (
      <div className="App">
        <Link to="/"><h1>Cinema Ironack</h1></Link>
        <Link to="/movies" className="button">Check the movies</Link>
      </div>
    );
  }

  export default Home;