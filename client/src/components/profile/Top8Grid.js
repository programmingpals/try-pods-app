import React from "react";
import Top8Item from "./Top8Item";

export default function Top8Grid(props) {
  const podcastsList = props.top8.attributes.podcasts;

  const podcasts = podcastsList.map((podcast) => {
    return (
      <Top8Item
        key={podcast.id}
        id={podcast.id}
        uuid={podcast.pod_uuid}
        image={podcast.image}
      />
    );
  });

  return <div className="top8-grid">{podcasts}</div>;
}
