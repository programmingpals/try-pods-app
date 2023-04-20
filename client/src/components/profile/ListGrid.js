import React, { useContext } from "react";
import { userListsContext } from "../../providers/UserProvider";
import List from "./List";
import AddListForm from "./AddListForm";

export default function ListGrid(props) {
  let userId = null;
  const lists = props.userLists.map((list) => {
    userId = list.attributes.user_id;
    return (
      <List
        key={list.id}
        id={list.id}
        name={list.attributes.name}
        description={list.attributes.description}
        ownerId={userId}
        setUserLists={props.setUserLists}
      />
    );
  });

  return (
    <div>
      <h1>ListGrid Component</h1>
      {lists}
      <AddListForm setUserLists={props.setUserLists} ownerId={userId} />
    </div>
  );
}
