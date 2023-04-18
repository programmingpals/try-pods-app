import React, { Component, useState, useEffect, useContext } from "react";
import { userContext, UserProvider } from "../../providers/UserProvider";
import PodListGrid from "./PodListGrid";

export default function PodList(props) {
  const { user, listDetails } = useContext(userContext);

  console.log(listDetails.name);
  // const list = { ...user.user[0] };
  // console.log("list:", list.attributes);
  // // const listAttributes = list.attributes;
  // const listAttributes = { ...list.attributes };
  // console.log("listAttributes", listAttributes);

  return (
    <div>
      <h1>Helllooooo from the PodList component</h1>
      <h2>List Name: {listDetails.name}</h2>
      <h3>List Description: {listDetails.description}</h3>
      <PodListGrid />
    </div>
  );
}
