import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from 'styled-components'


const StyledPokemonCard = styled.div`
  background-color:#fff;

`

const StyledImage = styled.img`
  /* position:absolute; */

`



function PokemonCard(props) {

  const {pokemon} = props;
  console.log(pokemon);

  return (
    <StyledPokemonCard>

      <h2>
      <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
      </h2>

    <p>ID: {pokemon.id}</p>
    <p>number: {pokemon.number}</p>
    <p>maxCP: {pokemon.maxCP}</p>
    <p>maxHP: {pokemon.maxHP}</p>
    <p>types: {pokemon.types}</p>
     

      <StyledImage alt={pokemon.name} src={pokemon.image} />
    </StyledPokemonCard>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;
