import React, { Component, useState, useEffect, useContext } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import axios from "axios";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";

export default function QueryPodResults(props) {
  const { queryPod } = useContext(podcastQueryContext);

  const params = useParams()
  console.log("params from the querypodresults", params)

  // if (!queryPod) {
  //   return null
  // }

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
