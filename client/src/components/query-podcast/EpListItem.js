import React from "react";

export default function EpListItem(props) {
  return (
    <div class="podlist-item">
      <div class="podlist-item-image">
        <img src={`${props.imageUrl}`} style={{ width: "125px" }} />
      </div>
      <div class="podlist-item-details">
        <div class="details-first-row">
          <div class="details-row-left">
            <h3>{props.name}</h3>
          </div>
          <div class="details-row-right">
            <div class="podlist-item-actions">{props.seasonNumber}</div>
          </div>
        </div>
        <div class="details-row-left">
          <p>{props.duration}</p>
          <p>{props.datePublished}</p>
        </div>
        <div class="pod-list-item-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
