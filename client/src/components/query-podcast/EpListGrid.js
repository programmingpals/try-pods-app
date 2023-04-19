import React, { useContext } from "react";
import EpListItem from "./EpListItem";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";

export default function EpListGrid(props) {
  const { episodeList } = useContext(podcastQueryContext);

  const episodes = episodeList.map((episode) => {
    return (
      <EpListItem
        key={episode.uuid}
        name={episode.name}
        duration={episode.duration}
        datePublished={episode.datePublished}
        seasonNumber={episode.seasonNumber}
        description={episode.description}
        imageUrl={episode.imageUrl}
      />
    );
  });
  return (
    <div>
      <h3>EpListGrid</h3>
      {episodes}
    </div>
  );
}