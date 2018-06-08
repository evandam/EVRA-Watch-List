import React from 'react';
import './App.css';
import Hero from '../Bulma/Hero';
import MovieList from '../MovieList/MovieList';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hero
                    title="EVRA Watch List"
                    subtitle="What do you want to watch?"
                    className="is-primary" />
                <MovieList />
            </div>
        );
    }
}

export default App;
