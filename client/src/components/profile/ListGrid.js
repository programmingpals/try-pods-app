import React, { useContext } from "react";
import { userListsContext } from "../../providers/UserProvider";
import List from "./List";
import AddListForm from "./AddListForm";
import AddListBlock from "./AddListBlock";
import { userContext } from "../../providers/UserProvider";

export default function ListGrid(props) {
  const { user } = useContext(userContext);
  let userId = null;

  const lists = props.customLists.map((list) => {
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
      <div className="listgrid">
        <div className="list-section">
          <div className="section-title">
            <h3>#The Standards</h3>
          </div>
          <div className="lists">
            <List
              key={props.top8.id}
              id={props.top8.id}
              name={props.top8.attributes.name}
              description={props.top8.attributes.description}
              ownerId={userId}
              setUserLists={props.setUserLists}
            />

            <List
              key={props.upNext.id}
              id={props.upNext.id}
              name={props.upNext.attributes.name}
              description={props.upNext.attributes.description}
              ownerId={userId}
              setUserLists={props.setUserLists}
            />
            {userId === user && (
              <AddListBlock setUserLists={props.setUserLists} />
            )}
          </div>
        </div>
        <div className="lists-section">
          <div className="section-title">
            <h3>#The Custom</h3>
          </div>
          <div className="lists">{lists}</div>
        </div>
      </div>
    </div>
  );
}
