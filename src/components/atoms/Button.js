import React, { Component } from 'react';


class Button extends Component {
    render(props) {
        return (
            <button
                style={this.props.style}
                className={"action-login-primary"}
                onClick={this.props.action} >
                {this.props.title}
            </button>)
    }
}

export default Button;