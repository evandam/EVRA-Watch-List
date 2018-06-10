const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/evra'
mongoose.connect(mongoURI);

const Movie = mongoose.model('Movie', {
    title: String,
    source: String,
    comment: String,
    watched: Boolean,
});

module.exports = {
    Movie: Movie
};