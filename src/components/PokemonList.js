import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonCard from "./PokemonCard";
import Fetching from "./Fetching";

export const FEED_QUERY = gql`
  query PokeList {
    pokemons(first: 250) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
`;

export default class PokemonList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Fetching />;
          if (error) return <div>Error</div>;

          const { pokemons } = data;
          //console.log(pokemons);

          return (
            <div className="row justify-content-center">
              {pokemons.map((pokemon, index) => {
                return (
                  <div key={pokemon.id} className="col-12 col-sm-6 col-lg-4">
                    <PokemonCard  pokemon={pokemon} />
                  </div>
                );
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}
