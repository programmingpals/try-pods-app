import React, { useContext} from "react";
import { userContext } from "../../providers/UserProvider";
import List from "./List";
import AddListForm from "./AddListForm";


export default function ListGrid(props) {

  const {user, addList} = useContext(userContext);

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
  <div>
    <h1>ListGrid Component</h1>
    {lists}
    <AddListForm addList={addList} />
  </div>
  )
}