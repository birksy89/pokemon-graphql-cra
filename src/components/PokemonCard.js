import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPokemonCard = styled.div`
  background-color: #fff;
`;

const StyledImage = styled.img`
  /* position:absolute; */
`;

function PokemonCard(props) {
  const { pokemon } = props;
  console.log(pokemon);

  return (
    <StyledPokemonCard>
      <div className="card">
        <img alt={pokemon.name} src={pokemon.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID: {pokemon.id}</li>
          <li className="list-group-item">number: {pokemon.number}</li>
          <li className="list-group-item">maxCP: {pokemon.maxCP}</li>
          <li className="list-group-item">maxHP: {pokemon.maxHP}</li>
          <li className="list-group-item">types: {pokemon.types}</li>
        </ul>
        <div className="card-body">
          <Link className="card-link" to={`/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        </div>
      </div>
    </StyledPokemonCard>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;
