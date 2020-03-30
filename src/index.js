import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import App from "./components/App";
import RandomDiceThrow from "./components/RandomDiceThrow";

const URL = "https://examples.devmastery.pl/random-stuff/graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL
  }),
  queryDeduplication: false
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    <RandomDiceThrow />
  </React.StrictMode>,
  rootElement
);
