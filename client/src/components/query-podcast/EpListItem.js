import React from "react";

export default function EpListItem(props) {
  return (
    <div>
      <h3>I'm from the EpListItem!</h3>
      <p>{props.name}</p>
      <p>{props.duration}</p>
      <p>{props.datePublished}</p>
      <p>{props.seasonNumber}</p>
      <p>{props.description}</p>
      <img src={`${props.imageUrl}`} style={{ width: "125px" }} />
    </div>
  );
}
