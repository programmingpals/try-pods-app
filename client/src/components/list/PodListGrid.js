import React, { Component, useState, useEffect, useContext } from "react";
import PodListItem from "./PodListItem";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PodListGrid(props) {
  const [list, setList] = useState([]);

  const params = useParams();

  useEffect((props) => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        setList(response.data.data.attributes.podcasts);
      });
    };

    getListData(params.id);
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
    return (
      <PodListItem
        key={podcast.id}
        id={podcast.id}
        uuid={podcast.pod_uuid}
        title={podcast.title}
        description={podcast.description}
        ownerId={props.ownerId}
        delete={deleteFromList}
      />
    );
  });

  return (
    <div>
      <h1>PodListGrid Component</h1>
      {podcasts}
      {/* <AddListForm addList={addList} /> */}
    </div>
  );
}
