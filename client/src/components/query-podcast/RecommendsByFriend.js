import React from "react";
import { Link } from "react-router-dom";

export default function RecommendByFriend(props) {
  return (
    <div className="recommend-item">
      <Link to={`/profilepage/${props.id}`}>
        <img src={props.avatar} />
      </Link>
      <p>{props.name}</p>
    </div>
  );
}
