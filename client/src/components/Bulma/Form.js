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
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value} />
            </ControlField>
        );
    }
}

class TextArea extends React.Component {
    render() {
        return (
            <ControlField {...this.props}>
                <textarea className="textarea"
                    placeholder={this.props.label}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value} />
            </ControlField>
        );
    }
}

class Select extends React.Component {
    render() {
        return (
            <ControlField {...this.props}>
                <div className="select">
                    <select name={this.props.name} 
                        onChange={this.props.onChange}
                        value={this.props.value}>
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
    Select,
    TextArea,
}