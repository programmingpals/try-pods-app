import React from "react";

export default function EpListItem(props) {
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
            <div className="podlist-item-actions">{props.seasonNumber}</div>
          </div>
        </div>
        <div className="details-row-left">
          <p>{props.duration}</p>
          <p>{props.datePublished}</p>
        </div>
        <div className="pod-list-item-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
