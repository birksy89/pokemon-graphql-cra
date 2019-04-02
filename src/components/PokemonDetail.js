import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class PokemonDetail extends Component {
  render() {
    const { id:name } = this.props.match.params;
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
        }
      }
    `;

    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          //const { pokemons } = data;
          console.log(data);

          return (
            <div>
              <h1>PokeList</h1>

              <div>
                <h1>Details...</h1>
                <h3>ID: {name}</h3>
              </div>

              {/* {pokemons.map((pokemon, index) => {
              return <PokemonCard key={pokemon.id} name={pokemon.name}/>;
            })} */}
            </div>
          );
        }}
      </Query>
    );
  }
}
