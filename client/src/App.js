import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import PodList from "./components/list/PodList";
import UserProvider from "./providers/UserProvider";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App(props) {
  const showProfile = "Search";

  return (
    <div className="App">
      <UserProvider>
        {showProfile === "Search" && <Search />}
        {showProfile && <Profile />}
        {!showProfile && <PodList />}
      </UserProvider>
    </div>
  );
}
