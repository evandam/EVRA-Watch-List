import React from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {id: 1, title: "Harry Potter"},
                {id: 2, title: "Fargo"},
                {id: 3, title: "Die Hard"},
            ]
        };
    }

    render() {
        const movies = this.state.movies.map(movie =>
            <div key={movie.id} className="column">
                <Movie title={movie.title} />
            </div>
        );

        return (
            <section className="section movie-list">
                <div className="container">
                    <div className="columns">
                        {movies}
                    </div>
                    <MovieForm />
                </div>
            </section>
        );
    }
}

export default MovieList;
