import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import PodListItem from "./PodListItem";
import axios from "axios";

export default function PodListGrid(props) {
  const { user, list } = useContext(userContext);
  console.log("user", user);
  console.log("list", list);

  const podcasts = list.map((podcast) => {
    console.log(podcast);
    return (
      <PodListItem
        key={podcast.id}
        id={podcast.id}
        title={podcast.title}
        description={podcast.description}
      />
    );
  });

  return (
    <div>
      <h1>Hello from PodListGrid!!!!!</h1>
      {podcasts}
      {/* <AddListForm addList={addList} /> */}
    </div>
  );
}
