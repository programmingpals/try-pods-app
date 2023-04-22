import React, { useState, useEffect, useContext } from "react";
import PodListGrid from "./PodListGrid";
import axios from "axios";
import { useParams } from "react-router-dom";
import { searchContext } from "../../providers/SearchToggleProvider";
import { userContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";

export default function PodList(props) {
  const [listDetails, setListDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [owner, setOwner] = useState(0);

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

  useEffect(() => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        setListDetails(response.data.data.attributes);
        setIsLoading(false);
        const userId = response.data.data.attributes.user_id;
        setOwner(userId);
      });
    };
    getListData(`${params.id}`);
  }, []);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div class="podlist">
      <div class="page-header">
        <div class="podlist-details">
          <div class="podlist-row">
            <div class="podlist-row-left">
              <h1>{listDetails.name}</h1>
              <h4>{listDetails.description}</h4>
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
                    <Link to={`/profilepage/${user}`} reloadDocument>
                      <button onClick={() => deleteList(user, params.id)}>
                        Confirm Deletion
                      </button>
                    </Link>
                    <button onClick={() => setShowConfirmation(false)}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="podlist-row-right">
              {user === owner && (
                <a
                  href="#"
                  aria-expanded={height !== 0}
                  aria-controls="example-panel"
                  onClick={() => setHeight(height === 0 ? "auto" : 0)}
                >
                  {height === 0 ? "Add Podcasts" : "Close Search"}
                </a>
              )}
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
