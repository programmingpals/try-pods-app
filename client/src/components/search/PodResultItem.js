import React from "react";
import { Link } from "react-router-dom";

//receives props.attributes which contains all podcast details

export default function PodResultItem(props) {
  function clearResults() {
    props.setPodcast([]);
  }

  return (
    <div>
      {/* reloadDocument added to force reload and get updated query results- readdress as time permits */}
      <Link
        onClick={() => clearResults()}
        to={`/querypodcast/${props.uuid}`}
        reloadDocument
      >
        <p>{props.name}</p>
      </Link>
      <p>
        <img src={props.image} style={{ width: "125px" }} />
      </p>
      <p>{props.description}</p>
      <Link
        onClick={() => clearResults()}
        to="/addpodcast"
        state={{ attributes: props.attributes }}
      >
        <p>Add to list</p>
      </Link>
    </div>
  );
}
