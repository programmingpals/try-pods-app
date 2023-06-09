import React, { useState, useEffect, useContext } from "react";
import PodListGrid from "./PodListGrid";
import axios from "axios";
import { useParams } from "react-router-dom";
import { searchContext } from "../../providers/SearchToggleProvider";
import { userContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
} from "react-share";
import mailIcon from "../../assets/icons/mailIcon.png";
import halfToneSmall from "../../assets/backgrounds/half-tone-small-dot-background.svg";

export default function PodList(props) {
  const [listDetails, setListDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [owner, setOwner] = useState(0);
  const [ownerDetails, setOwnerDetails] = useState({});
  const [listLength, setListLength] = useState(0);

  const { user } = useContext(userContext);

  const deleteList = (userId, id) => {
    axios
      .delete(`/api/users/${userId}/lists/${id}`)
      .then((response) => {
        setShowConfirmation(false);
      })
      .catch((err) => console.log(err));
  };

  const { height, setHeight } = useContext(searchContext);

  const params = useParams();

  const getListOwnerDetails = function (owner) {
    axios.get(`/api/users/${owner}`).then((response) => {

      const details = response.data;
      const ownerDetails = {
        name: details.first_name,
        avatar: details.avatar,
        id: details.id,
      };

      setOwnerDetails(ownerDetails);
    });
  };

  useEffect(() => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        setListDetails(response.data.data.attributes);
        setIsLoading(false);

        const userId = response.data.data.attributes.user_id;
        setOwner(userId);

        const listLength = response.data.data.attributes.podcasts.length;
        setListLength(listLength);

        getListOwnerDetails(userId);
      });
    };

    getListData(`${params.id}`);
  }, [params.id, listLength]);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div className="podlist">
      <div
        className="page-header podlist-header"
        style={{ backgroundImage: `url(${halfToneSmall})` }}
      >
        <div className="podlist-details">
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h1>{listDetails.name}</h1>
            </div>
            <div className="podlist-row-right">
              <Link to={`/profilepage/${ownerDetails.id}`}>
                <img src={ownerDetails.avatar} alt="profile avatar"/>
              </Link>
            </div>
          </div>
          <hr className="podlist-hr" />
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h4>{listDetails.description}</h4>
            </div>
            <div className="podlist-row-right">
              {user === owner && (
                <a
                  href="#/"
                  className="underline"
                  aria-expanded={height !== 0}
                  aria-controls="example-panel"
                  onClick={() => setHeight(height === 0 ? "auto" : 0)}
                >
                  {height === 0 ? "Add Podcasts" : "Close Search"}
                </a>
              )}
            </div>
          </div>
          <hr className="podlist-hr" />
          <div className="podlist-row">
            <div className="podlist-row-left">
              <div className="share">
                <EmailShareButton
                  url="http://try-pods.com/podcastlist/Moms-List"
                  subject="My Podcast List"
                  body={
                    "Hey Mom! Heres that list of podcasts you should checkout: "
                  }
                >
                  <img src={mailIcon} alt="email-icon"/>
                </EmailShareButton>
                <TwitterShareButton
                  url={`http://localhost:3000/podcastlist/${params.id}`}
                >
                  <TwitterIcon size={24} round />
                </TwitterShareButton>
                <FacebookShareButton
                  url={`http://localhost:3000/podcastlist/${params.id}`}
                >
                  <FacebookIcon size={24} round />
                </FacebookShareButton>
              </div>
            </div>
            <div className="podlist-row-right">
              {!showConfirmation &&
                user === owner &&
                listDetails.name !== "Up Next" &&
                listDetails.name !== "Top 8" && (
                  <button onClick={() => setShowConfirmation(true)}>
                    Delete List
                  </button>
                )}
              <div>
                {showConfirmation && (
                  <div className="deletion-confirmation">
                    <p>Are you sure you want to delete this list?</p>
                    <div className="delete-buttons-block">
                      <Link to={`/profilepage/${user}`}>
                        <button onClick={() => deleteList(user, params.id)}>
                          Delete
                        </button>
                      </Link>
                      <a href="#/">
                        <button onClick={() => setShowConfirmation(false)}>
                          Cancel
                        </button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="podlist-grid-container">
        {!isLoading && <PodListGrid id={params.id} ownerId={owner} />}
      </div>
    </div>
  );
}
