import React from 'react';
import {InputField, DropDown, TextArea} from '../Bulma/Form';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: ['Netflix', 'HBO', 'Hulu', 'Other']
        };
    }

    render() {
        return (
            <form>
                <InputField label="Movie Title" name="title" />
                <DropDown label="Location" name="location"
                    options={this.state.locations} />
                <TextArea label="Comment" name="comment" />
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">
                            Add a Movie
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default MovieForm;