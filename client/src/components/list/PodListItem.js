import React from "react";
import { Link } from "react-router-dom";

export default function PodListItem(props) {

  const releaseFullDate = new Date(props.release_date * 1000);
  const release = releaseFullDate.toDateString();
  
  return (
    <div>
      <h4>PodListItem Component</h4>
      <Link to={`/querypodcast/${props.uuid}`}><p>{props.title}</p></Link>
      <p><img src={props.image} style={{ width: "125px" }} /></p>
      <p>{props.description}</p>
      <p>Episode Count: {props.totalEpisodeCount}</p>
      <p>Released: {`${release}`}</p>
      <p>Publisher: {props.authorName}</p>
      <button onClick={() => props.delete(props.id)}>Delete Podcast</button>
    </div>
  );
}
