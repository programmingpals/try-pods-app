import React from "react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

export default function EpListItem(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = props.description.substring(0, 150) + "...";

  let seasonText = "";
  if (props.seasonNumber) {
    seasonText = "Season " + `${props.seasonNumber}`;
  }

  let time;
  const totalMinutes = Math.floor(props.duration / 60);
  const seconds = (props.duration % 60).toString().padStart(2, "0");
  const hours = Math.floor(totalMinutes / 60);
  const minutes = (totalMinutes % 60).toString().padStart(2, "0");
  if (hours === 0) {
    time = `${minutes}:${seconds}`;
  } else {
    time = `${hours}:${minutes}:${seconds}`;
  }

  const releaseFullDate = new Date(props.datePublished * 1000);
  const release = releaseFullDate.toDateString();

  return (
    <div className="podlist-item">
      <div className="podlist-item-image">
        <img src={`${props.imageUrl}`} style={{ width: "125px" }} />
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
          {/* <p>Episode length: {time}</p> */}
          <p>Release date: {release}</p>
        </div>
        <div>
          <audio controls>
            <source src={`${props.audioUrl}`} type="audio/mpeg" />
          </audio>
        </div>
        <div className="pod-list-item-description">
          <AnimateHeight
            height={"auto"}
          >
            <p>{showFullDescription ? props.description : truncatedDescription}</p>
          </AnimateHeight>
          <button onClick={toggleDescription}>
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
}
