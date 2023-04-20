import React from "react";
import { useLocation } from "react-router-dom"
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import ListChoice from "./ListChoice";

export default function AddPodcast(props) {

  const location = useLocation()
  const podcast = location.state.attributes

  const {user, addList} = useContext(userContext);

  const lists = user.map((list) => {
    return (
      <ListChoice
      key={list.id}
      id={list.id}
      name={list.attributes.name}
      description={list.attributes.description}
      podcast={podcast}
      />
     )
  })

  return (
    <div>
      <p>{podcast.name}</p>
     <img src={podcast.imageUrl} style={{ width: "125px" }} />
     <p>What list would like to add it to?</p>
     {lists}
    </div>
  );
}