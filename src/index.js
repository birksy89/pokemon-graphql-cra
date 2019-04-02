import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from 'graphql-tag'

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

client.query({
    query: gql`
    {
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
    `
  }).then(response => console.log(response))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
