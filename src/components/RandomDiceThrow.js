import React from "react";
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    useQuery,
    gql
} from "@apollo/client";
import "../styles.css";

const URL = "https://infinite-lowlands-59039.herokuapp.com/";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: URL
    })
});

export default function RandomDiceThrow() {
    return (
        <div className="RandomDiceThrow">
            <h1>Random Dice Throw</h1>
            <RandomDiceThrowFetch client={client} />
        </div>
    );
}

const RANDOM_DICE_THROW_QUERY = gql`
  query getRandomQuote {
    randomDiceThrow
  }
`;

function RandomDiceThrowFetch() {
    const { data, loading, error, refetch } = useQuery(RANDOM_DICE_THROW_QUERY);
    if (loading) {
        return "Random Dice Throw is loading...";
    }
    if (error) {
        return "Could not load Random Dice Throw!";
    }

    return (
        <>
            <h3>Random dice throw is: {data.randomDiceThrow}</h3>
            <button onClick={() => refetch()}>Get new random dice throw</button>
        </>
    );
}
