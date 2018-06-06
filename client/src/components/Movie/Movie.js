import React, { Component } from 'react';
import Card from '../Bulma/Card';

class Movie extends Component {
  render() {
    return (
      <Card {...this.props}>
        {this.props.children}
      </Card>
    );
  }
}

export default Movie;
