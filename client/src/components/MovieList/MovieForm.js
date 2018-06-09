import React from 'react';
import {InputField, Select, TextArea} from '../Bulma/Form';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        const locations = ['Netflix', 'HBO', 'Hulu', 'Other'];
        this.state = {
            locations: locations,
            'title': '',
            'location': locations[0],
            'comment': ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.state.title,
            location: this.state.location,
            comment: this.state.comment
        };
        this.props.onSubmit(data);
    }

    render() {
        return (
            <form className="box" onSubmit={this.handleSubmit}>
                <InputField label="Movie Title" name="title"
                    onChange={this.handleChange}
                    value={this.state.title} />

                <Select label="Location" name="location"
                    options={this.state.locations}
                    onChange={this.handleChange}
                    value={this.state.location} />

                <TextArea label="Comment" name="comment"
                    onChange={this.handleChange}
                    value={this.state.comment} />

                <div className="field">
                    <div className="control">
                        <button className="button is-primary" type="submit">
                            Add Movie
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default MovieForm;