import React, { Component, useState, useEffect, useContext } from "react";
import PodListGrid from "./PodListGrid";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PodList(props) {
  const [listDetails, setListDetails] = useState([]);

  const params = useParams()

  useEffect(() => {
    const getListData = function (id) {
      axios.get(`/api/lists/${id}`).then((response) => {
        setListDetails(response.data.data.attributes);
      });
    };

    getListData(`${params.id}`);
  }, []);

  return (
    <div>
      <h4>PodList component</h4>
      <h2>List Name: {listDetails.name}</h2>
      <h3>List Description: {listDetails.description}</h3>
      <PodListGrid id={params.id}/>
    </div>
  );
}
