import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";
import AnimateHeight from "react-animate-height";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import PodPlayer from "../query-podcast/PodPlayer";

export default function PodListItem(props) {
  const { user } = useContext(userContext);

  const [height, setHeight] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [playerSelected, setPlayerSelected] = useState(false);

  const releaseFullDate = new Date(props.release_date * 1000);
  const release = releaseFullDate.toDateString();

  const handleDelete = () => {
    props.delete(props.id);
    setShowConfirmation(false);
  };

  const podcast = {
    authorName: props.attributes.authorName,
    datePublished: props.attributes.release_date,
    description: props.attributes.description,
    imageUrl: props.attributes.image,
    isCompleted: props.attributes.isCompleted,
    itunesId: props.attributes.itunes_id,
    language: props.attributes.language,
    name: props.attributes.title,
    rssUrl: props.attributes.rssUrl,
    totalEpisodesCount: props.attributes.totalEpisodeCount,
    uuid: props.attributes.pod_uuid,
    websiteUrl: props.attributes.link,
  };

  return (
    <div>
      <div className="podlist-item">
        <div className="podlist-item-image">
          <img src={props.image} style={{ width: "125px" }} />
        </div>
        <div className="podlist-item-details">
          <div className="details-first-row">
            <div className="details-row-left">
              <Link to={`/querypodcast/${props.uuid}`}>
                <h3>{props.title}</h3>
              </Link>
              <p>Episode Count: {props.totalEpisodeCount}</p>
            </div>
            <div className="details-row-right">
              <div className="podlist-item-actions">
                <button
                  className="button-blue"
                  onClick={() => {
                    if (!playerSelected) {
                      setPlayerSelected(true);
                    } else {
                      setPlayerSelected(false);
                    }
                  }}
                >
                  {playerSelected ? "Close Player" : "Listen"}
                </button>
                {props.ownerId === user && !showConfirmation && (
                  <button onClick={() => setShowConfirmation(true)}>
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      style={{ width: "18px", border: "none", color: "green" }}
                    />
                  </button>
                )}
                {props.ownerId !== user && (
                  <Link to="/addpodcast" state={{ attributes: podcast }}>
                    <button>My List +</button>
                  </Link>
                )}
                <div>
                  {showConfirmation && (
                    <div className="deletion-confirmation">
                      <p>Are you sure you want to delete this podcast?</p>
                      <button onClick={handleDelete}>Confirm Deletion</button>
                      <button onClick={() => setShowConfirmation(false)}>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="details-row-left">
            <p>genres details go here</p>
            <p>serial/episodic details go here</p>
          </div>
          <div className="drop-down-test">
            <a
              href="#"
              aria-expanded={height !== 0}
              aria-controls="example-panel"
              onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
              {height === 0 ? "Open" : "Close"}
            </a>
            <AnimateHeight
              id="example-panel"
              duration={500}
              height={height} // see props documentation below
            >
              <div className="pod-list-item-description">
                <p>{props.description}</p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
      {playerSelected && (
        <PodPlayer itunesId={props.attributes.itunes_id} height={"450"} />
      )}
      <hr className="podcast-hr" />
    </div>
  );
}
