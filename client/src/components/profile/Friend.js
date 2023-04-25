import React from "react";
import { Link } from "react-router-dom";

export default function Friend(props) {
  return (
    <div className="friend-item">
      <Link to={`/profilepage/${props.id}`}>
        <img src={props.avatar} alt={props.name}/>
      </Link>
      <p>{props.name}</p>
    </div>
  );
}
