import React, { Component, useState, useEffect } from "react";
import ListGrid from "./ListGrid";
import List from "./List";


export default function Profile(props) { 

console.log("props.attributes", props.attributes)
  return <div>
    <h1>Helllooooo from the Profile component</h1>
    <ListGrid attributes={props.attributes} />
    </div>

}