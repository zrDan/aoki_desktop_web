import React, { Component } from "react";

import aokiCover from "../images/aoki_cover.png";
import aokiTitle from "../images/neon_future.svg";
import buttonListen from "../images/button_listen.png";
import "./styles/homePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="home_main_container">
        <div className="aoki_cover">
          <img src={aokiCover} alt="aokiCover" />
        </div>
        <div className="aoki_text">
          <div className="banner_container">
            <img className="banner" src={aokiTitle} alt="banner" />
          </div>
          <div className="button_container">
            <a href="https://ffm.to/neonfuture4" target="blank">
              <img className="button" src={buttonListen} alt="button" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
