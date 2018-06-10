const express = require('express');
const db = require('../db');

const router = express.Router();
const Movie = db.Movie;

router.get('/', (req, res, next) => {
    Movie.find((err, movies) => {
        if (err) {
            res.send(err);
        }  else {
            res.json(movies);
        }
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    let movie = Movie(req.body);
    movie.save((err, movie) => {
        if (err) {
            res.send(err);
        } else {
            res.json(movie);
        }
    });
});

router.delete('/:movieId', (req, res, next) => {
    Movie.deleteOne({_id: req.params.movieId}, err => {
        if (err) {
            res.send(err);
        } else {
            res.json({success: true});
        }
    });
});

module.exports = router;
