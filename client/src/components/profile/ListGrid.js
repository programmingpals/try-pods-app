import React, { Component, useState, useEffect , useContext} from "react";
import { userContext } from "../../providers/UserProvider";
import List from "./List";
import axios from "axios";
import AddListForm from "./AddListForm";


export default function ListGrid(props) {

  const {user, deleteList, addList} = useContext(userContext);
  console.log("user", user)

  const lists = user.map((list) => {
    return (
      <List
      key={list.id}
      id={list.id}
      name={list.attributes.name}
      description={list.attributes.description}
      />
     )
  })

  return (
  <div><h1>Hello from ListGrid!!!!!</h1>
  {lists}
  <AddListForm addList={addList} />
  </div>
  )
}