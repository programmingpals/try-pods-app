import React, { useContext } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function QueryPodResults(props) {
  const { queryPod } = useContext(podcastQueryContext);

  const params = useParams();

  return (
    <div className="podlist">
      <div className="page-header">
        <div className="page-image">
          <img src={queryPod.imageUrl} style={{ width: "125px" }} />
        </div>
        <div className="podlist-details">
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h2>{queryPod.name}</h2>
            </div>
            <div className="podlist-row-right">
              <Link to="/addpodcast" state={{ attributes: queryPod }}>
                <p>Add to list</p>
              </Link>
            </div>
          </div>
          <div className="podlist-row-mix">
            <p>Series type: {queryPod.seriesType}</p>
            <p>Is Completed? {queryPod.isCompleted}</p>
            <p>Total episodes: {queryPod.totalEpisodesCount}</p>
            <p>
              <a href={`${queryPod.websiteUrl}`}>Website</a>
            </p>
          </div>
        </div>
      </div>
      <div className="podlist-description">
        <h4>Description: {queryPod.description}</h4>
      </div>
      <div className="podlist-grid-container">
        <EpListGrid />
      </div>
    </div>
  );
}
