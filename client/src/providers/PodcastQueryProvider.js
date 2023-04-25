import React, { createContext, useState, useEffect, useContext } from "react";
import { gql } from "@apollo/client";
import axios from "axios";
import { useParams } from "react-router-dom";
import { client } from "../taddyClient";
import { userContext } from "./UserProvider";

export const podcastQueryContext = createContext([]);

export default function PodcastQueryProvider(props) {
  const [queryPod, setQueryPod] = useState([]);
  const [recommendByFriend, setRecommendByFriend] = useState([]);
  const [podcastMatch, setPodcastMatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(userContext);
  const params = useParams();

  useEffect(() => {
    const getPodcastData = function (uuid) {
      return client
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
              rssUrl
              episodes{
                uuid
                audioUrl
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
        .then((response) => {
          return response.data.getPodcastSeries;
        })
        .catch((err) => console.log(err));
    };

    const getRecommendByFriend = function (uuid) {
      return axios
        .get(`/api/users/${user}/recommends/${uuid}`)
        .then((response) => {
          return response.data;
        });
    };

    const getListCheck = function (uuid) {
      return axios.get(`/api/users/${user}/podcasts`).then((response) => {
        return response.data;
      });
    };

    const apiCalls = function (uuid) {
      return Promise.all([
        getPodcastData(uuid),
        getRecommendByFriend(uuid),
        getListCheck(uuid),
      ]).then((results) => {
        const podcastData = results[0];
        const recommendByFriend = results[1].friends;
        const podcastsByUser = results[2];

        let podcastMatch = [];
        podcastsByUser.map((podcast) => {
          if (podcast.pod_uuid === uuid) {
            podcastMatch.push([podcast.list_id]);
          }
        });

        setQueryPod(podcastData);
        setRecommendByFriend(recommendByFriend);
        setPodcastMatch(podcastMatch);
        setIsLoading(false);
      });
    };

    apiCalls(`${params.podId}`);
  }, [user, params.podId]);

  const value = {
    queryPod,
    episodeList: (queryPod && queryPod.episodes) || [],
    recommendByFriend,
    podcastMatch,
  };

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <podcastQueryContext.Provider value={value}>
      {props.children}
    </podcastQueryContext.Provider>
  );
}
