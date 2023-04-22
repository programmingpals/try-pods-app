import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../providers/UserProvider";

export default function List(props) {
  const { user } = useContext(userContext);

  const deleteList = (userId, id) => {
    axios
      .delete(`/api/users/${userId}/lists/${id}`)
      .then((response) => {
        props.setUserLists((prev) => removeList(prev, id));
      })
      .catch((err) => console.log(err));
  };

  const removeList = (lists, id) => {
    return lists.filter((u) => {
      return u.id !== id;
    });
  };

  return (
    <div className="listitem">
      <Link to={`/podcastlist/${props.id}`}>
        <h5>{props.name}</h5>
      </Link>
      <p>{props.description}</p>

      {props.ownerId === user && (
        <button onClick={() => deleteList(user, props.id)}>Delete list</button>
      )}
    </div>
  );
}
