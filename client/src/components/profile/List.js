import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";


export default function List(props) {

  const {user, deleteList} = useContext(userContext);

  return (
  <div>
    <h4>List Component</h4>
    <Link to={`/podcastlist/${props.id}`}><p>{props.name}</p></Link>
    <p>{props.description}</p>
    <button onClick={() => deleteList(props.id)}>Delete list</button>
  </div>
  )
}