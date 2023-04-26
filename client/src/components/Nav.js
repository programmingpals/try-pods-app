import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import { searchContext } from "../providers/SearchToggleProvider";
import AnimateHeight from "react-animate-height";
import Rowan from "../assets/1Rowan.png";
import Logo from "../assets/icons/logo.png";
import TryPods from "../assets/trypods2.png"
import SearchWhite from "../assets/icons/search-white.png";
import "./Nav.scss";

export default function Nav() {
  const { height, setHeight } = useContext(searchContext);

  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <Link to={"/"} className="nav-link">
            <img src={TryPods} alt="Try-Pods logo"/>
            </Link>
            <h4 className="logo-name">Try-Pods</h4>
          
          
        </div>
        <div className="nav-right">
          <div className="nav-search">
            <a
              className="nav-link"
              href="#/"
              aria-expanded={height !== 0}
              aria-controls="example-panel"
              onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
              {height === 0 ? "Search" : "Close Search"}
            </a>
            <img src={SearchWhite} alt="search icon"/>
          </div>
          <div className="login-user">
            <Link to={"profilepage/1"} className="nav-link">
              <p>Rowan</p>
              <img src={Rowan} alt="profile-avatar"/>
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
