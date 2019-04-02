import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  console.log(props);

  return (
    <div>
      <Link to={`/${props.name}`}>{props.name}</Link>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default PokemonCard;
