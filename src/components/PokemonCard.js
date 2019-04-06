import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Tooltip } from 'antd';
import PokemonTypeBadge from './PokemonTypeBadge'

const StyledPokemonCard = styled.div`
  margin-bottom: 3rem;
`;

const StyledImage = styled.img`
  max-height: 200px;
  max-width: 100%;
  width: auto;
  margin: auto;
  padding: 1.5rem;
`;

const StyledPokemonNumber = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #2a5793;
    background-color: #f5f5f5;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    font-weight: bold;
`;

function PokemonCard(props) {
  const { pokemon } = props;
  //console.log(pokemon);

  return (
    <StyledPokemonCard className="card">
      <Link to={`/${pokemon.name}`} className="text-center">
        <StyledImage
          alt={pokemon.name}
          src={pokemon.image}
          className="card-img-top"
        />
      </Link>
      <StyledPokemonNumber>{pokemon.number}</StyledPokemonNumber>
      <div className="card-body">
        <h5 className="card-title text-center">

          <Tooltip title={`ID: ${pokemon.id}`} className="d-flex align-items-center justify-content-center">
            <Icon type="info-circle" style={{ fontSize: '12px' }} className="mr-1" />
          </Tooltip>
          <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>

        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">MaxCP: {pokemon.maxCP}</li>
        <li className="list-group-item">MaxHP: {pokemon.maxHP}</li>
        <li className="list-group-item">Types:
        {
            pokemon.types.map(type => {
              return (
                <PokemonTypeBadge key={type} typeName={type} />
              )
            })
          }
        </li>


      </ul>
      <div className="card-body">
        <Link className="card-link" to={`/${pokemon.name}`}>
          More information
        </Link>
      </div>
    </StyledPokemonCard>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;
