import React, { Component } from "react";

import fundationBrand from "../images/aoki_fundation.svg";

import "./styles/fundationPage.css";

class FundationPage extends Component {
  render() {
    return (
      <div className="fundation_container">
        <div className="fundation_brand">
          <img src={fundationBrand} alt="brand" />
        </div>
        <div className="fundation_text">
          <p>
            The AOKI FOUNDATION's primary goal is supporting organizations in
            <br />
            the brain science and research areas with a specific focus on
            <br />
            regenerative medicine and brain preservation. Our vision is to one
            <br />
            day see a world where degenerative brain diseases do not exist and
            <br />
            science and technology play a direct role in extending the healthy
            <br />
            lives of ourselves and our loved ones. The Fund also supports
            <br />
            humanitarian causes dear and near to DJ/Producer Steve Aoki such as
            <br />
            disaster relief and animal-rights.
          </p>
        </div>
        <div className="fundation_buttons">
          <div className="button_donate">
            <a
              href="https://www.paypal.com/donate/?token=Yp7UTC-GZZvQX-zAg5K1FnzdZfOXlDpr6P201_dolTc7kfouaF_uD6ErX00iyYmutbIrfW&country.x=US&locale.x="
              target="blank"
            >
              <button>Donate</button>
            </a>
          </div>
          <div className="button_more">
            <a href="https://aokifoundation.org" target="blank">
              <button>More Info</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FundationPage;
