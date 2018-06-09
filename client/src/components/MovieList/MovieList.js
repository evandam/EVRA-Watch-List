import React from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import Modal from '../Bulma/Modal';
import {post} from '../../utils';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            form: false,
        };
        this.addMovie = this.addMovie.bind(this);
    }

    componentDidMount() {
        fetch('/api/movies')
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({movies: data});
        });
    }

    addMovie(movie) {
        console.log(movie);
        post('/api/movies/add', movie)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({form: false})
            console.log(data);
        });
    }

    renderForm() {
        if (this.state.form) {
            return (
                <Modal onClose={() => this.setState({form: false})}>
                    <MovieForm onSubmit={this.addMovie} />
                </Modal>
            );
        } else {
            return null;
        }
    }

    renderMovies() {
        return this.state.movies.map(movie => {
            return (
                <div key={movie.id} className="column">
                    <Movie title={movie.title} />
                </div>
            );
        });
    }

    render() {
        return (
            <section className="section movie-list">
                <div className="container">
                    <div className="columns">
                        {this.renderMovies()}
                    </div>
                    <button className="button is-primary" onClick={() => this.setState({form: true})}>
                        Add a Movie
                    </button>
                    {this.renderForm()}
                </div>
            </section>
        );
    }
}

export default MovieList;
