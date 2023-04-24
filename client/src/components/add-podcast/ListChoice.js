import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ListChoice(props) {
  const [state, setState] = useState([]);

  const addToList = function (podInfo) {
    axios
      .post(`/api/podcasts`, {
        list_id: props.id,
        pod_uuid: podInfo.uuid,
        title: podInfo.name,
        itunes_id: podInfo.itunesId,
        description: podInfo.description,
        authorName: podInfo.authorName,
        isCompleted: podInfo.isCompleted,
        totalEpisodeCount: podInfo.totalEpisodesCount,
        rssUrl: podInfo.rssUrl,
        image: podInfo.imageUrl,
        release_date: podInfo.datePublished,
        seriesType: podInfo.seriesType,
      })

      .then((response) => {
        // console.log("Axios Post AddToList", response);
      })
      .catch((err) => {
        console.log("axios addToList error:", err);
      });
  };

  return (
    <div className="listitem-add">
      <Link to={`/podcastlist/${props.id}`}>
        <a href="#/" onClick={() => addToList(props.podcast)}>
          <h4>{props.name}</h4>
        </a>
      </Link>
    </div>
  );
}
