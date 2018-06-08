import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className={"card " + (this.props.className || "")}>
                <div className="card-header">
                    <div className="card-header-title">{this.props.title}</div>
                </div>
                <div className="card-image">
                    <figure className="image">
                        <img src={this.props.img} alt=""/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
                <div className="card-footer">
                    {this.props.footer_items}
                </div>
            </div>
        );
    }
}

export default Card;