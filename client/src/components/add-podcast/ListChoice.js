import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ListChoice(props) {

  const [state, setState] = useState([])

  const addToList = function (podInfo) {
    console.log("add this to list:", podInfo.uuid)
    axios
      .post(`/api/podcasts/${props.id}`, { 
        list_id: props.id, 
        pod_uuid: podInfo.uuid,
        title: podInfo.title,
        itunes_id: podInfo.itunes_id,
        description: podInfo.description,
        authorName: podInfo.authorName,
        isCompleted: podInfo.isCompleted,
        totalEpisodeCount: podInfo.totalEpisodesCount,
        rssUrl: podInfo.rssUrl,
        image: podInfo.image,
        release_date: podInfo.datePublished
      })

      .then((response) => {
        console.log("Axios Post AddToList", response);
        // const newPodcast = response.data.title;
        // const list = [...state.list, newPodcast];
        // setState((prev) => ({ ...prev, list }));
      })
      .catch((err) => {
        console.log("axios addToList error:", err)
      })
  };

  return (
  <div>
    <ul>
      <Link to={`/podcastlist/${props.id}`}>
        <button onClick={() => addToList(props.podcast)}><h4>{props.name}</h4><p>Add to this list</p></button>
      </Link>
    </ul>
  </div>
  )
}