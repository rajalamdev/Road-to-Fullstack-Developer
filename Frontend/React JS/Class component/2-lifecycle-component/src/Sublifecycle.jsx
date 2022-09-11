import React, { Component } from 'react'

export default class Sublifecycle extends Component {

    componentWillUnmount(){
        this.props.setMakanan("Apel")
    }

    render() {
        return (
            <div>Sublifecycle</div>
        )
    }
}
