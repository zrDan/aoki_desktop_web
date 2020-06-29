import React, { Component } from "react";

import mainTour from "../images/tour_main.gif";
import Tickets from "../components/Tickets";

import "./styles/tourPage.css";

class TourPage extends Component {
  render() {
    return (
      <div className="tour_container">
        <div id="slider">
          <input type="radio" name="slider" id="slide1" checked />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
          <input type="radio" name="slider" id="slide4" />
          <div id="slides">
            <div id="overflow">
              <div className="inner">
                <div className="slide slide_1">
                  <div className="slide-content">
                    <img
                      className="color_tour"
                      src={mainTour}
                      alt="color_tour"
                    />
                  </div>
                </div>
                <div className="slide slide_2">
                  <div className="slide-content">
                    <Tickets />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="controls">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
            <label htmlFor="slide4"></label>
          </div>
        </div>
      </div>
    );
  }
}

export default TourPage;
