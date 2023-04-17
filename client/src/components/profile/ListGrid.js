import React, { Component, useState, useEffect } from "react";
import List from "./List";
import axios from "axios";
import AddListForm from "./AddListForm";


export default function ListGrid(props) {

  const deleteList = (id) => {
    axios.delete(`/api/lists/${id}`).then((response) => {
      console.log(response.data);
      alert("wow it's gone");
    })
    .catch((err) => console.log(err));
  };

  const lists = props.attributes.map((list) => {
    return (
      <List
      key={list.id}
      id={list.id}
      name={list.attributes.name}
      description={list.attributes.description}
      delete={deleteList}
      />
    )
  })

console.log("props.attributes", props.attributes)
  return (
  <div><h1>Hello from ListGrid!!!!!</h1>
  {lists}
  <AddListForm />
  </div>
  )
}