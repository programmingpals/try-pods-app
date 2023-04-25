import React from "react";
import "./WrapUp.scss";
import Liz from "../../assets/2Liz.png";
import Kate from "../../assets/3Kate.png";
import Rowan from "../../assets/1Rowan.png";
import Seafood from "../../assets/Seafood-Tower.png";
import TechStack from "../../assets/tech_stack.png";

export default function WrapUp() {
  return (
    <div className="wrap-container">
      <div className="hero">
      <h1>~ That's a wrap! ~</h1>
      </div>
      <h2>
        <em>The Try-Pods Team:</em>
      </h2>
      <div className="buds-container">
        <div>
          <img src={Kate} style={{ width: "200px" }} />
          <h4>Kate Booton</h4>
        </div>
        <div>
          <img src={Liz} style={{ width: "200px" }} />
          <h4>Liz Fosdick</h4>
        </div>
        <div>
          <img src={Rowan} style={{ width: "200px" }} />
          <h4>Rowan Mackenzie</h4>
        </div>
      </div>

      <div className="tech-stack-container">
        <h2><em>The Tech Stack:</em></h2>
        <div>
          <img src={TechStack} />
        </div>
      </div>
      <div className="future-features-container">
        <h2><em>Future Features:</em></h2>
        <div className="future-features">
          <p>Heavy Rotation</p>
          <p>Find Friends</p>
          <p>Episode Lists</p>
          <p>Spotify Integration</p>
        </div>
      </div>
      <div className="seafood-tower">
        <h2>
          <em>Up Next:</em>
        </h2>
        <img src={Seafood} />
      </div>
    </div>
  );
}
