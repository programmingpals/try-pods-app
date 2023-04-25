import React, { useContext, useState } from "react";
import { podcastQueryContext } from "../../providers/PodcastQueryProvider";
import EpListGrid from "./EpListGrid";
import { Link } from "react-router-dom";
import PodPlayer from "./PodPlayer";
import RecommendByFriend from "./RecommendsByFriend";
import checkIcon from "../../assets/icons/check.png";
import PodcastMatch from "./PodcastMatch";

export default function QueryPodResults(props) {
  const [playerSelected, setPlayerSelected] = useState(false);

  const { queryPod, recommendByFriend, podcastMatch } =
    useContext(podcastQueryContext);

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

  let podcastDuplicate = [];
  const podcastMatchList = function (podcastMatchArr) {
    podcastDuplicate = podcastMatchArr.map((list) => {
      return <PodcastMatch key={list} id={list} name={list.name} />;
    });
  };

  if (podcastMatch.length > 0) {
    podcastMatchList(podcastMatch);
  }

  return (
    <div className="podlist">
      <div className="page-header podcast-header">
        <div className="page-image">
          <img src={queryPod.imageUrl} style={{ width: "125px" }} alt={queryPod.name}/>
        </div>
        <div className="podlist-details">
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h2>{queryPod.name}</h2>
            </div>
            <div className="podlist-row-right">
              <Link
                to="/addpodcast"
                className="button-add-underline"
                state={{ attributes: queryPod }}
                style={{ textDecoration: "none" }}
              >
                <p>+ to my List</p>
              </Link>
            </div>
          </div>
          <hr className="podcast-hr" />
          <div className="podlist-row-mix">
            <p>Series type: {seriesTypeTitleCase}</p>
            <p>Total episodes: {queryPod.totalEpisodesCount}</p>
            <a href={`${queryPod.websiteUrl}`} className="underline">
              Website
            </a>
          </div>
          <hr className="podcast-hr" />
          <div className="podlist-row">
            <div className="podlist-row-left">
              <p>Your friends are followers: </p>
              {recommends}
            </div>
            <div className="podlist-row-right">
              <a
                href="#/"
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
              </a>
            </div>
          </div>
        </div>
      </div>
      {podcastMatch.length > 0 && (
        <div className="podcast-match-block">
          <img src={checkIcon} alt="check-icon"/>
          <p>Already on</p>
          {podcastDuplicate}
        </div>
      )}
      <div className="podlist-description">
        <h4>{queryPod.description}</h4>
      </div>
      {playerSelected && (
        <PodPlayer itunesId={queryPod.itunesId} height={"500"} />
      )}
      <div className="podlist-grid-container">
        <EpListGrid podImage={queryPod.imageUrl} />
      </div>
    </div>
  );
}
