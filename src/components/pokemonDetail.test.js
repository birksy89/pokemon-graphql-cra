import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import TestRenderer from 'react-test-renderer';
import gql from "graphql-tag";
import PokemonDetail, { FEED_QUERY } from './PokemonDetail';

const mocks = [
  {
    request: {
      query: gql`
      query PokeDetails {
        pokemon {
          id
          number
          name
          maxCP
          maxHP
          image
          types
          evolutions {
            id
            number
            name
            maxCP
            maxHP
            image
            types
          }
        }
      }
    `,
      variables: { name: 'Ditto' },
    },
    result: {
      data: {
        "pokemon": {
          "id": "UG9rZW1vbjoxMzI=",
          "number": "132",
          "name": "Ditto",
          "maxCP": 809,
          "maxHP": 919,
          "image": "https://img.pokemondb.net/artwork/ditto.jpg",
          "types": [
            "Normal"
          ],
          "evolutions": null
        }
      },
    },
  },
];

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks}>
      <PokemonDetail  match={{params: {id: "UG9rZW1vbjoxMzI="} }}/>
    </MockedProvider>,
  );
});