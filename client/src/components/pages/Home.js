import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>

      <p>
        <Link to={"profilepage/1"}>Click to view a profile page</Link>
      </p>
      <Link to={"podcastlist/1"}>Click to view a podcast list page</Link>
      <p>
        <Link to={"podcastresult"}>Click to view a query result page</Link>
      </p>
    </div>
  );
}
