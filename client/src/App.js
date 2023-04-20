import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import PodList from "./components/list/PodList";
import QueryPodResults from "./components/query-podcast/QueryPodResults";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./components/pages/Home";
import PodcastQueryProvider from "./providers/PodcastQueryProvider";
import AddPodcast from "./components/add-podcast/AddPodcast";
import Nav from "./components/Nav";

export default function App(props) {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Nav />
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profilepage/:userId" element={<Profile />} />
            <Route path="/podcastlist" element={<PodList />} />
            <Route path="/addpodcast" element={<AddPodcast />} />
            <Route path="/podcastlist/:id" element={<PodList />} />
            <Route
              path="/querypodcast/:podId"
              element={
                <PodcastQueryProvider>
                  <QueryPodResults />
                </PodcastQueryProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
