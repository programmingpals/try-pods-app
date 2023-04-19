import React, { createContext, useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { client } from "../taddyClient";

export const podcastQueryContext = createContext([]);

export default function PodcastQueryProvider(props) {
  const [queryPod, setQueryPod] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getPodcastData = function (uuid) {
      client
        .query({
          query: gql`
          {
            getPodcastSeries(uuid:"${uuid}"){
              uuid
              name
              itunesId
              description (shouldStripHtmlTags: true)
              seriesType
              websiteUrl
              language
              authorName
              isCompleted
              totalEpisodesCount
              imageUrl
              childrenHash
              episodes{
                uuid
                name
                duration
                datePublished
                seasonNumber
                description (shouldStripHtmlTags: true)
                imageUrl
              }
              itunesInfo{
                uuid
                publisherName
              }
            }
          }          
          `,
        })
        .then((result) => {
          const podcast = result.data.getPodcastSeries;
          setQueryPod(podcast);
        })
        .catch((err) => console.log(err));
    };

    getPodcastData(`${params.podId}`);
  }, []);

  const value = {
    queryPod,
    episodeList: (queryPod && queryPod.episodes) || [],
  };

  return (
    <podcastQueryContext.Provider value={value}>
      {props.children}
    </podcastQueryContext.Provider>
  );
}
