import React, { Component } from "react";
import styled from "styled-components";

const colorPicker = function(type) {
  switch (type) {
    case "Grass":
      return "green";
    case "Poison":
      return "purple";
    default:
      return "";
  }
};

const StyledPokemonBadge = styled.span`
  background-color: ${props => colorPicker(props.typeName)};
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
