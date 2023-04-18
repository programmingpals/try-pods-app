import React, { Component, useState, useEffect, useContext } from "react";
import PodListGrid from "./PodListGrid";
import axios from "axios";

export default function PodList(props) {
  const [listDetails, setListDetails] = useState([]);

  useEffect(() => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        console.log("list/id", response.data.data.attributes.podcasts);
        setListDetails(response.data.data.attributes);
      });
    };

    getListData(1);
  }, []);

  return (
    <div>
      <h1>Helllooooo from the PodList component</h1>
      <h2>List Name: {listDetails.name}</h2>
      <h3>List Description: {listDetails.description}</h3>
      <PodListGrid />
    </div>
  );
}
