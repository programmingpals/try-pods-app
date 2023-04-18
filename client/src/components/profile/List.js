import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";

export default function List(props) {

  const {user, deleteList} = useContext(userContext);

  return (
  <div>
    <h4>Hello from List component!!!</h4>
    <p>{props.name}</p>
    <p>{props.description}</p>
    <button onClick={() => deleteList(props.id)}>Delete list</button>
  </div>
  )
}