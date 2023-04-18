import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";

export default function PodListItem(props) {
  return (
    <div>
      <h4>Hello from PodListItem component!!!</h4>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <button onClick={() => props.delete(props.id)}>Delete Podcast</button>
    </div>
  );
}
