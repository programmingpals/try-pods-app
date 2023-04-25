import React from "react";
import { useState } from "react";

export default function EpListItem(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = props.description.substring(0, 150) + "...";

  let seasonText = "";
  if (props.seasonNumber) {
    seasonText = `Season ${props.seasonNumber}`;
  }

  const releaseFullDate = new Date(props.datePublished * 1000);
  const release = releaseFullDate.toDateString();

  return (
    <div className="podlist-item-block">
      <div className="podlist-item">
        <div className="podlist-item-image">
          <img src={`${props.imageUrl}`} style={{ width: "125px" }} alt={props.name}/>
        </div>
        <div className="podlist-item-details">
          <div className="details-first-row">
            <div className="details-row-left">
              <h3>{props.name}</h3>
            </div>
            <div className="details-row-right">
              <div className="podlist-item-actions">{seasonText}</div>
            </div>
          </div>
          <div className="details-row-left">
            <p>Release date: {release}</p>
          </div>
          <div>
            <audio controls>
              <source src={`${props.audioUrl}`} type="audio/mpeg" />
            </audio>
          </div>
          <div className="pod-list-item-description">
              <p>
                {showFullDescription ? props.description : truncatedDescription}
              </p>
            {truncatedDescription.length > 150 && (
              <button onClick={toggleDescription}>
                {showFullDescription ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="podcast-hr" />
    </div>
  );
}
