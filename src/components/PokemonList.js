import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonCard from './PokemonCard';

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

function FetchingState(){
  return(
    <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
  )
}

export default class PokemonList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FetchingState/>;
          if (error) return <div>Error</div>;

          const { pokemons } = data;
          console.log(pokemons);

          return (
            <div className="container">
              <h1>PokeList</h1>

              <FetchingState/>

              <div className="row">



                {pokemons.map((pokemon, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-lg-4">

                      <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    </div>

                  )
                })}
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
