import React, { Component, useState, useEffect , useContext} from "react";
import { userContext } from "../../providers/UserProvider";
import List from "./List";
import axios from "axios";
import AddListForm from "./AddListForm";


export default function ListGrid(props) {

  const {user, deleteList} = useContext(userContext);
  console.log("user", user)

const lists = user.map((u) => u.id)

  // const deleteList = (id) => {
  //   axios.delete(`/api/lists/${id}`).then((response) => {
  //     console.log(response.data);
  //     alert("wow it's gone");
  //   })
  //   .catch((err) => console.log(err));
  // };

  // const lists = user.map((list) => {
  //   console.log("list:", list)
  //   // return (
  //   //   // <List
  //   //   // key={list.id}
  //   //   // id={list.id}
  //   //   // name={list.attributes.name}
  //   //   // description={list.attributes.description}
  //   //   // // delete={deleteList}
  //   //   // />
  //   //  )
  // })

  return (
  <div><h1>Hello from ListGrid!!!!!</h1>
  {lists}
  <AddListForm />
  </div>
  )
}