import React, { useState, useEffect } from "react";
import PodListItem from "./PodListItem";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PodListGrid(props) {
  const [list, setList] = useState([]);
  const [listLength, setListLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(
    (props) => {
      const getListData = function (id) {
        axios.get(`/api/lists/${id}`).then((response) => {
          setList(response.data.data.attributes.podcasts);
          setListLength(listLength);
        });
      };

      getListData(params.id);
      setIsLoading(false);
    },
    [listLength, params.id]
  );

  const deleteFromList = function (id) {
    axios
      .delete(`/api/podcasts/${id}`)
      .then((response) => {
        setList(
          list.filter((u) => {
            return u.id !== id;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const podcasts = list.map((podcast) => {
    return (
      <PodListItem
        ownerId={props.ownerId}
        attributes={podcast}
        key={podcast.id}
        id={podcast.id}
        uuid={podcast.pod_uuid}
        title={podcast.title}
        description={podcast.description}
        image={podcast.image}
        link={podcast.link}
        totalEpisodeCount={podcast.totalEpisodeCount}
        release_date={podcast.release_date}
        authorName={podcast.authorName}
        seriesType={podcast.seriesType}
        delete={deleteFromList}
      />
    );
  });

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return <div className="podlist-grid">{podcasts}</div>;
}
