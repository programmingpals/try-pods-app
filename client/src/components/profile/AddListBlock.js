import React from "react";
import { Link } from "react-router-dom";
import Add from "../../assets/icons/add.png";

export default function AddListBlock(props) {
  const setUserLists = props.setUserLists;

  return (
    <div className="listitem-main">
      <Link to={"/addlist"} state={{ state: setUserLists }}>
        <p className="add-list">Add New List</p>
        <img src={Add} className="add-list-icon" alt="add icon" />
      </Link>
    </div>
  );
}
