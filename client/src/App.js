import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
import PodList from "./components/list/PodList";
import QueryPodResults from "./components/query-podcast/QueryPodResults";
import UserProvider from "./providers/UserProvider";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import PodcastQueryProvider from "./providers/PodcastQueryProvider";

export default function App(props) {
  // const showProfile = false;

  return (
    <div className="App">
      <UserProvider>
        {/* {showProfile && <Profile />}
        {showProfile && <PodList />} */}
      </UserProvider>
      <PodcastQueryProvider>
        <QueryPodResults />
      </PodcastQueryProvider>
    </div>
  );
}
