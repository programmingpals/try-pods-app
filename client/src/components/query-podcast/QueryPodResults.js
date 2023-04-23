import React, { useContext, useState } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PodPlayer from "./PodPlayer";
import RecommendByFriend from "./RecommendsByFriend";
import speakerIcon from "../../assets/icons/speakericon.png";

export default function QueryPodResults(props) {
  const [playerSelected, setPlayerSelected] = useState(false);

  const { queryPod, recommendByFriend } = useContext(podcastQueryContext);

  const params = useParams();

  const recommends = recommendByFriend.map((rec) => {
    return (
      <RecommendByFriend
        key={rec.id}
        avatar={rec.avatar}
        id={rec.id}
        name={rec.first_name}
      />
    );
  });

  const seriesType = `${queryPod.seriesType}`;
  const seriesTypeLowerCase = seriesType.toLowerCase();
  const seriesTypeTitleCase =
    seriesTypeLowerCase.charAt(0).toUpperCase() + seriesTypeLowerCase.slice(1);

  return (
    <div className="podlist">
      <div className="page-header podcast-header">
        <div className="page-image">
          <img src={queryPod.imageUrl} style={{ width: "125px" }} />
        </div>
        <div className="podlist-details">
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h2>{queryPod.name}</h2>
            </div>
            <div className="podlist-row-right">
              <Link
                to="/addpodcast"
                className="button-add"
                state={{ attributes: queryPod }}
              >
                <p>Add to list +</p>
              </Link>
            </div>
          </div>
          <hr className="podcast-hr" />
          <div className="podlist-row-mix">
            <p>Series type: {seriesTypeTitleCase}</p>
            <p>Total episodes: {queryPod.totalEpisodesCount}</p>
            <button>
              <a href={`${queryPod.websiteUrl}`}>Website</a>
            </button>
          </div>
          <hr className="podcast-hr" />
          <div className="podlist-row">
            <div className="podlist-row-left">
              <p>Your friends are followers: </p>
              {recommends}
            </div>
            <div className="podlist-row-right">
              <button
                className="button"
                onClick={() => {
                  if (!playerSelected) {
                    setPlayerSelected(true);
                  } else {
                    setPlayerSelected(false);
                  }
                }}
              >
                {playerSelected ? "Close Player" : "Open Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="podlist-description">
        <h4>{queryPod.description}</h4>
      </div>
      {playerSelected && (
        <PodPlayer itunesId={queryPod.itunesId} height={"500"} />
      )}
      <div class="podlist-grid-container">
        <EpListGrid podImage={queryPod.imageUrl} />
      </div>
    </div>
  );
}
