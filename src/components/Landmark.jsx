// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

// config
import * as variables from "../config/variables.js";

// components
import Modal from "./Modal.jsx";

/**
 * Class representing a point on the timeline.
 *
 * @class Landmark
 * @extends React.Component
 */
export default class Landmark extends React.Component {
  /**
   * Creates an instance of Landmark, and ties the state to props.
   *
   * @param {any} props year, century, url, image, heading, description
   * @memberof Landmark
   */
  constructor(props) {
    super(props);
    this.state = { data: props };
  }

  /**
   * Method to open the modal.
   * If the window width is greater than variables.FIRST_BREAK,
   * this method opens the modal associated with the Landmark
   * by rendering the Modal into div#modal-root
   *
   * @memberof Landmark
   */
  openModal = e => {
    if ($(window).width() > variables.FIRST_BREAK) {
      $("#modal-root")
        .removeClass("hide")
        .addClass("show");
      $("body").css("overflow", "hidden");
      ReactDOM.render(<Modal {...this.state.data} />, variables.MODAL_ROOT);
    }
  };

  /**
   * This method generates the landmark.
   * Shaped like a hexagon, when it initally renders on desktop,
   * you can only see the the landmark image, the landmark year,
   * and the landmark component
   *
   * @return div.landmark-container and its children
   * @memberof Landmark
   */
  render() {
    let { data } = this.state;

    let containerStyle =
      "landmark-container landmark-container-" + data.className;

    let century = data.century ? (
      <h1 className="century">{data.century}</h1>
    ) : null;

    /*
     * years styling, based on the presence of props.century
     * if the window width is between 600 and 768px,
     * set align-self to baseline and justify-content to flex-start
     * 
     * if the width is less than or equal to 600px,
     * set justify-content to flex-end
     * 
     * otherwise, if props.century doesn't exist,
     * don't add any styling
    */
    let yearsStyle =
      century &&
      $(window).width() <= variables.FIRST_BREAK &&
      $(window).width() > variables.SECOND_BREAK
        ? { alignSelf: "baseline", justifyContent: "flex-start" }
        : !century && $(window).width() <= variables.SECOND_BREAK
          ? { justifyContent: "flex-end" }
          : {};

    return (
      <div className={containerStyle} id={data.century}>
        <div className="years" style={yearsStyle}>
          {century}
          <h1 className="landmark-year">{data.year}</h1>
        </div>
        <LandmarkInfo {...data} openModal={this.openModal} />

        <div className="landmark-line" />

        <LandmarkHexagon {...data} openModal={this.openModal} />
      </div>
    );
  }
}

/**
 * Functional component that contains the landmark information.
 * The heading functions as a button that can open the modal
 *
 * @param {*} props heading, openModal(), description, and url
 * @return div.info: landmark title, description, and read more link
 */
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

/**
 * Functional component that contains the landmark image.
 * The outer div is styled to be shaped like a hexagon,
 * and functions as a button that can open the modal
 *
 * @param {*} props key, openModal, image, heading
 * @return div.landmark.hexagon: landmark image
 */
const LandmarkHexagon = props => {
  return (
    <div
      className="landmark hexagon"
      id={props.key}
      role="button"
      onClick={props.openModal}
    >
      <img className="landmark-img" src={props.image} alt={props.heading} />
    </div>
  );
};
