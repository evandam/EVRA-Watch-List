import React from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import Modal from '../Bulma/Modal';
import {doGet, doPost, doDelete} from '../../utils';
import './MovieList.css';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            showForm: false,
        };
        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
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

    
    toggleForm() {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    addMovie(movie) {
        doPost('/api/movies', movie)
        .then(data => {
            // add new movie after save, hide form.
            this.toggleForm();
            this.setState(prevState => ({
                movies: [...prevState.movies, data]
            }));
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    deleteMovie(id) {
        doDelete(`/api/movies/${id}`)
        .then(data => {
            this.setState(prevState => ({
                movies: prevState.movies.filter(movie => movie._id !== id)
            }));
            console.log(this.state.movies);
        });
    }

    renderMovies() {
        if (this.state.movies === null) {
            return <button className="button is-static is-loading">Loading Movies...</button>;
        } else {
            return this.state.movies.map(movie =>
                <div key={movie._id} className="column is-one-quarter-desktop is-half-tablet">
                    <Movie id={movie._id} title={movie.title} delete={this.deleteMovie} />
                </div>
            );
        }
    }

    render() {
        return (
            <section className="section movie-list">
                <div className="container">
                    <button className="button is-primary" onClick={this.toggleForm}>
                        Add a Movie
                    </button>
                </div>
                <div className="container">
                    <div className="columns is-multiline">
                        {this.renderMovies()}
                    </div>
                </div>
                <Modal isActive={this.state.showForm} close={this.toggleForm}>
                    <MovieForm onSubmit={this.addMovie} />
                </Modal>
            </section>
        );
    }
}

export default MovieList;
