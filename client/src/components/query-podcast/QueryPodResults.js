import React, { useContext } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function QueryPodResults(props) {
  const { queryPod } = useContext(podcastQueryContext);

  const params = useParams();

  return (
    <div class="podlist">
      <div class="page-header">
        <div class="page-image">
          <img src={queryPod.imageUrl} style={{ width: "125px" }} />
        </div>
        <div class="podlist-details">
          <div class="podlist-row">
            <div class="podlist-row-left">
              <h2>{queryPod.name}</h2>
            </div>
            <div class="podlist-row-right">
              <Link to="/addpodcast" state={{ attributes: queryPod }}>
                <p>Add to list</p>
              </Link>
            </div>
          </div>
          <div class="podlist-row-mix">
            <p>Series type: {queryPod.seriesType}</p>
            <p>Is Completed? {queryPod.isCompleted}</p>
            <p>Total episodes: {queryPod.totalEpisodesCount}</p>
            <p>
              <a href={`${queryPod.websiteUrl}`}>Website</a>
            </p>
          </div>
        </div>
      </div>
      <div class="podlist-description">
        <h4>Description: {queryPod.description}</h4>
      </div>
      <div class="podlist-grid-container">
        <EpListGrid />
      </div>
    </div>
  );
}
