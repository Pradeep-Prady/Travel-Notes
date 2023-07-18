import React from "react";
import "./navbar.css";
import logo from "../images/notes.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <a href="#javascript">Travel Notes</a>
      </div>
      <div className="links">
        <li>
          <a href="#javascript">Home</a>
        </li>
        <li>
          <a href="#javascript">About</a>
        </li>

        <li>
          <a href="#javascript">Notes</a>
        </li>

        <li>
          <a href="#javascript">Contacts</a>
        </li>
      </div>
      <div className="profile-container">
        <a href="#javascript">Pradeep M</a>
      </div>
    </div>
  );
}
