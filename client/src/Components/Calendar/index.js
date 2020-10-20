import React from "react";
import Arc from "../Assets/logos/Arc.png";
import JDA from "../Assets/logos/JDA.png";
import Jer from "../Assets/logos/Jer.png";
import Jeru_Ministry from "../Assets/logos/Jeru_Ministry.png";
import JNEXT from "../Assets/logos/JNEXT.png";
import Taboola from "../Assets/logos/Taboola.jpg";
import Header from "../Header";
import "./style.css";

export default function Calendar() {
  const logos = [Arc, JDA, Jer, Jeru_Ministry, JNEXT, Taboola];

  return (
    <div>
      <Header>Our sponsors</Header>
      <div className="container container-calendar">
        <div className="row">
          <div className="col-lg-12" display="flex">
            <div>
              {logos.map((e, i) => (
                <img className="logo" src={logos[i]} alt="sponsor logo"></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
