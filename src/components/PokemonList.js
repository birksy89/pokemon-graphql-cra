import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const FEED_QUERY = gql`
  query PokeList {
    pokemon(name: "Pikachu") {
      id
      number
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export default class PokemonList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          console.log(data);


          return (
            <div>
              <h1>PokeList</h1>
            </div>
          );
        }}
      </Query>
    );
  }
}
