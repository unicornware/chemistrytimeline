//react
import * as React from "react";

//react-router
import { BrowserRouter } from "react-router-dom";

// components
import Header from "./components/Header.jsx";

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
            <Header />
            <Timeline />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
