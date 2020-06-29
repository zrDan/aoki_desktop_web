import React from "react";
import NavBar from "./NavBar";

import "./styles/layout.css";

function Layout(props) {
  return (
    <div className="main_container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;
