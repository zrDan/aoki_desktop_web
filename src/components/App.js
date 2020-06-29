import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import FundationPage from "../pages/FundationPage";
import TourPage from "../pages/TourPage";
import VideoPage from "../pages/VideosPage";

import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aoki_fundation" component={FundationPage} />
          <Route exact path="/tour" component={TourPage} />
          <Route exact path="/videos" component={VideoPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
