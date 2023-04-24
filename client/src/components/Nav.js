import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import { searchContext } from "../providers/SearchToggleProvider";
import AnimateHeight from "react-animate-height";
import Rowan from "../assets/1Rowan.png";
import Logo from "../assets/icons/logo.png";
import SearchWhite from "../assets/icons/search-white.png";
import "./Nav.scss";

export default function Nav() {
  const { height, setHeight } = useContext(searchContext);

  return (
    <div>
      <div class="nav">
        <div class="nav-left">
          <Link to={"/"} class="nav-link">
            <img src={Logo} />
            <h4 className="logo-name">Try-Pods</h4>
          </Link>
        </div>
        <div class="nav-right">
          <div className="nav-search">
            <a
              class="nav-link"
              href="#"
              aria-expanded={height !== 0}
              aria-controls="example-panel"
              onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
              {height === 0 ? "Search" : "Close Search"}
            </a>
            <img src={SearchWhite} />
          </div>
          {/* <p>
            <Link to={"profilepage/1"} class="nav-link">
              My Profile
            </Link>
          </p> */}
          <div className="login-user">
            <Link to={"profilepage/1"} class="nav-link">
              <p>Rowan</p>
              <img src={Rowan} />
            </Link>
          </div>
        </div>
      </div>
      <div className="toggle-search">
        <AnimateHeight id="example-panel" duration={500} height={height}>
          <Search />
        </AnimateHeight>
      </div>
    </div>
  );
}
