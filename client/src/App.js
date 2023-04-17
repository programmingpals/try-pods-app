import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App(props) {
  const [state, setState] = useState({
    lists: [],
    list: [],
    podcast: [],
  });

  useEffect(() => {
    axios.get("/api/lists").then((response) => {
      console.log("RESPONSE", response.data.data);
      const lists = response.data.data;
      setState((prev) => ({ ...prev, lists }));
    });
  }, []);

  return (
  <div className="App"><Profile attributes={state.lists}/>
  </div>
  );
}

