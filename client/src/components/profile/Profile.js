import React, { useContext, useState, useEffect } from "react";
import ListGrid from "./ListGrid";
import Top8Grid from "./Top8Grid";
import Friend from "./Friend";
import axios from "axios";
import { useParams } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";
import Heart from "../../assets/icons/heart.png";

export default function Profile(props) {
  const [userLists, setUserLists] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [listOrg, setListOrg] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(userContext);

  const params = useParams();

  useEffect(() => {
    const getListsByUser = function (userId) {
      return axios.get(`/api/users/${userId}/lists`).then((response) => {
        return response.data.data;
      });
    };

    const getUserDetails = function (userId) {
      return axios.get(`/api/users/${userId}`).then((response) => {
        return response.data;
      });
    };

    const getFriendsByUser = function (userId) {
      return axios.get(`/api/users/${userId}/friendships`).then((response) => {
        return response.data.data;
      });
    };

    const apiCalls = function (userId) {
      return Promise.all([
        getListsByUser(userId),
        getUserDetails(userId),
        getFriendsByUser(userId),
      ]).then((results) => {
        const userLists = results[0];
        const userDetails = results[1];
        const userFriends = results[2];
        setUserLists(userLists);
        setUserDetails(userDetails);

        let listOrg = {
          top8: {},
          upNext: {},
          customLists: [],
        };

        userLists.map((list) => {
          if (list.attributes.name === "Top 8") {
            listOrg.top8 = list;
          } else if (list.attributes.name === "Up Next") {
            listOrg.upNext = list;
          } else {
            listOrg.customLists.push(list);
          }
        });

        setListOrg(listOrg);

        let friendOrg = [];

        userFriends.map((friend) => {
          const friendDetails = friend.attributes.friend;

          friendOrg.push({
            name: friendDetails.first_name,
            avatar: friendDetails.avatar,
            id: friendDetails.id,
          });
        });

        setUserFriends(friendOrg);
        setIsLoading(false);
      });
    };

    apiCalls(params.userId);
  }, [params.userId]);

  const friends = userFriends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        id={friend.id}
        name={friend.name}
        avatar={friend.avatar}
      />
    );
  });

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-details">
          <img src={userDetails.avatar} />
          <h2>{userDetails.first_name}</h2>
        </div>
        <div className="profile-top8">
          {!isLoading && <Top8Grid top8={listOrg.top8} />}
          <h3>My Top 8</h3>
        </div>
      </div>
      <hr />
      <div className="add-friend">
        <p>Add {userDetails.first_name}</p>
        <img src={Heart} />
      </div>
      <hr />
      {!isLoading && (
        <div className="friends-block">
          <p>The Inner Circle</p>
          {friends}
        </div>
      )}
      <hr />
      <div>
        {!isLoading && (
          <ListGrid
            userLists={userLists}
            setUserLists={setUserLists}
            customLists={listOrg.customLists}
            top8={listOrg.top8}
            upNext={listOrg.upNext}
          />
        )}
      </div>
    </div>
  );
}
