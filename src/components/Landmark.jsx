// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

// components
import Modal from "./Modal.jsx";

const MODAL_ROOT = document.getElementById("modal-root");

let PLACEHOLDER_IMG =
  "https://www.coopsandcages.com.au/blog/oe-content/uploads/2015/09/ferret_1.jpg";

export default class Landmark extends React.Component {
  constructor(props) {
    super(props);
    this.id = "landmark-" + this.props.id;
  }

  openModal = () => {
    $("#modal-root")
      .removeClass("hide")
      .addClass("show");
    ReactDOM.render(<Modal {...this.props} />, MODAL_ROOT);
  };

  render() {
    let containerStyle =
      "landmark-container landmark-container-" + this.props.className;

    return (
      <div className={containerStyle}>
        <div className="landmark-text">
          <h1>{this.props.year}</h1>
          <p role="button" onClick={this.openModal}>
            {this.props.heading}
          </p>
        </div>
        <div className="landmark-line" />
        <div
          className="landmark hexagon"
          id={this.id}
          data-century={this.props.century}
          role="button"
          onClick={this.openModal}
        >
          <img
            className="landmark-img"
            src={PLACEHOLDER_IMG}
            alt={this.props.heading}
          />
        </div>
      </div>
    );
  }
}
