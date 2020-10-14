import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.changeName}>Click Me</button>
            </div>
        )
    }
}
