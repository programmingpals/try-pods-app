import React, { Component, useState, useEffect, useContext } from "react";
import PodListItem from "./PodListItem";
import axios from "axios";

export default function PodListGrid(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        console.log("list/id", response.data.data.attributes.podcasts);
        setList(response.data.data.attributes.podcasts);
      });
    };

    getListData(1);
  }, []);

  const deleteFromList = function (id) {
    axios
      .delete(`/api/podcasts/${id}`)
      .then((response) => {
        setList(
          list.filter((u) => {
            return u.id !== id;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const podcasts = list.map((podcast) => {
    console.log(podcast);
    return (
      <PodListItem
        key={podcast.id}
        id={podcast.id}
        title={podcast.title}
        description={podcast.description}
        delete={deleteFromList}
      />
    );
  });

  return (
    <div>
      <h1>Hello from PodListGrid!!!!!</h1>
      {podcasts}
      {/* <AddListForm addList={addList} /> */}
    </div>
  );
}
