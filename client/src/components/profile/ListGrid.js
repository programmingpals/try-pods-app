import React, { useContext } from "react";
import { userListsContext } from "../../providers/UserProvider";
import List from "./List";
import AddListForm from "./AddListForm";
import AddListBlock from "./AddListBlock";
import { userContext } from "../../providers/UserProvider";

export default function ListGrid(props) {
  const { user } = useContext(userContext);
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
      <div class="listgrid">
        {lists}
        {userId === user && <AddListBlock setUserLists={props.setUserLists} />}
      </div>
    </div>
  );
}
