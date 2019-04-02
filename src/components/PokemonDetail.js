import React, { Component } from 'react'

export default class PokemonDetail extends Component {
  render() {

    const {id} = this.props.match.params;
    console.log(id);

    return (
      <div>
        <h1>Details...</h1>
        <h3>ID: {id}</h3>
      </div>
    )
  }
}
