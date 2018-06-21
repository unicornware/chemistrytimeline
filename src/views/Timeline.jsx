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

  /**
   * Once the component is mounted,
   * this.state.colMap is populated with by the Landmark components found
   * in this.state.data. The keys of colMap correspond to the columns the
   * Landmarks will be placed in.
   * @return {void}@memberof Timeline
   */
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

  /**
   * Based on this.state.colMap, this method generates
   * the timeline columns and places the landmarks inside of them.
   * @memberof Timeline
   */
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

  /**
   * Scrolls the timeline backwards.
   * @memberof Timeline
   */
  previous = () => {
    let scroll = $("#timeline").scrollLeft() - $("#col-0").width() * 2;
    $("#timeline").animate({ scrollLeft: scroll }, 500, "swing");
  };

  /**
   * Scrolls the timeline forward.
   * @memberof Timeline
   */
  next = () => {
    let scroll = $("#timeline").scrollLeft() + $("#col-0").width() * 2;
    $("#timeline").animate({ scrollLeft: scroll }, 500, "swing");
  };

  /**
   * Populated by makeCols(), this method generates
   * div#timeline and its children.
   *
   * @return div#timeline and its children
   * @memberof Timeline
   */
  render() {
    return (
      <div id="timeline">
        <button id="timeline-prev" onClick={this.previous}>
          <i className="fas fa-chevron-left" />
        </button>
        {this.makeCols()}
        <button id="timeline-next" onClick={this.next}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}
