import React, { useContext, useState } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PodPlayer from "./PodPlayer";
import RecommendByFriend from "./RecommendsByFriend";

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
              <Link
                to="/addpodcast"
                className="button-add"
                state={{ attributes: queryPod }}
              >
                <p>Add to list +</p>
              </Link>
            </div>
          </div>
          <div className="podlist-row-mix">
            <button className="button-blue">
              Series type: {seriesTypeTitleCase}
            </button>
            <button className="button-blue">
              Total episodes: {queryPod.totalEpisodesCount}
            </button>
            <button
              className="button-blue"
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
            <button>
              <a href={`${queryPod.websiteUrl}`}>Website</a>
            </button>
          </div>
          <div className="podlist-row-left">{recommends}</div>
        </div>
      </div>
      <div className="podlist-description">
        <h4>{queryPod.description}</h4>
      </div>
      {playerSelected && 
            <PodPlayer 
            itunesId={queryPod.itunesId}
            height={"500"}
            />
            }
      <div class="podlist-grid-container">
        <EpListGrid podImage={queryPod.imageUrl} />
      </div>
    </div>
  );
}
