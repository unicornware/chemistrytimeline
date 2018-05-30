//react
import * as React from "react";

//react-router
import { BrowserRouter } from "react-router-dom";

// components
import Navigation from "./components/Navigation.jsx";
import Modal from "./components/Modal.jsx";

//style
import "./style/css/normalize.min.css";
import "./style/css/app.min.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="wrapper" id="root-wrapper">
            <h1>Landmarks Timeline</h1>
            <p>Click the years to check out the history of chemistry</p>
            <Navigation />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
