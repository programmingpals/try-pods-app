import React from "react";
import { Link } from "react-router-dom";

export default function PodListItem(props) {
  return (
    <div>
      <h4>PodListItem Component</h4>
      <Link to={`/querypodcast/${props.uuid}`}><p>{props.title}</p></Link>
      <p>{props.description}</p>
      <button onClick={() => props.delete(props.id)}>Delete Podcast</button>
    </div>
  );
}
