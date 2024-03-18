import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div id="navbar">
        <div id="logo">
          <h1>Social</h1>
        </div>

        <div id="links">
          {" "}
          <Link id="Link" to="/">
            Home
          </Link>
          <Link id="Link" to="/contact">
            Contact
          </Link>
          <Link id="Link" to="/about">
            About
          </Link>
          <Link id="Link" to="/posts">
            Posts
          </Link>
        </div>
      </div>
      <video height="800" width="100%" controls>
        <source src={require("./Video/video.mp4")} type="video/mp4" />{" "}
      </video>
    </div>
  );
}
