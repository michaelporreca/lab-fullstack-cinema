import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function MovieDetail(props) {
    
    const [movies, setMovies] = useState([])

    useEffect(async () => {
        let res = await axios.get(`http://localhost:5000/movie`)
        setMovies(res.data)
    }, [])

    return (
        <div className="App">
        <Link to="/"><h1>Cinema Ironack</h1></Link>
        <Link to="/movies" className="button">Check the movies</Link>
        <h2>Movie Detail</h2>
        </div>
    );
}

export default MovieDetail;