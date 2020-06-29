import React, { Component } from "react";
import ReactPlayer from "react-player";

import video1 from "../images/videos/video1.svg";
import video2 from "../images/videos/video2.svg";
import video3 from "../images/videos/video3.svg";
import video4 from "../images/videos/video4.svg";
import video5 from "../images/videos/video5.svg";
import video6 from "../images/videos/video6.svg";

import "./styles/videosPage.css";

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "https://www.youtube.com/watch?v=bO0-rv6GhGU",
      videoTitle: "THE COLOR OF NOISE TOUR",
    };
  }

  handleClick = (newUrl, newTitle) => () => {
    this.setState({
      videoUrl: newUrl,
      videoTitle: newTitle,
    });
  };

  render() {
    return (
      <div className="video_container">
        <div className="video_feed">
          <table>
            <thead>
              <tr>
                <td>
                  <div className="container_vid">
                    <div
                      className="miniature"
                      onClick={this.handleClick(
                        "https://www.youtube.com/watch?v=bO0-rv6GhGU",
                        "THE COLOR OF NOISE TOUR"
                      )}
                    >
                      <img src={video1} alt="video1" />
                    </div>
                    <div className="Title">THE COLOR OF NOISE TOUR</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="container_vid">
                    <div
                      className="miniature"
                      onClick={this.handleClick(
                        "https://www.youtube.com/watch?v=NNZ9znVRr0E",
                        "AND AFTER THE SHOW...WE GAMBLE"
                      )}
                    >
                      <img src={video2} alt="video2" />
                    </div>
                    <div className="Title">AND AFTER THE SHOW...WE GAMBLE</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="container_vid">
                    <div
                      className="miniature"
                      onClick={this.handleClick(
                        "https://www.youtube.com/watch?v=2Xv8Rta1P1I",
                        "AOKI´S WORLD SEASON 2 - EP 17"
                      )}
                    >
                      <img src={video3} alt="video3" />
                    </div>
                    <div className="Title">AOKI´S WORLD SEASON 2 - EP 17</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="container_vid">
                    <div
                      className="miniature"
                      onClick={this.handleClick(
                        "https://www.youtube.com/watch?v=SHMt-LNydic",
                        "AOKI´S WORLD SEASON 2 - EP 16"
                      )}
                    >
                      <img src={video4} alt="video4" />
                    </div>
                    <div className="Title">AOKI´S WORLD SEASON 2 - EP 16</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="container_vid">
                    <div
                      className="miniature"
                      onClick={this.handleClick(
                        "https://www.youtube.com/watch?v=i6g_WB1U-5c",
                        "AOKI´S WORLD SEASON 2 - EP 15"
                      )}
                    >
                      <img src={video5} alt="video5" />
                    </div>
                    <div className="Title">AOKI´S WORLD SEASON 2 - EP 15</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="container_vid">
                    <div
                      className="miniature"
                      onClick={this.handleClick(
                        "https://www.youtube.com/watch?v=SYSZrSkxzaw",
                        "AOKI´S WORLD SEASON 2 - EP 14"
                      )}
                    >
                      <img src={video6} alt="video6" />
                    </div>
                    <div className="Title">AOKI´S WORLD SEASON 2 - EP 14</div>
                  </div>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="actual_video">
          <div className="video_player">
            <ReactPlayer url={this.state.videoUrl} />
          </div>
          <div className="video_title">
            <p>{this.state.videoTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;
