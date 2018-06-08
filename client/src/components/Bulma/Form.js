import React from 'react';

class ControlField extends React.Component {
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class InputField extends React.Component {
    render() {
        return (
            <ControlField {...this.props}>
                <input className="input"
                    type={this.props.type || "text"}
                    placeholder={this.props.label}
                    name={this.props.name} />
            </ControlField>
        );
    }
}

class TextArea extends React.Component {
    render() {
        return (
            <ControlField {...this.props}>
                <textarea className="textarea"
                    placeholder={this.props.label} />
            </ControlField>
        );
    }
}

class DropDown extends React.Component {
    render() {
        return (
            <ControlField {...this.props}>
                <div className="select">
                    <select>
                        {this.props.options.map(val =>
                            <option key={val}>
                                {val}
                            </option>
                        )}
                    </select>
                </div>
            </ControlField>
        );
    }
}

export {
    InputField,
    DropDown,
    TextArea,
}