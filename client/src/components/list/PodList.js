import React, { Component, useState, useEffect, useContext } from "react";
import PodListGrid from "./PodListGrid";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchToggleProvider from "../../providers/SearchToggleProvider";
import { searchContext } from "../../providers/SearchToggleProvider";

export default function PodList(props) {
  const [listDetails, setListDetails] = useState([]);
  const { height, setHeight } = useContext(searchContext);

  const params = useParams();

  let userId = 0;
  useEffect(() => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        setListDetails(response.data.data.attributes);
        userId = response.data.data.attributes.user_id;
      });
    };
    getListData(`${params.id}`);
  }, []);

  return (
    <div className="podlist">
      <div className="page-header">
        <div className="podlist-details">
          <div className="podlist-row">
            <div className="podlist-row-left">
              <h2>{listDetails.name}</h2>
            </div>
            <div className="podlist-row-right">
              <a
                href="#"
                aria-expanded={height !== 0}
                aria-controls="example-panel"
                onClick={() => setHeight(height === 0 ? "auto" : 0)}
              >
                {height === 0 ? "Add Podcasts" : "Close Search"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="podlist-description">
        <h4>Description: {listDetails.description}</h4>
      </div>
      <div className="podlist-grid-container">
        <PodListGrid id={params.id} ownerId={userId} />
      </div>
    </div>
  );
}
