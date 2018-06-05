import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section className={"hero " + (this.props.className)}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{this.props.title}</h1>
                        <h2 className="subtitle">{this.props.subtitle}</h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;