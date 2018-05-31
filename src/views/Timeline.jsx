// react
import * as React from "react";

// data
import landmarks from "../data/landmarks.json";

// helpers
import LandmarkGenerator from "../helpers/LandmarkGenerator.js";

const GENERATOR = new LandmarkGenerator(landmarks);

/**
 * Timeline view.
 * The timeline contains several hexagon landmarks
 */
export default class Timeline extends React.Component {
  state = { data: GENERATOR.getLandmarks(), colMap: new Map() };

  makeCols = () => {
    const { colMap } = this.state;

    let cols = [];
    for (let i = 0; i < colMap.size; i++) {
      let colId = "col-" + i;
      let div = (
        <div key={colId} className="timeline-col" id={colId}>
          {colMap.get(i)}
        </div>
      );
      cols.push(div);
    }

    return cols;
  };

  componentDidMount() {
    const { data } = this.state;
    let map = new Map();

    let col = 0;
    let evenDiff = 0;
    let oddDiff = 1;
    while (col < data.length - 1) {
      if (col < 2) {
        map.set(col, [data[col]]);
      } else if (col % 2 === 0) {
        map.set(col, [data[col + (evenDiff + 1)], data[col + evenDiff]]);
        evenDiff++;
      } else if (col % 2 !== 0) {
        map.set(col, [data[col + oddDiff]]);
        oddDiff++;
      }
      col++;
    }

    this.setState({ colMap: map });
  }

  render() {
    return <div id="timeline">{this.makeCols()} </div>;
  }
}
