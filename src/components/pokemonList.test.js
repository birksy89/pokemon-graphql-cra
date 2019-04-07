import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import TestRenderer from 'react-test-renderer';
import PokemonList, { FEED_QUERY } from './PokemonList';

const mocks = [
    {
      request: {
        query: FEED_QUERY,
      },
      result: {
        data: {
            "pokemons": [
                {
                  "id": "UG9rZW1vbjowMDE=",
                  "number": "001",
                  "name": "Bulbasaur",
                  "maxCP": 951,
                  "maxHP": 1071,
                  "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                  "types": [
                    "Grass",
                    "Poison"
                  ]
                },
                {
                  "id": "UG9rZW1vbjowMDI=",
                  "number": "002",
                  "name": "Ivysaur",
                  "maxCP": 1483,
                  "maxHP": 1632,
                  "image": "https://img.pokemondb.net/artwork/ivysaur.jpg",
                  "types": [
                    "Grass",
                    "Poison"
                  ]
                },
                {
                  "id": "UG9rZW1vbjowMDM=",
                  "number": "003",
                  "name": "Venusaur",
                  "maxCP": 2392,
                  "maxHP": 2580,
                  "image": "https://img.pokemondb.net/artwork/venusaur.jpg",
                  "types": [
                    "Grass",
                    "Poison"
                  ]
                },
            ]
        },
      },
    },
  ];

  it('renders without error', () => {
    TestRenderer.create(
      <MockedProvider mocks={mocks}>
        <PokemonList/>
      </MockedProvider>,
    );
  });