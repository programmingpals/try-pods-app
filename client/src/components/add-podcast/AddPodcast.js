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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getListsByUser = function (userId) {
      axios.get(`/api/users/${userId}/lists`).then((response) => {
        setUserLists(response.data.data);
        setIsLoading(false);
      });
    };
    getListsByUser(user);
  }, [user]);

  let listOrg = {
    top8: {},
    upNext: {},
    customLists: [],
  };

  userLists.map((list) => {
    if (list.attributes.name === "Top 8") {
      listOrg.top8 = list;
      return listOrg.top8;
    } else if (list.attributes.name === "Up Next") {
      listOrg.upNext = list;
      return listOrg.upNext;
    } else {
      listOrg.customLists.push(list);
      return listOrg.customLists;
    }
  });

  const sortedLists = listOrg.customLists.map((list) => {
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

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div className="add-list-container">
      <img
        className="add-podcast-img"
        src={podcast.imageUrl}
        style={{ width: "125px" }}
        alt={podcast.name}
      />
      <h3>{podcast.name}</h3>
      <p>What list would like to add it to?</p>
      <div className="listgrid-addpodcast">
        <ListChoice
          key={listOrg.top8.id}
          id={listOrg.top8.id}
          name={listOrg.top8.attributes.name}
          description={listOrg.top8.attributes.description}
          podcast={podcast}
        />
        <ListChoice
          key={listOrg.upNext.id}
          id={listOrg.upNext.id}
          name={listOrg.upNext.attributes.name}
          description={listOrg.upNext.attributes.description}
          podcast={podcast}
        />
        {sortedLists}
      </div>
    </div>
  );
}
