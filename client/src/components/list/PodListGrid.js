import React, { Component, useState, useEffect, useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import PodListItem from "./PodListItem";
import axios from "axios";

export default function PodListGrid(props) {
  const user = useContext(userContext);
  console.log("user", user);

  // console.log("user from podlist:", user.user[0]);
  const list = { ...user.user[0] };
  // console.log("list:", list.attributes);
  const listAttributes = list.attributes;
  const podcastArr = { ...listAttributes };
  console.log("podcasts", podcastArr.podcasts);

  const podcastListArr = podcastArr.podcasts;
  console.log("podcastListArr", podcastListArr);

  // const podcasts = { ...podcastListArr };
  // const podcastMap = function () {
  //   podcasts.map((podcast) => {
  //     console.log("podcast:", podcast);
  //   });
  // };

  // podcastMap();

  // const lists = user.map((list) => {
  //   return (
  //     <PodListItem
  //       key={list.id}
  //       id={list.id}
  //       name={list.attributes.name}
  //       description={list.attributes.description}
  //     />
  //   );
  // });

  return (
    <div>
      <h1>Hello from PodListGrid!!!!!</h1>
      <PodListItem />
      {/* {lists}
      <AddListForm addList={addList} /> */}
    </div>
  );
}
