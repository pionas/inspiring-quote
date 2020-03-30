import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <RandomQuote />
    </div>
  );
}

const RANDOM_QUOTE_QUERY = gql`
  query getRandomQuote {
    randomQuote {
      text
      author
    }
  }
`;

function RandomQuote() {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY);
  if (loading) {
    return "Quote is loading...";
  }
  if (error) {
    return "Could not load quote!";
  }
  const { text, author } = data.randomQuote;

  return (
    <>
      <Quote text={text} author={author} />
      <button onClick={() => refetch()}>Get new quote</button>
    </>
  );
}

function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}
