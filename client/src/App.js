import React from "react";
import "./App.scss";
import Profile from "./components/profile/Profile";
import PodList from "./components/list/PodList";
import QueryPodResults from "./components/query-podcast/QueryPodResults";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import PodcastQueryProvider from "./providers/PodcastQueryProvider";
import SearchToggleProvider from "./providers/SearchToggleProvider";
import AddPodcast from "./components/add-podcast/AddPodcast";
import Nav from "./components/Nav";
import AddListForm from "./components/profile/AddListForm";

export default function App(props) {
  return (
    <div class="App">
      <UserProvider>
        <SearchToggleProvider>
          <BrowserRouter>
            <Nav />
            <div class="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profilepage/:userId" element={<Profile />} />
                <Route path="/podcastlist" element={<PodList />} />
                <Route path="/addpodcast" element={<AddPodcast />} />
                <Route path="/addlist" element={<AddListForm />} />
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
            </div>
          </BrowserRouter>
        </SearchToggleProvider>
      </UserProvider>
    </div>
  );
}
