import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero
          title="EVRA Watch List"
          subtitle="What do you want to watch?"
          className="is-primary" />
      </div>
    );
  }
}

export default App;
