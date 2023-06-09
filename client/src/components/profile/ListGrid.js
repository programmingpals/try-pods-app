import React, { useContext } from "react";
import List from "./List";
import AddListBlock from "./AddListBlock";
import { userContext } from "../../providers/UserProvider";
import PodcastItem from "./PodcastItem";
import allDots from "../../assets/backgrounds/all-dot-background.svg";

export default function ListGrid(props) {
  const { user } = useContext(userContext);
  let userId = null;

  const lists = props.customLists.map((list) => {
    userId = list.attributes.user_id;
    return (
      <List
        key={list.id}
        id={list.id}
        name={list.attributes.name}
        description={list.attributes.description}
        ownerId={userId}
        setUserLists={props.setUserLists}
      />
    );
  });

  const podcasts = props.podcasts.map((podcast) => {
    return (
      <PodcastItem
        key={podcast.uuid}
        uuid={podcast.uuid}
        image={podcast.image}
      />
    );
  });

  return (
    <div>
      <div className="listgrid">
        <div className="list-section">
          <div className="section-title">
            <h3>
              <span className="hash-tag">#</span>The Standards
            </h3>
          </div>
          <div className="lists">
            <div className="top8-block">
              <List
                key={props.top8.id}
                id={props.top8.id}
                name={props.top8.attributes.name}
                description={props.top8.attributes.description}
                ownerId={userId}
                setUserLists={props.setUserLists}
              />
            </div>
            <div className="up-next-block">
              <List
                key={props.upNext.id}
                id={props.upNext.id}
                name={props.upNext.attributes.name}
                description={props.upNext.attributes.description}
                ownerId={userId}
                setUserLists={props.setUserLists}
              />
            </div>
            {userId === user && (
              <div className="add-list-block">
                <AddListBlock setUserLists={props.setUserLists} />
              </div>
            )}
          </div>
        </div>
        <div className="lists-section">
          <div className="section-title">
            <h3>
              <span className="hash-tag">#</span>The Custom
            </h3>
          </div>
          <div className="lists custom-block">
            <div
              className="custom-block"
              style={{ backgroundImage: `url(${allDots})` }}
            >
              {lists}
            </div>
          </div>
          <div className="section-title">
            <h3>
              <span className="hash-tag">#</span>The Specifics
            </h3>
          </div>
          <div className="podcasts">{podcasts}</div>
        </div>
      </div>
    </div>
  );
}
