const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/evra');

const Movie = mongoose.model('Movie', {
    title: String,
    source: String,
    comment: String,
    watched: Boolean,
});

module.exports = {
    Movie: Movie
};