import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import folder from "../../assets/icons/folder.png";

export default function ListChoice(props) {
  const navigate = useNavigate();
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
        navigate(`/podcastlist/${props.id}`);
      })
      .catch((err) => {
        console.log("axios addToList error:", err);
      });
  };

  return (
    <div className="listitem-add">
      <button
        className="unstyled-button"
        onClick={() => addToList(props.podcast)}
      >
        <img src={folder} alt="folder icon" />
        <h4>{props.name}</h4>
      </button>
      <hr className="podcast-hr" />
    </div>
  );
}
