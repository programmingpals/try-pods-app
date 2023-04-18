import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";

export default function PodListItem(props) {
  const { user, list, deleteFromList } = useContext(userContext);

  return (
    <div>
      <h4>Hello from PodListItem component!!!</h4>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <button onClick={() => deleteFromList(props.id)}>Delete Podcast</button>
    </div>
  );
}
