import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/profile/Profile";
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

function App() {
  // const showProfile = false;

  // return (
  //   <div className="App">
  //     <UserProvider>
  //       {showProfile && <Profile />}
  //       {!showProfile && <PodList />}
  //     </UserProvider>
  //   </div>
  // );
return (
  
  <UserProvider>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profilepage" element={<Profile />} />
    <Route path="/podcastlist" element={<PodList />} />

  </Routes>
  </BrowserRouter>
  </UserProvider>

)


}

export default App
