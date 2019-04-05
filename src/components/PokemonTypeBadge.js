import React, { Component } from "react";
import styled from "styled-components";

const StyledPokemonBadge = styled.span`
  background-color: ${props => (props.typeName === "Grass" ? "green" : "red")};
`;

export default class PokemonTypeBadge extends Component {
  render() {
    return (
      <StyledPokemonBadge
        typeName={this.props.typeName}
        className="badge badge-primary ml-1"
      >
        {this.props.typeName}
      </StyledPokemonBadge>
    );
  }
}
