import React from "react";

import ultimateVipPackage from "../images/tickets/ultimate_vip_package.gif";
import cakeFaceVipPackage from "../images/tickets/cake_vip_package.gif";
import meetVipPackage from "../images/tickets/vip_meet_greet_package.gif";
import vipPackage from "../images/tickets/vip_package.gif";
import meetPackage from "../images/tickets/meet_great_package.gif";

import ultimateVipImage from "../images/tickets/ultimate_vip_package_image.svg";
import cakeFaceVipImage from "../images/tickets/cake_face_vip_package_image.svg";
import meetVipImage from "../images/tickets/vip_meet_image.svg";
import vipImage from "../images/tickets/playhouse_vip_package_image.svg";
import meetImage from "../images/tickets/meet_package_image.svg";

import "./styles/tickets.css";

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewUltimate: "",
      previewCake: "",
      previewMeetVip: "",
      previewPlayHouse: "",
      previewMeet: "",
      UltimateBorder: "",
      CakeBorder: "",
      MeetVipBorder: "",
      PlayHouseBorder: "",
      MeetBorder: "",
    };
  }

  displayUltimate = (e) => {
    this.setState({
      previewUltimate: "flex",
      previewCake: "none",
      previewMeetVip: "none",
      previewPlayHouse: "none",
      previewMeet: "none",
      UltimateBorder: "3px #e2b457 solid",
      CakeBorder: "3px #5aa9d9 solid",
      MeetVipBorder: "3px #5aa9d9 solid",
      PlayHouseBorder: "3px #5aa9d9 solid",
      MeetBorder: "3px #5aa9d9 solid",
    });
  };

  displayCake = (e) => {
    this.setState({
      previewUltimate: "none",
      previewCake: "flex",
      previewMeetVip: "none",
      previewPlayHouse: "none",
      previewMeet: "none",
      UltimateBorder: "3px #5aa9d9 solid",
      CakeBorder: "3px #e2b457 solid",
      MeetVipBorder: "3px #5aa9d9 solid",
      PlayHouseBorder: "3px #5aa9d9 solid",
      MeetBorder: "3px #5aa9d9 solid",
    });
  };

  displayMeetVip = (e) => {
    this.setState({
      previewUltimate: "none",
      previewCake: "none",
      previewMeetVip: "flex",
      previewPlayHouse: "none",
      previewMeet: "none",
      UltimateBorder: "3px #5aa9d9 solid",
      CakeBorder: "3px #5aa9d9 solid",
      MeetVipBorder: "3px #e2b457 solid",
      PlayHouseBorder: "3px #5aa9d9 solid",
      MeetBorder: "3px #5aa9d9 solid",
    });
  };

  displayPlayHouse = (e) => {
    this.setState({
      previewUltimate: "none",
      previewCake: "none",
      previewMeetVip: "none",
      previewPlayHouse: "flex",
      previewMeet: "none",
      UltimateBorder: "3px #5aa9d9 solid",
      CakeBorder: "3px #5aa9d9 solid",
      MeetVipBorder: "3px #5aa9d9 solid",
      PlayHouseBorder: "3px #e2b457 solid",
      MeetBorder: "3px #5aa9d9 solid",
    });
  };

  displayRegularMeet = (e) => {
    this.setState({
      previewUltimate: "none",
      previewCake: "none",
      previewMeetVip: "none",
      previewPlayHouse: "none",
      previewMeet: "flex",
      UltimateBorder: "3px #5aa9d9 solid",
      CakeBorder: "3px #5aa9d9 solid",
      MeetVipBorder: "3px #5aa9d9 solid",
      PlayHouseBorder: "3px #5aa9d9 solid",
      MeetBorder: "3px #e2b457 solid",
    });
  };

  render() {
    return (
      <div className="tickets_container">
        <div className="options">
          <button
            className="ultimate_vip_btn"
            onClick={this.displayUltimate}
            style={{ border: this.state.UltimateBorder }}
          >
            Ultimate Vip Package
          </button>
          <button
            className="cake_vip_btn"
            onClick={this.displayCake}
            style={{ border: this.state.CakeBorder }}
          >
            "Cake Face" Vip Package
          </button>
          <button
            className="meet_vip_btn"
            onClick={this.displayMeetVip}
            style={{ border: this.state.MeetVipBorder }}
          >
            Meet & Greet Vip Package
          </button>
          <button
            className="playhouse_vip_btn"
            onClick={this.displayPlayHouse}
            style={{ border: this.state.PlayHouseBorder }}
          >
            "Play House" Vip Package
          </button>
          <button
            className="meet_regular_btn"
            onClick={this.displayRegularMeet}
            style={{ border: this.state.MeetBorder }}
          >
            Meet & Greet Package
          </button>
        </div>
        <div className="ticket_info">
          <div
            className="ultimateVipPackage container_info"
            style={{ display: this.state.previewUltimate }}
          >
            <img
              className="poster"
              src={ultimateVipPackage}
              alt="ultimateVipPackage"
            />
            <img
              className="preview"
              src={ultimateVipImage}
              alt="ultimateVipImage"
            />
          </div>
          <div
            className="cakeFaceVipPackage container_info"
            style={{ display: this.state.previewCake }}
          >
            <img
              className="poster"
              src={cakeFaceVipPackage}
              alt="cakeFaceVipPackage"
            />
            <img
              className="preview"
              src={cakeFaceVipImage}
              alt="cakeFaceVipImage"
            />
          </div>
          <div
            className="meetVipPackage container_info"
            style={{ display: this.state.previewMeetVip }}
          >
            <img className="poster" src={meetVipPackage} alt="meetVipPackage" />
            <img className="preview" src={meetVipImage} alt="meetVipImage" />
          </div>
          <div
            className="vipPackage container_info"
            style={{ display: this.state.previewPlayHouse }}
          >
            <img className="poster" src={vipPackage} alt="vipPackage" />
            <img className="preview" src={vipImage} alt="vipImage" />
          </div>
          <div
            className="meetPackage container_info"
            style={{ display: this.state.previewMeet }}
          >
            <img className="poster" src={meetPackage} alt="meetPackage" />
            <img className="preview" src={meetImage} alt="meetImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tickets;
