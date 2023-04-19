import React from "react";
import { useLocation } from "react-router-dom"

export default function AddPodcast(props) {

  const location = useLocation()
  const name = location.state.attributes

  console.log("name from addtolis:", name)

  return (
    <div>
      {name.name}
    </div>
  );
}