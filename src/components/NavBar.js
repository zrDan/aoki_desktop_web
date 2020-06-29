import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrow from "../images/menu_arrow.svg";
import instagram from "../images/social_media/instagram.svg";
import facebook from "../images/social_media/facebook.svg";
import twitter from "../images/social_media/twitter.svg";
import spotify from "../images/social_media/spotify.svg";
import youtube from "../images/social_media/youtube.svg";
import soundcloud from "../images/social_media/souncloud.svg";

import "./styles/navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: "",
      bgColor: "",
    };
  }

  homeNavClick = (e) => {
    this.setState({
      textColor: "#ffffff",
      bgColor: "#2a3945",
    });
  };

  navWhiteClick = (e) => {
    this.setState({
      textColor: "#ffffff",
      bgColor: "#1C1D1D",
    });
  };

  render() {
    return (
      <div
        className="navbar_container"
        style={{ backgroundColor: this.state.bgColor }}
      >
        <ul className="navbar_list">
          <li>
            <Link
              to="/aoki_fundation"
              style={{ color: this.state.textColor }}
              onClick={this.navWhiteClick}
            >
              AOKI FUNDATION
            </Link>
          </li>
          <li>
            <Link
              to="/tour"
              style={{ color: this.state.textColor }}
              onClick={this.navWhiteClick}
            >
              TOUR DATES
            </Link>
          </li>
          <li>
            <Link
              to="/videos"
              style={{ color: this.state.textColor }}
              onClick={this.navWhiteClick}
            >
              VIDEOS
            </Link>
          </li>
          <li>
            <Link to="/" onClick={this.homeNavClick}>
              <div className="logo"></div>
            </Link>
          </li>
          <li>
            <a
              href="https://dimmakcollection.com"
              target="blank"
              style={{ color: this.state.textColor }}
            >
              MERCH
            </a>
          </li>
          <li>
            <a
              href="https://pizzaoki.com"
              target="blank"
              style={{ color: this.state.textColor }}
            >
              PIZZAOKI
            </a>
          </li>
          <li style={{ color: this.state.textColor }}>
            SOCIAL MEDIA
            <img className="arrow" src={arrow} alt="arrow_menu" />
            <ul>
              <li>
                <a href="http://instagram.com/steveaoki" target="blank">
                  <img className="instagram" src={instagram} alt="icon" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/steveaoki/" target="blank">
                  <img className="facebook" src={facebook} alt="icon" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/steveaoki" target="blank">
                  <img className="twitter" src={twitter} alt="icon" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/playlist/739NZ2VamBznlYHqRN0r03"
                  target="blank"
                >
                  <img className="spotify" src={spotify} alt="icon" />
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/steveaoki" target="blank">
                  <img className="youtube" src={youtube} alt="icon" />
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://soundcloud.com/steveaoki" target="blank">
                  <img className="soundcloud" src={soundcloud} alt="icon" />
                  Souncloud
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
