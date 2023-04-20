import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../providers/UserProvider";

export default function List(props) {
  const { user } = useContext(userContext);

  const deleteList = (id) => {
    axios
      .delete(`/api/lists/${id}`)
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
    <div>
      <h4>List Component</h4>
      <Link to={`/podcastlist/${props.id}`}>
        <p>{props.name}</p>
      </Link>
      <p>{props.description}</p>

      {props.ownerId === user && (
        <button onClick={() => deleteList(props.id)}>Delete list</button>
      )}
    </div>
  );
}
