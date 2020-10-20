import React from "react";
import Logo from "../Assets/Logo.png";
import "./style.css";

export default function Nav() {
  return (
    <ul className="nav d-flex">
      <li className=" mr-auto p-2 nav-item">
        <a className="nav-logo">
          <img src={Logo} alt="logo" width="70" height="75"></img>
        </a>
      </li>

      <li className="nav-item my-auto p-2">
        <a className="nav-link">English</a>
      </li>
      <li className="nav-item my-auto p-2">
        <a className="nav-link">اللغات</a>
      </li>
      <li className="nav-item my-auto">
        <a className="nav-link ">עברית</a>
      </li>
    </ul>
  );
}
