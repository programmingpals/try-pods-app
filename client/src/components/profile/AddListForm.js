import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import ListGrid from "./ListGrid";

export default function AddListForm(props) {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setListName("");
    setListDescription("");
  };

  const addList = (name, description) => {
    axios
      .post("/api/lists", { user_id: 1, name: name, description: description })
      .then((response) => {
        console.log("POST API", response.data);
        // const newList = response.data;
        // const lists = [...state.lists, newList];
        // setState((prev) => ({ ...prev, lists }));
      });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Form!</h1>
   
      Name:
      <input
       type="text" 
       name="name"
       placeholder="Add your list name"
       value={listName}
       onChange={(event) => {setListName(event.target.value)}} 
       />
   
      Description:
      <input
      type="text" 
      name="description"
      placeholder="Add a description"
      value={listDescription}
      onChange={(event) => {setListDescription(event.target.value)}} 
      />
    
    <button onClick={() => {addList(listName, listDescription)}}>Save</button>
  </form>
  );
}