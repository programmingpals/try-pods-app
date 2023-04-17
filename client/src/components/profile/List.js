import React, { Component, useState, useEffect } from "react";
import axios from "axios";


export default function List(props) {

console.log("props.attributes", props)
  return (
  <div><h1>Hello from List component!!!</h1>
  <p>{props.name}</p>
  <p>{props.description}</p>
  <button onClick={() => props.delete(props.id)}>Delete list</button>
  </div>
  )
}