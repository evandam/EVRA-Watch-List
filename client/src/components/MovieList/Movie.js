import React from 'react';
import Card from '../Bulma/Card';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    
    onDelete() {
        this.props.delete(this.props.id);
    }
    
    render() {
        const controls = [
            <a key="del" className="card-footer-item has-text-danger" onClick={this.onDelete}>Delete</a>,
            <a key="mod" className="card-footer-item" onClick={this.props.modify}>Modify</a>
        ];
    
        return (
            <Card {...this.props}
                className="movie"
                footerItems={controls}
                imageClass="is-3by4">
                {this.props.children}
            </Card>
        );
    }
}

export default Movie;
