import React from 'react';
import Card from '../Bulma/Card';

class Movie extends React.Component {
render() {
    const controls = [
        <a key="del" className="card-footer-item has-text-danger" onClick={this.props.delete}>Delete</a>,
        <a key="mod" className="card-footer-item" onClick={this.props.modify}>Modify</a>
    ];

    return (
        <Card {...this.props} className="movie" footer_items={controls}>
            {this.props.children}
        </Card>
    );
    }
}

export default Movie;
