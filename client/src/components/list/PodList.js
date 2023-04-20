import React, { Component, useState, useEffect, useContext } from "react";
import PodListGrid from "./PodListGrid";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PodList(props) {
  const [listDetails, setListDetails] = useState([]);

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
    <div class="podlist">
      <div class="podlist-details">
        <h2>{listDetails.name}</h2>
        <button>Add more to list</button>
      </div>
      <div class="podlist-description">
        <h4>Description: {listDetails.description}</h4>
      </div>
      <div class= "podlist-grid-container">
        <PodListGrid id={params.id} ownerId={userId} />
      </div>
    </div>
  );
}
