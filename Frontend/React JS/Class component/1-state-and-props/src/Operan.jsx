import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    return (
      <>
        <div>Operan state yang menjadi props: {this.props.food}</div>
        <button onClick={() => this.props.setFood("Apel")}>Ganti makanan</button>
      </>
    )
  }
}
