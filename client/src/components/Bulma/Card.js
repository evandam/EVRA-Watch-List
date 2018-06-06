import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className={"card " + (this.props.className || "")}>
                <div className="card-image">
                    <figure className="image">
                        <img src={this.props.img} alt="Placeholder"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="title">{this.props.title}</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;