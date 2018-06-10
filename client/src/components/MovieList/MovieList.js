import React from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import Modal from '../Bulma/Modal';
import {doGet, doPost, doDelete} from '../../utils';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            form: false,
        };
        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    componentDidMount() {
        doGet('/api/movies')
        .then(data => {
            this.setState({movies: data});
        })
        .catch(error => {
            console.error(error);
        });
    }

    addMovie(movie) {
        doPost('/api/movies', movie)
        .then(data => {
            // add new movie after save, hide form.
            this.setState(prevState => ({
                form: false,
                movies: [...prevState.movies, data]
            }));
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    deleteMovie(id) {
        doDelete('/api/movies', id)
        .then(data => {
            this.setState(prevState => ({
                movies: prevState.movies.filter(movie => movie._id !== id)
            }));
            console.log(this.state.movies);
        });
    }

    renderForm() {
        if (this.state.form) {
            return (
                <Modal onClose={() => this.setState({form: false})}>
                    <MovieForm onSubmit={this.addMovie} />
                </Modal>
            );
        }
    }

    renderMovies() {
        return this.state.movies.map(movie => {
            return (
                <div key={movie._id} className="column">
                    <Movie id={movie._id} title={movie.title} delete={this.deleteMovie} />
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
