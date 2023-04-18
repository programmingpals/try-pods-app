import React, { Component, useState, useEffect, useContext } from "react";
import { userContext, UserProvider } from "../../providers/UserProvider";
import ListGrid from "./ListGrid";
import List from "./List";


export default function Profile(props) { 

  const user = useContext(userContext);
  console.log("user from profile:", user)

 
  return <div>
    <h1>Helllooooo from the Profile component</h1>
    <ListGrid />
    </div>

}