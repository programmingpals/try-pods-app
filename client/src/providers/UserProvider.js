import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

export default function UserProvider(props) {
  // const [state, setState] = useState({
  //   user: [],
  //   list: [],
  // });

  const [user, setUser] = useState([]);

  const deleteList = (id) => {
    axios
      .delete(`/api/lists/${id}`)
      .then((response) => {
        console.log(response.data);
        // alert("wow it's gone");
        const updatedLists = response.data;
        setUser(
          user.filter((u) => {
            return u.id !== id;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const addList = (name, description) => {
    axios
      .post("/api/lists", { user_id: 1, name: name, description: description })
      .then((response) => {
        console.log("POST API", response.data);
        const newList = {
          id: response.data.id,
          type: "list",
          attributes: {
            description: response.data.description,
            name: response.data.name,
          },
        };
        const tempUser = [...user];
        tempUser.push(newList);
        console.log("tempUser:", tempUser);
        setUser(tempUser);
      });
  };

  useEffect(() => {
    const getUserData = function () {
      axios.get("/api/lists").then((response) => {
        console.log("RESPONSE", response.data.data);
        const lists = response.data.data;
        // setState((prev) => ({ ...prev, lists }));
        setUser(response.data.data);
      });
    };
    getUserData();
  }, []);

  console.log("user:", user);
  const value = { user, deleteList, addList };
  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
