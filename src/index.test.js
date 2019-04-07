import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter } from 'react-router-dom'

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
