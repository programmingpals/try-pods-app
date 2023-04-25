import React from "react";
import { Link } from "react-router-dom";

//receives props.attributes which contains all podcast details

export default function PodResultItem(props) {
  function clearResults() {
    props.setPodcast([]);
  }

  return (
    <div className="search-results-item">
      {/* reloadDocument added to force reload and get updated query results- readdress as time permits */}
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="item-details">
        <div>
          <Link
            onClick={() => clearResults()}
            to={`/querypodcast/${props.uuid}`}
            reloadDocument
          >
            <p>{props.name}</p>
          </Link>
        </div>
        <div>
          <Link
            onClick={() => clearResults()}
            to="/addpodcast"
            state={{ attributes: props.attributes }}
          >
            <p>Add to list</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
