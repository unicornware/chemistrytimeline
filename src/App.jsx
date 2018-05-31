//react
import * as React from "react";

//react-router
import { BrowserRouter } from "react-router-dom";

// components
import Navigation from "./components/Navigation.jsx";

// views
import Timeline from "./views/Timeline.jsx";

//style
import "./style/css/normalize.min.css";
import "./style/css/app.min.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="wrapper" id="root-wrapper">
            <h1 className="root-heading">Landmarks Timeline</h1>
            <p className="root-subheading">
              Click the years to check out the history of chemistry
            </p>
            <Navigation />
            <Timeline />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
