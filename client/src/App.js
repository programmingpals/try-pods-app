import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
// not working: pull episodes for specific list
// const showList = (list) => {
//   console.log(list);
//   return list.map((podcast) => {
//     return (
//       <div>
//         <h1>{podcast.name}</h1>
//         <p>{podcast.description}</p>
//       </div>
//     );
//   });
// };

const addList = (state, setState) => {
  axios
    .post("/api/lists", { user_id: 1, name: "Bestbestbest" })
    .then((response) => {
      console.log(response.data);
      const newList = response.data;
      const lists = [...state.lists, newList];
      setState((prev) => ({ ...prev, lists }));
    });
};

const deleteList = (id) => {
  axios.delete(`/api/lists/${id}`).then((response) => {
    console.log(response.data);
    alert("wow it's gone");
  });
};

const updateList = (id, state, setState) => {
  // not working: trying to use scheduler example to update page properly
  // const list = {
  //   ...state.list[id],
  // };

  // const lists = {
  //   ...state.lists,
  //   [id]: list,
  // };

  axios
    .put(`/api/lists/${id}`, { user_id: 1, name: "BestbestbestBESTTTT" })
    .then((response) => {
      console.log(response.data);
      const updatedList = response.data;
      const lists = [...state.lists, updatedList];
      setState((prev) => ({ ...prev, lists }));
    });
};

function Podcast(props){
  return (
    <div>
      {props.title}
    </div>
  );
}

const showLists = (lists, state, setState) => {
  console.log("lists.attributes:", lists.attributes);
  // console.log("lists.relationships:", lists.relationships)
  return lists.map((list) => {
    console.log("list.attributes.podcasts:", list.attributes.podcasts)

    const podcasts = list.attributes.podcasts.map((podcast)=> {
      return (
        <Podcast
        key={podcast.id}
        title={podcast.title}
        description={podcast.description}
        />
      )
    })

    return (
      <div key={list.attributes.id} id={list.attributes.id}>
        <h1>{list.attributes.name}</h1>
        <p>{list.attributes.description}</p>
        {podcasts}
        <button onClick={() => deleteList(list.attributes.id)}>Delete list</button>
        <button onClick={() => updateList(list.attributes.id, state, setState)}>
          Update list
        </button>
      </div>
    );
  });
};

const client = new ApolloClient({
  uri: "https://api.taddy.org",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/JSON",
    "X-API-KEY": "d031d33e583f3120b0ab7a4388e876c3af91fb82f469f1972792bac9a51ed7445ce29756294f60cd5b869b84f32d2bd21f",
    "X-USER-ID": "346",
  },
});

const taddyCall = () => { 
  client
    .query({
      query: gql`
      {
      getPodcastSeries(name:"The Daily"){
        uuid
        name
        itunesId
        description
        imageUrl
        itunesInfo{
          uuid
          baseArtworkUrlOf(size:640)
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
    const podcastName = result.data.getPodcastSeries.name
    return console.log("podcastName:", podcastName)
    })
    .catch((err) => console.log(err))
  }

export default function App(props) {
  const [state, setState] = useState({
    lists: [],
    list: [],
  });

  useEffect(() => {

    axios.get("/api/lists").then((response) => {
      console.log("REPSONSE", response.data.data);
      // console.log("[0]", response.data.data[0].relationships.podcasts.data);
      const lists = response.data.data;
      setState((prev) => ({ ...prev, lists }));
    })
  }, [])

  return (
    <div className="App">
      {showLists(state.lists, state, setState)}
      {/* {showList(state.list)} */}
      <button onClick={() => addList(state, setState)}>Add new list</button>
      <button onClick={() => taddyCall()}>taddyCall</button>
    </div>
  );
}
