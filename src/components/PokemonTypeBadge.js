import React, { Component } from "react";
import styled from "styled-components";

const colorPicker = function (type) {
  switch (type) {
    case "Grass":
      return "green";
    case "Poison":
      return "purple";
    case "Fire":
      return "red";
    case "Flying":
      return "skyblue";
    case "Water":
      return "royalblue";
    case "Bug":
      return "lawngreen";
    case "Normal":
      return "darkgrey";
    case "Electric":
      return "gold";
    case "Ground":
      return "burlywood";
    case "Fairy":
      return "lightsalmon";
    case "Fighting":
      return "tan";
    case "Psychic":
      return "Purple";
    case "Rock":
      return "sienna";
    case "Steel":
      return "steelblue";
    case "Ice":
      return "darkturquoise";
    case "Ghost":
      return "violet";
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
