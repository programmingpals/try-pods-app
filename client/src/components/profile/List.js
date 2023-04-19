import React, { Component, useState, useEffect, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";
import PodList from "../list/PodList";
import axios from "axios";

export default function List(props) {

  const {user, deleteList} = useContext(userContext);

  return (
  <div>
    <h4>Hello from List component!!!</h4>
    <Link to={`/podcastlist/${props.id}`}><p>{props.name}</p></Link>
    <p>{props.description}</p>
    <button onClick={() => deleteList(props.id)}>Delete list</button>
  </div>
  )
}