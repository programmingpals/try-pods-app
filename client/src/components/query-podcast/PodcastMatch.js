import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../providers/UserProvider";

export default function PodcastMatch(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [listName, setListName] = useState("");
  const { user } = useContext(userContext);

  const getListsByUser = function (userId, listId) {
    return axios
      .get(`/api/users/${userId}/lists/${listId}`)
      .then((response) => {
        let listName = response.data.data.attributes.name;
        setListName(listName);
        setIsLoading(false);
      });
  };

  getListsByUser(user, props.id);

  return (
    <div className="podcast-match">
      {!isLoading && (
        <Link to={`/podcastlist/${props.id}`}>
          <p>{listName}</p>
        </Link>
      )}
    </div>
  );
}
