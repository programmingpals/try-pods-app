import React from "react";
import { Link } from "react-router-dom";

export default function Top8Item(props) {
  return (
    <div className="top8-item">
      <Link to={`/querypodcast/${props.uuid}`}>
        <img src={`${props.image}`} />
      </Link>
    </div>
  );
}
