// react
import * as React from "react";

// jquery
import $ from "jquery";

// helpers
import LandmarkGenerator from "../helpers/LandmarkGenerator.js";

const GENERATOR = new LandmarkGenerator();

/**
 * Timeline view.
 * The timeline contains several hexagon shaped landmarks
 */
export default class Timeline extends React.Component {
  state = { data: GENERATOR.getLandmarks(), colMap: new Map() };

  makeCols = () => {
    const { colMap } = this.state;

    let cols = [];
    for (let i = 0; i < 54; i++) {
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

  previous = () => {
    let scroll = $("#timeline-wrapper").scrollLeft() - $("#col-0").width() * 2;
    $("#timeline-wrapper").animate({ scrollLeft: scroll }, 500, "swing");
  };

  next = () => {
    let scroll = $("#timeline-wrapper").scrollLeft() + $("#col-0").width() * 2;
    $("#timeline-wrapper").animate({ scrollLeft: scroll }, 500, "swing");
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
    return (
      <div id="timeline">
        <div className="wrapper" id="timeline-wrapper">
          <button id="timeline-prev" onClick={this.previous}>
            <i className="fas fa-chevron-left" />
          </button>
          {this.makeCols()}
          <button id="timeline-next" onClick={this.next}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}
