import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonCard from "./PokemonCard";
import Fetching from "./Fetching";

export default class PokemonDetail extends Component {
  render() {
    const { id: name } = this.props.match.params;
    console.log(name);

    const FEED_QUERY = gql`
      query PokeDetails {
        pokemon(name: "${name}") {
          id
          number
          name
          maxCP
          maxHP
          image
          types
          evolutions {
            name
          }
        }
      }
    `;

    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Fetching />;
          if (error) return <div>Error</div>;

          const { pokemon } = data;
          console.log(pokemon);

          if (!pokemon) {
            return <h1>Oh No!</h1>;
          } else {
            return (

                <PokemonCard key={pokemon.id} pokemon={pokemon} />

            );
          }
        }}
      </Query>
    );
  }
}
