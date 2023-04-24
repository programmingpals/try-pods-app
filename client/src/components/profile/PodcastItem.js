import React from "react";
import { Link } from "react-router-dom";

export default function PodcastItem(props) {
  return (
    <div className="podcast-item">
      <Link to={`/querypodcast/${props.uuid}`}>
        <img src={`${props.image}`} />
      </Link>
    </div>
  );
}
