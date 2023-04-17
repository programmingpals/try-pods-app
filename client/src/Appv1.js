import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// LISTS CRUD

// hardcoded list that adds with a button click, needs reload to show
// couldn't quite get the reload working
const addList = (state, setState) => {
  axios
    .post("/api/lists", { user_id: 1, name: "Bestbestbest" })
    .then((response) => {
      console.log("POST API", response.data);
      const newList = response.data;
      const lists = [...state.lists, newList];
      setState((prev) => ({ ...prev, lists }));
    });
};

// the button in the render is hardcoded to set this to list_id 3
// also couldn't get it to reload so only showing alert
// by the time we added more with the podcasts, this no longer worked
const deleteList = (id) => {
  axios.delete(`/api/lists/${id}`).then((response) => {
    console.log(response.data);
    alert("wow it's gone");
  });
};

// this only worked before we started adding some podcast stuff and then this broke, even with reload
const updateList = (id, state, setState) => {
  axios
    .put(`/api/lists/${id}`, { user_id: 1, name: "BestbestbestBESTTTT" })
    .then((response) => {
      console.log(response.data);
      const updatedList = response.data;
      const lists = [...state.lists, updatedList];
      setState((prev) => ({ ...prev, lists }));
    });
};

// building Podcast HTML to pull into ShowLists
// not likely how we'll structure it moving forward anway
function Podcast(props) {
  return (
    <div id={props.key}>
      {props.title}
      <button onClick={() => deleteFromList(3)}>Delete Podcast</button>
    </div>
  );
}

// compile list of lists, including podcasts within the lists
// once we added podcasts things got ugly quickly
const showLists = (lists, state, setState) => {
  console.log("lists.attributes:", lists.attributes);
  // console.log("lists.relationships:", lists.relationships)
  return lists.map((list) => {
    console.log("list.attributes.podcasts:", list.attributes.podcasts);
    const podcasts = list.attributes.podcasts.map((podcast) => {
      return (
        <Podcast
          key={podcast.id}
          title={podcast.title}
          description={podcast.description}
        />
      );
    });

    return (
      <div key={list.attributes.id} id={list.attributes.id}>
        <h1>{list.attributes.name}</h1>
        <p>{list.attributes.description}</p>
        {podcasts}
        <button onClick={() => deleteList(3)}>Delete list</button>
        <button onClick={() => updateList(list.attributes.id, state, setState)}>
          Update list
        </button>
      </div>
    );
  });
};

// PODCASTS CRUD

// very focused on a hardcoded title provided by Taddy
const addToList = function (state, setState) {
  axios
    .post("/api/podcasts", { list_id: 1, title: state.podcast })
    .then((response) => {
      console.log("Add to list", response.data.title);
      const newPodcast = response.data.title;

      const list = [...state.list, newPodcast];
      setState((prev) => ({ ...prev, list }));
    });
};

// hardcoded to delete id 3
// another one where it would only show alert and update on reload
const deleteFromList = function (id, state, setState) {
  axios.delete(`/api/podcasts/${id}`).then((response) => {
    console.log(response.data);
    alert("wow it's gone");
  });
};

// TADDDDDYYYYYYYY
const client = new ApolloClient({
  uri: "https://api.taddy.org",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/JSON",
    "X-API-KEY": process.env.TADDY_API_KEY,
    "X-USER-ID": process.env.TADDY_USER_ID,
  },
});

// specific call to only get a single series and return a single name to test with
const taddyCall = (setState) => {
  client
    .query({
      query: gql`
        {
          getPodcastSeries(name: "The Daily") {
            uuid
            name
            itunesId
            description
            imageUrl
            itunesInfo {
              uuid
              baseArtworkUrlOf(size: 640)
            }
            totalEpisodesCount
            genres
            episodes {
              uuid
              name
            }
          }
        }
      `,
    })
    .then((result) => {
      const podcast = result.data.getPodcastSeries.name;
      setState((prev) => ({ ...prev, podcast }));
      return console.log("podcastName:", podcast);
    })
    .catch((err) => console.log(err));
};

export default function App(props) {
  const [state, setState] = useState({
    lists: [],
    list: [],
    podcast: [],
  });

  useEffect(() => {
    axios.get("/api/lists").then((response) => {
      console.log("REPSONSE", response.data.data);
      const lists = response.data.data;
      setState((prev) => ({ ...prev, lists }));
    });
  }, []);

  return (
    <div className="App">
      {showLists(state.lists, state, setState)}
      <button onClick={() => addList(state, setState)}>Add new list</button>
      <button onClick={() => taddyCall(setState)}>taddyCall</button>
      <p>{state.podcast}</p>
      <button onClick={() => addToList(state, setState)}>Add to List</button>
    </div>
  );
}
