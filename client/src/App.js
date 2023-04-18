import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import PodList from "./components/list/PodList";
import QueryPodResults from "./components/query-podcast/QueryPodResults";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import PodcastQueryProvider from "./providers/PodcastQueryProvider";

export default function App(props) {
  return (
    <div className="App">
      <UserProvider>
        <Search />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profilepage" element={<Profile />} />
            <Route path="/podcastlist" element={<PodList />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <PodcastQueryProvider>
        <QueryPodResults />
      </PodcastQueryProvider>
    </div>
  );
}
