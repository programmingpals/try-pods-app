import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
import PodList from "./components/list/PodList";
import UserProvider from "./providers/UserProvider";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App(props) {
  // const [state, setState] = useState({
  //   lists: [],
  //   list: [],
  //   podcast: [],
  // });

  // useEffect(() => {
  //   axios.get("/api/lists").then((response) => {
  //     console.log("RESPONSE", response.data.data);
  //     const lists = response.data.data;
  //     setState((prev) => ({ ...prev, lists }));
  //   });
  // }, []);
  const showProfile = false;

  return (
    <div className="App">
      <UserProvider>
        {showProfile && <Profile />}
        {!showProfile && <PodList />}
      </UserProvider>
    </div>
  );
}
