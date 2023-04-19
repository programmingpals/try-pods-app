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
import PodResultItem from "./components/search/PodResultItem";

export default function App(props) {
  return (
    <div className="App">
      <UserProvider>
        
        <BrowserRouter>
        {/* <Search /> */}
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/profilepage" element={<Profile />} />
            <Route path="/podcastlist" element={<PodList />} />
            {/* <Route path="/querypodcast" element={
              <PodcastQueryProvider>
                <QueryPodResults />
              </PodcastQueryProvider>} 
            /> */}
            <Route path="/podcastlist/:id" element={<PodList />} />
            {/* <Route path="/search" element={<PodResultItem />} /> */}
            <Route path="/querypodcast/:podId" element={ 
              <PodcastQueryProvider>
                <QueryPodResults />
              </PodcastQueryProvider>} 
              />
          </Routes>
        <Search />
        </BrowserRouter>
      </UserProvider>
      {/* <PodcastQueryProvider>
        <QueryPodResults />
      </PodcastQueryProvider> */}
    </div>
  );
}
