import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";
import AnimateHeight from "react-animate-height";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import PodPlayer from "../query-podcast/PodPlayer";
import speakerIcon from "../../assets/icons/speakericon.png";
import saveIcon from "../../assets/icons/save-icon.png";

export default function PodListItem(props) {
  const { user } = useContext(userContext);

  const [height, setHeight] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [playerSelected, setPlayerSelected] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const releaseFullDate = new Date(props.release_date * 1000);
  const release = releaseFullDate.toDateString();

  const truncatedDescription = props.description.substring(0, 150) + "...";

  const seriesType = props.seriesType;
  console.log(seriesType);
  let seriesTypeTitleCase = "";
  if (seriesType) {
    const seriesTypeLowerCase = seriesType.toLowerCase();
    seriesTypeTitleCase =
      seriesTypeLowerCase.charAt(0).toUpperCase() +
      seriesTypeLowerCase.slice(1);
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

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
    seriesType: props.attributes.seriesType,
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
                <a
                  href="#/"
                  onClick={() => {
                    if (!playerSelected) {
                      setPlayerSelected(true);
                    } else {
                      setPlayerSelected(false);
                    }
                  }}
                >
                  {playerSelected ? (
                    "Close Player"
                  ) : (
                    <img
                      src={speakerIcon}
                      className="action-button"
                      alt="Listen"
                    />
                  )}
                </a>
                {props.ownerId === user && !showConfirmation && (
                  <a href="#/" onClick={() => setShowConfirmation(true)}>
                    <img
                      src={deleteIcon}
                      className="action-button"
                      alt="Delete"
                    />
                  </a>
                )}
                {props.ownerId !== user && (
                  <Link to="/addpodcast" state={{ attributes: podcast }}>
                    <img src={saveIcon} className="action-button" />
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
            <p>Released: {release}</p>
            {seriesTypeTitleCase && <p>Series type: {seriesTypeTitleCase} </p>}
          </div>
          <div className="drop-down-test">
            <div className="pod-list-item-description">
              <p>
                {showFullDescription ? props.description : truncatedDescription}
              </p>
              {truncatedDescription.length > 150 && (
                <button onClick={toggleDescription}>
                  {showFullDescription ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: playerSelected ? "block" : "none" }}>
        <PodPlayer itunesId={props.attributes.itunes_id} height={"450"} />
      </div>
      <hr className="podcast-hr" />
    </div>
  );
}
