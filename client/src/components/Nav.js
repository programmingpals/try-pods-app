import React from "react";
import { Link} from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to={"profilepage/1"}>Click to view a profile page</Link>------
      <Link to={"podcastlist/1"}>Click to view a podcast list page</Link>------
      <Link to={"podcastresult"}>Click to view a query result page</Link>
      <p></p>
    </div>
  );
}
