import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";
import ListChoice from "./ListChoice";
import axios from "axios";

export default function AddPodcast(props) {
  const location = useLocation();
  const podcast = location.state.attributes;

  const { user } = useContext(userContext);

  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    const getListsByUser = function (userId) {
      axios.get(`/api/users/${userId}/lists`).then((response) => {
        setUserLists(response.data.data);
      });
    };
    getListsByUser(user);
  }, []);

  const lists = userLists.map((list) => {
    return (
      <ListChoice
        key={list.id}
        id={list.id}
        name={list.attributes.name}
        description={list.attributes.description}
        podcast={podcast}
      />
    );
  });

  return (
    <div>
      <p>{podcast.name}</p>
      <img src={podcast.imageUrl} style={{ width: "125px" }} />
      <p>What list would like to add it to?</p>
      <div className="listgrid">{lists}</div>
    </div>
  );
}
