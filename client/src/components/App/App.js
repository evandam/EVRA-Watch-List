import React, { Component } from 'react';
import './App.css';
import Hero from '../Bulma/Hero';
import Movie from '../Movie/Movie';

class App extends Component {
  render() {
    return (
      <div>
        <Hero
          title="EVRA Watch List"
          subtitle="What do you want to watch?"
          className="is-primary" />

        <div className="container">
          <div className="columns">
            <Movie
              className="column is-one-quarter"
              title="Harry Potter"
              img="http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg">
              Yay!!
            </Movie>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
