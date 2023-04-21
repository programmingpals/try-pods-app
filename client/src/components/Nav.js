import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import { searchContext } from "../providers/SearchToggleProvider";
import AnimateHeight from "react-animate-height";

export default function Nav() {
  const { height, setHeight } = useContext(searchContext);

  return (
    <div>
      <div class="nav">
        <div class="nav-left">
          <h4>Try-Pods</h4>
        </div>
        <div class="nav-right">
          <a
            href="#"
            aria-expanded={height !== 0}
            aria-controls="example-panel"
            onClick={() => setHeight(height === 0 ? "auto" : 0)}
          >
            {height === 0 ? "Search" : "Close Search"}
          </a>
          <p>
            <Link to={"profilepage/1"}>My Profile</Link>
          </p>
          <p>Rowan</p>
        </div>
      </div>
      <div class="toggle-search">
        <AnimateHeight
          id="example-panel"
          duration={500}
          height={height} // see props documentation below
        >
          <Search />
        </AnimateHeight>
      </div>
    </div>
  );
}

// <Link to={"podcastresult"}>Click to view a query result page</Link>
// <Link to={"podcastlist/1"}>Click to view a podcast list page</Link>
