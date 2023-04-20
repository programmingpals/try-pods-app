import React, { useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../../providers/UserProvider";

export default function AddListForm(props) {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  const { user } = useContext(userContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setListName("");
    setListDescription("");
  };

  const addList = (userId, name, description) => {
    axios
      .post(`/api/lists/`, {
        user_id: userId,
        name: name,
        description: description,
      })
      .then((response) => {
        const newList = {
          id: response.data.id,
          type: "list",
          attributes: {
            description: response.data.description,
            name: response.data.name,
          },
        };
        props.setUserLists((prev) => [...prev, newList]);
      });
  };

  return (
    <div>
      {props.ownerId === user && (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Add a List Form</h1>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Add your list name"
            value={listName}
            onChange={(event) => {
              setListName(event.target.value);
            }}
          />
          Description:
          <input
            type="text"
            name="description"
            placeholder="Add a description"
            value={listDescription}
            onChange={(event) => {
              setListDescription(event.target.value);
            }}
          />
          <button
            onClick={() => {
              addList(1, listName, listDescription);
            }}
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}
