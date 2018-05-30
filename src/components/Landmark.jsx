// react
import * as React from "react";

// jquery
import $ from "jquery";

let PLACEHOLDER_IMG =
  "https://www.coopsandcages.com.au/blog/oe-content/uploads/2015/09/ferret_1.jpg";

export default class Landmark extends React.Component {
  render() {
    let className = "landmark " + this.props.className;

    return (
      <div
        className={className}
        id={this.props.id}
        data-century={this.props.century}
      >
        <img className="landmark-img" src={PLACEHOLDER_IMG} alt="placeholder" />
      </div>
    );
  }
}
