import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Top8Item(props) {
  console.log(props.uuid);
  return (
    <div className="top8-item">
      <Link to={`/querypodcast/${props.uuid}`}>
        <img src={`${props.image}`} style={{ width: "60px" }} />
      </Link>
    </div>
  );
}
