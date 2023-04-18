import React, { Component, useState, useEffect, useContext } from "react";
import { userContext, UserProvider } from "../../providers/UserProvider";
import PodListGrid from "./PodListGrid";

export default function PodList(props) {
  const user = useContext(userContext);

  const list = { ...user.user[0] };
  console.log("list:", list.attributes);
  // const listAttributes = list.attributes;

  return (
    <div>
      <h1>Helllooooo from the PodList component</h1>
      <h2>{list.name}</h2>
      <h3>{list.description}</h3>
      <PodListGrid />
    </div>
  );
}
