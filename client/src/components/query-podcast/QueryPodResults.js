import React, { Component, useState, useEffect, useContext } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import axios from "axios";
import EpListGrid from "./EpListGrid";

export default function QueryPodResults(props) {
  const { queryPod } = useContext(podcastQueryContext);

  return (
    <div className="QueryPodResults">
      <h3>I'm from the QueryPodResults</h3>
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
