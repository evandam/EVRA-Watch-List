import React from 'react';

class Card extends React.Component {
    renderCardImage() {
        if (this.props.img) {
           return (
                <div className="card-image">
                    <figure className={"image " + (this.props.imageClass || "")}>
                        <img src={this.props.img} alt=""/>
                    </figure>
                </div>
            );
        }
    }

    render() {
         return (
            <div className={"card " + (this.props.className || "")}>
                <div className="card-header">
                    <div className="card-header-title">{this.props.title}</div>
                </div>
                {this.renderCardImage()}
                <div className="card-content">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
                <div className="card-footer">
                    {this.props.footerItems}
                </div>
            </div>
        );
    }
}

export default Card;