import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

export default function UserProvider(props) {

  // const [state, setState] = useState({
  //   lists: [],
  //   list: [],
  //   podcast: [],
  // });

  const [user, setUser] = useState([])

  const deleteList = (id) => {
    axios.delete(`/api/lists/${id}`).then((response) => {
      console.log(response.data);
      alert("wow it's gone");
    })
    .catch((err) => console.log(err));
  };


  
  useEffect(() => {
    const getUserData = function() {
    axios.get("/api/lists").then((response) => {
      console.log("RESPONSE", response.data.data);
      const lists = response.data.data;
      // setState((prev) => ({ ...prev, lists }));
      setUser(response.data.data)
    });
  }
  getUserData();
  }, []);

console.log("user:", user)
  const value = {deleteList}
  return (
    <userContext.Provider
      value={{user, deleteList}}
    >
      {props.children}
    </userContext.Provider>
  )
}