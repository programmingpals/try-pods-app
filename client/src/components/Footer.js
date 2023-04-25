import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer () {

  return (
      <div className="footer"><p>Copyright 2023 Bootcamp Buds</p>
        <p><Link to="/wrapup">Wrap Up!</Link></p>
      </div>
  )
};

