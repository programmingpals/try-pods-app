import React, { useContext, useState, useEffect } from "react";
import ListGrid from "./ListGrid";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile(props) {
  const [userLists, setUserLists] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getListsByUser = function (userId) {
      axios.get(`/api/users/${userId}/lists`).then((response) => {
        setUserLists(response.data.data);
      });
    };
    getListsByUser(params.userId);
  }, []);

  return (
    <div>
      <h1>Profile component</h1>
      <ListGrid userLists={userLists} setUserLists={setUserLists} />
    </div>
  );
}
