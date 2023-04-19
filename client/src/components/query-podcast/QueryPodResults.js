import React, { useContext } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";

export default function QueryPodResults(props) {
  const { queryPod } = useContext(podcastQueryContext);

  const params = useParams()

  return (
    <div className="QueryPodResults">
      <h3>QueryPodResults</h3>
      <p>{queryPod.name}</p>
      <p>{queryPod.description}</p>
      <p>{queryPod.seriesType}</p>
      <p>{queryPod.websiteUrl}</p>
      <p>{queryPod.language}</p>
      <p>{queryPod.authorName}</p>
      <p>{queryPod.isCompleted}</p>
      <p>{queryPod.totalEpisodesCount}</p>
      <img src={`${queryPod.imageUrl}`} style={{ width: "125px" }} />

      <EpListGrid />
    </div>
  );
}
