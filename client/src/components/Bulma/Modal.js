import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    {this.props.children}
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}></button>
            </div>
        );
    }
}

export default Modal;