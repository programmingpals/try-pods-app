import React, { useState, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";
import AddListForm from "./AddListForm";
import Add from "../../assets/icons/add.png";

export default function AddListBlock(props) {
  const setUserLists = props.setUserLists;

  return (
    <div className="listitem-main">
      <Link to={"/addlist"} state={{ state: setUserLists }}>
        <img src={Add} className="add-list-icon" />
        <p className="add-list">Add New List</p>
      </Link>
      <p>Quick! Before you forget!</p>
    </div>
  );
}
