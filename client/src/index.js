import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.taddy.org",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/JSON",
    "X-API-KEY": process.env.TADDY_API_KEY,
    "X-USER-ID": process.env.TADDY_USER_ID,
  },
});

// const client = ...

client
  .query({
    query: gql`
    {
      getPodcastSeries(name:"Pod Save America"){
        uuid
        name
        itunesId
        description
        imageUrl
        itunesInfo{
          uuid
          baseArtworkUrlOf(size:640)
        }
            totalEpisodesCount
            genres
            episodes {
                uuid
                name
            }
      }
    }  
    `,
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err))

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
