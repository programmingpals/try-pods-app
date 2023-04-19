import React, { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import ListGrid from "./ListGrid";

export default function Profile(props) { 

  const user = useContext(userContext);
 
  return (
    <div>
      <h1>Profile component</h1>
      <ListGrid />
    </div>
  )
}