import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import PodList from "./components/list/PodList";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App(props) {

  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter>
    <Routes>
      <Search />
      <Route path="/" element={<Home />} />
      <Route path="/profilepage" element={<Profile />} />
      <Route path="/podcastlist" element={<PodList />} />
    </Routes>
    </BrowserRouter>
    </UserProvider>
    </div>
  )
}
