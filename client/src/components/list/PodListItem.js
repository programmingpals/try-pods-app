import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";

export default function PodListItem(props) {
  const { user } = useContext(userContext);

  const releaseFullDate = new Date(props.release_date * 1000);
  const release = releaseFullDate.toDateString();

  return (
    <div class="podlist-item">
      <div class="podlist-item-image">
        <img src={props.image} style={{ width: "125px" }} />
      </div>
      <div class="podlist-item-details">
        <div class="details-first-row">
          <div class="details-row-left">
            <Link to={`/querypodcast/${props.uuid}`}>
              <h3>{props.title}</h3>
            </Link>
            <p>Episode Count: {props.totalEpisodeCount}</p>
          </div>
          <div class="details-row-right">
            <div class="podlist-item-actions">
              {props.ownerId !== user && (
                <button onClick={() => props.delete(props.id)}>
                  Delete Podcast
                </button>
              )}
            </div>
          </div>
        </div>
        <div class="details-row-left">
          <p>genres details go here</p>
          <p>serial/episodic details go here</p>
        </div>
        <div class="pod-list-item-description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
