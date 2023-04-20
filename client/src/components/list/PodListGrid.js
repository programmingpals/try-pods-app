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
        ownerId={props.ownerId}
        key={podcast.id}
        id={podcast.id}
        uuid={podcast.pod_uuid}
        title={podcast.title}
        description={podcast.description}
        image={podcast.image}
        link={podcast.link}
        totalEpisodeCount={podcast.totalEpisodeCount}
        release_date={podcast.release_date}
        authorName={podcast.authorName}
        delete={deleteFromList}
      />
    );
  });

  return (
    <div class= "podlist-grid">
      {podcasts}
    </div>
  );
}
