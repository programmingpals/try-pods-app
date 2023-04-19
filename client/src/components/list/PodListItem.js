import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PodListItem(props) {
  console.log("from PODLISTITEM", props.uuid)
  return (
    <div>
      <h4>Hello from PodListItem component!!!</h4>
      <Link to={`/querypodcast/${props.uuid}`}><p>{props.title}</p></Link>
      <p>{props.description}</p>
      <button onClick={() => props.delete(props.id)}>Delete Podcast</button>
    </div>
  );
}
