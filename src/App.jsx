//react
import * as React from "react";

//react-router
import { MemoryRouter } from "react-router-dom";

// utils
import { previous, next } from "./helpers/utils.js";

// components
import Header from "./components/Header.jsx";

// views
import Timeline from "./views/Timeline.jsx";

//style
import "./style/css/app.min.css";

export default class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <React.Fragment>
          <Header />
          <div className="btn-container">
            <button className="btn-scroll-timeline" onClick={previous}>
              <i className="fas fa-chevron-left" />
            </button>
          </div>

          <Timeline />

          <div className="btn-container">
            <button className="btn-scroll-timeline" onClick={next}>
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </React.Fragment>
      </MemoryRouter>
    );
  }
}
