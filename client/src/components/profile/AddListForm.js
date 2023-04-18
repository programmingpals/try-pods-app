import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import axios from "axios";
import ListGrid from "./ListGrid";


export default function AddListForm(props) {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  // const {user, addList} = useContext(userContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setListName("");
    setListDescription("");
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
    
    <button onClick={() => {props.addList(listName, listDescription)}}>Save</button>
  </form>
  );
}