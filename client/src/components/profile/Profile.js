import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/UserProvider";
import ListGrid from "./ListGrid";
import Top8Grid from "./Top8Grid";
import Friend from "./Friend";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeartFilled from "../../assets/icons/heart-filled.png";
import blank from "../../assets/icons/blank.png";

export default function Profile(props) {
  const [userLists, setUserLists] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [userPodcasts, setUserPodcasts] = useState([]);
  const [listOrg, setListOrg] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(userContext);
  const params = useParams();
  const userIdInt = parseInt(params.userId);

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

    const getPodcastsByUser = function (userId) {
      return axios.get(`/api/users/${userId}/podcasts`).then((response) => {
        return response.data;
      });
    };

    const apiCalls = function (userId) {
      return Promise.all([
        getListsByUser(userId),
        getUserDetails(userId),
        getFriendsByUser(userId),
        getPodcastsByUser(userId),
      ]).then((results) => {
        const userLists = results[0];
        const userDetails = results[1];
        const userFriends = results[2];
        const userPodcasts = results[3];
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
            return listOrg.top8;
          } else if (list.attributes.name === "Up Next") {
            listOrg.upNext = list;
            return listOrg.upNext;
          } else {
            listOrg.customLists.push(list);
            return listOrg.customLists;
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
          return friendOrg;
        });

        setUserFriends(friendOrg);

        let podcastsOrg = [];

        userPodcasts.map((podcast) => {
          podcastsOrg.push({ image: podcast.image, uuid: podcast.pod_uuid });
          return podcastsOrg;
        });

        const seen = new Set();
        const uniquePodcasts = podcastsOrg.filter((item) => {
          const duplicate = seen.has(item.uuid);
          seen.add(item.uuid);
          return !duplicate;
        });

        setUserPodcasts(uniquePodcasts);
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

  const top8Link = listOrg.top8?.id;

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-details">
          <img src={userDetails.avatar} alt="User Avatar" />
          <h2>{userDetails.first_name}</h2>
        </div>
        <div className="profile-top8">
          <Link to={`/podcastlist/${top8Link}`}>
            <h3>My Top 8</h3>
          </Link>
          {!isLoading && <Top8Grid top8={listOrg.top8} />}
        </div>
      </div>
      <hr className="profile-hr" />
      {user !== userIdInt && (
        <div className="add-friend">
          <p>Add {userDetails.first_name}</p>
          <img src={HeartFilled} alt="heart-icon" />
        </div>
      )}
      {user === userIdInt && (
        <div className="add-friend">
          <img src={blank} alt="blank placeholder" />
        </div>
      )}

      <hr className="profile-hr" />
      {!isLoading && (
        <div className="friends-block">
          <p className="friends-title">The Inner Circle</p>
          {friends}
        </div>
      )}
      <hr className="profile-hr" />
      <div>
        {!isLoading && (
          <ListGrid
            userLists={userLists}
            setUserLists={setUserLists}
            customLists={listOrg.customLists}
            top8={listOrg.top8}
            upNext={listOrg.upNext}
            podcasts={userPodcasts}
          />
        )}
      </div>
    </div>
  );
}
