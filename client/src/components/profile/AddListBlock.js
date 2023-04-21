import React, { useState, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";
import AddListForm from "./AddListForm";

export default function AddListBlock(props) {
  const setUserLists = props.setUserLists;

  return (
    <div class="listitem">
      <Link to={"/addlist"} state={{ state: setUserLists }}>
        <p>Add New List</p>
      </Link>
    </div>
  );
}
