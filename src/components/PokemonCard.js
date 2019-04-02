import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PokemonCard(props) {

  const {pokemon} = props;
  console.log(pokemon);

  return (
    <div className="card">
      <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>

      <img alt={pokemon.name} src={pokemon.image} />
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;
