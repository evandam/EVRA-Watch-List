const express = require('express');
const db = require('../db');

const router = express.Router();
const Movie = db.Movie;

function getAllMovies(req, res) {
    Movie.find((err, movies) => {
        if (err) {
            res.send(err);
        }  else {
            res.json(movies);
        }
    });
}

function _saveMovie(movie, res) {
    movie.save((err, savedMovie) => {
        if (err) {
            res.send(err);
        } else {
            res.json(savedMovie);
        }
    });
}

function addMovie(req, res) {
    const movie = Movie(req.body);
    movie.status = 'new';
    _saveMovie(movie, res);
}

function updateMovieStatus(req, res) {
    Movie.findById(req.params.movieId, (err, movie) => {
        movie.status = req.params.status;
        _saveMovie(movie, res);
    });
}

router.get('/', getAllMovies);
router.post('/', addMovie);
router.post('/:movieId/:status', updateMovieStatus);

module.exports = router;
