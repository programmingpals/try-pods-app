import React, { useState, useRef, useEffect } from "react";
import { gql } from "@apollo/client";
import PodResultItem from "./PodResultItem";
import { client } from "../../taddyClient";

export default function Search() {
  const [searchQuery, setsearchQuery] = useState("");
  const [podcast, setPodcast] = useState([]);
  const [show, setShow] = useState(false);
  const componentRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick, {
      capture: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, {
        capture: true,
      });
    };
  }, []);

  function handleQueryChange(event) {
    event.preventDefault();
    setsearchQuery(event.target.value);
  }

  function taddyCall() {
    client
      .query({
        query: gql`
        {
          searchForTerm(term:"${searchQuery}", filterForTypes:PODCASTSERIES){
                searchId
                podcastSeries{
                    uuid
                    name
                    itunesId
                    description (shouldStripHtmlTags: true)
                    websiteUrl
                    language
                    authorName
                    isCompleted
                    totalEpisodesCount
                    rssUrl
                    imageUrl
                    datePublished
                }
            }
        }
        `,
      })
      .then((result) => {
        const podcast = result.data.searchForTerm.podcastSeries;
        setPodcast(podcast);
        setsearchQuery("");
      })
      .catch((err) => console.log(err));
  }

  const podcastResults = podcast.map((p) => {
    return (
      <PodResultItem
        key={p.uuid}
        attributes={p}
        uuid={p.uuid}
        name={p.name}
        description={p.description}
        image={p.imageUrl}
        setPodcast={setPodcast}
      />
    );
  });

  return (
    <div className="search">
      <div className="search-form" ref={componentRef}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleQueryChange}
          onKeyDown={(event) => {
            if (event.key === "Enter" && searchQuery.length > 0) {
              setShow(true);
              taddyCall();
            }
          }}
        />

        <button
          onClick={() => {
            if (searchQuery.length > 0) {
              setShow(true);
              taddyCall();
            }
          }}
        >
          Search
        </button>
      </div>
      {show && (
        <div className="search-results-container" ref={componentRef}>
          {podcastResults}
        </div>
      )}
    </div>
  );
}
