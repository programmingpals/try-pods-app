import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div class="nav">
      <div class="nav-left">
        <Link to={"/"}>
          <h4>Try-Pods</h4>
        </Link> 
      </div>
      <div class="nav-right">
        <p>Search</p>
        <p>
          <Link to={"profilepage/1"}>My Profile</Link>
        </p>
        <p>Rowan</p>
      </div>
    </div>
  );
}

// <Link to={"podcastresult"}>Click to view a query result page</Link>
// <Link to={"podcastlist/1"}>Click to view a podcast list page</Link>
