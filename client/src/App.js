import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
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

const showLists = (lists, state, setState) => {
  console.log(lists);
  return lists.map((list) => {
    return (
      <div key={list.id} id={list.id}>
        <h1>{list.name}</h1>
        <p>{list.description}</p>
        <button onClick={() => deleteList(list.id)}>Delete list</button>
        <button onClick={() => updateList(list.id, state, setState)}>
          Update list
        </button>
      </div>
    );
  });
};

export default function App(props) {
  const [state, setState] = useState({
    lists: [],
    list: [],
  });

  useEffect(() => {
    Promise.all([axios.get("/api/lists"), axios.get("/api/lists/1")]).then(
      (all) => {
        console.log(all);
        const lists = all[0].data;
        const list = all[1].data;

        setState((prev) => ({ ...prev, lists, list }));
      }
    );
  }, []);

  return (
    <div className="App">
      {showLists(state.lists, state, setState)}
      {/* {showList(state.list)} */}
      <button onClick={() => addList(state, setState)}>Add new list</button>
    </div>
  );
}
