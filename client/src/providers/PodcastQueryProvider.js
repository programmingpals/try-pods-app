import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const podcastQueryContext = createContext();

export default function PodcastQueryProvider(props) {
  const [queryPod, setQueryPod] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);

  const client = new ApolloClient({
    uri: "https://api.taddy.org",
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/JSON",
      "X-API-KEY":
        "899e058f600526f593e417216f5f5a0c56e992807f36b2187bfb57edac4e01a95c42dac8c884ff2113ddb63d7c522a4004",
      "X-USER-ID": "345",
    },
  });

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
          setEpisodeList(podcast.episodes);
        })
        .catch((err) => console.log(err));
    };

    getPodcastData("2cf30b44-6965-4485-bded-77173f835077");
  }, []);

  const value = {
    queryPod,
    episodeList,
  };
  return (
    <podcastQueryContext.Provider value={value}>
      {props.children}
    </podcastQueryContext.Provider>
  );
}
