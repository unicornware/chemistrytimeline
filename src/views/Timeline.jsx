// react
import * as React from "react";

// jquery
import $ from "jquery";

// components
import Landmark from "../components/Landmark.jsx";

// data
import landmarks from "../data/landmarks.json";

// helpers
import LandmarkGenerator from "../helpers/LandmarkGenerator.js";

const generator = new LandmarkGenerator(landmarks);

/**
 * Timeline view.
 * The timeline contains several hexagon landmarks
 */
export default class Timeline extends React.Component {
  state = { data: generator.getLandmarks() };

  makeCols = () => {
    let cols = [];
    for (let i = 0; i < landmarks.length / 2; i++) {
      let colId = "col-" + i;
      let div = <div key={colId} className="timeline-col" id={colId} />;
      cols.push(div);
    }
    return cols;
  };

  insertCols = () => {
    // insert one landmark in each div at i = 0, i = 1
    // then starting at i = 2, alternate between
    // inserting 2 landmarks in a div, then 1
  };

  render() {
    return <div id="timeline">{this.makeCols()}</div>;
  }
}
