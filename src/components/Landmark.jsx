// react
import * as React from "react";

let PLACEHOLDER_IMG =
  "https://www.coopsandcages.com.au/blog/oe-content/uploads/2015/09/ferret_1.jpg";

export default class Landmark extends React.Component {
  render() {
    let landmarkStyle = "landmark landmark-";
    if (this.props.className.includes("single")) {
      landmarkStyle += "single";
    }
    let containerStyle = "landmark-container landmark-" + this.props.className;
    containerStyle.replace(" single", " ");

    return (
      <div className={containerStyle}>
        <div className="landmark-text">
          <h1>{this.props.year}</h1>
          <p>{this.props.heading}</p>
        </div>
        <div className="landmark-line" />
        <div
          className={landmarkStyle}
          id={this.props.id}
          data-century={this.props.century}
        >
          <img
            className="landmark-img"
            src={PLACEHOLDER_IMG}
            alt="placeholder"
          />
        </div>
      </div>
    );
  }
}
