import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <div className="listitem-main">
      <Link to={`/podcastlist/${props.id}`}>
        <h5>{props.name}</h5>
      </Link>
      <p>{props.description}</p>
    </div>
  );
}
