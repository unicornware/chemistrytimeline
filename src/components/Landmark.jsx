// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

// components
import Modal from "./Modal.jsx";

// helpers
import "../helpers/functions.js";

let PLACEHOLDER_IMG =
  "https://www.coopsandcages.com.au/blog/oe-content/uploads/2015/09/ferret_1.jpg";

export default class Landmark extends React.Component {
  constructor(props) {
    super(props);
    this.id = "landmark-" + this.props.id;
  }

  openModal = () => {
    if ($(window).width() > 768) {
      $("#modal-root")
        .removeClass("hide")
        .addClass("show");
      ReactDOM.render(
        <Modal {...this.props} />,
        document.getElementById("modal-root")
      );
    }
  };

  render() {
    let containerStyle =
      "landmark-container landmark-container-" + this.props.className;

    let century = this.props.century ? (
      <h1 className="century">{this.props.century}</h1>
    ) : null;
    return (
      <div className={containerStyle} id={this.props.century}>
        <div
          className="years"
          style={
            this.props.century &&
            $(window).width() <= 768 &&
            $(window).width() > 600
              ? { alignSelf: "baseline" }
              : !this.props.century && $(window).width() <= 600
                ? { justifyContent: "flex-end" }
                : {}
          }
        >
          {century}
          <h1 className="landmark-year">{this.props.year}</h1>
        </div>
        <LandmarkInfo {...this.props} openModal={this.openModal} />

        <div className="landmark-line" />

        <LandmarkHexagon {...this.props} openModal={this.openModal} />
      </div>
    );
  }
}

const LandmarkInfo = props => {
  return (
    <div className="info">
      <p className="landmark-heading" role="button" onClick={props.openModal}>
        {props.heading}
      </p>
      <p className="landmark-description">{props.description}</p>
      <a href={props.url} className="landmark-link">
        Read More <i className="fas fa-chevron-right" />
      </a>
    </div>
  );
};

const LandmarkHexagon = props => {
  return (
    <div
      className="landmark hexagon"
      id={"landmark-" + props.id}
      role="button"
      onClick={props.openModal}
    >
      <img className="landmark-img" src={PLACEHOLDER_IMG} alt={props.heading} />
    </div>
  );
};
