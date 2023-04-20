import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";

export default function PodListItem(props) {
  const { user } = useContext(userContext);

  return (
    <div>
      <h4>PodListItem Component</h4>
      <Link to={`/querypodcast/${props.uuid}`}>
        <p>{props.title}</p>
      </Link>
      <p>{props.description}</p>
      {props.ownerId === user && (
        <button onClick={() => props.delete(props.id)}>Delete Podcast</button>
      )}
    </div>
  );
}
