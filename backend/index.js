const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const Movie = require('./models/Movie');

mongoose
.connect(`mongodb://localhost:27017/movies`)
.then(self => console.log(`Connected to the database: "${self.connection.name}"`))

const app = express();
app.use(cors()) //for cors 
app.use(express.json()); //for req.body

app.get('/movie', async (req, res) => {
    let allMovies = await Movie.find()
    res.json(allMovies)
})

app.listen(process.env.PORT || 5000)