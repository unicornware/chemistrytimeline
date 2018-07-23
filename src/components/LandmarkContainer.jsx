// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

// config
import * as variables from "../config/variables.js";

// components
import LandmarkHexagon from "./LandmarkHexagon.jsx";
import Modal from "./Modal.jsx";

/**
 * Class representing a point on the timeline.
 *
 * @class Landmark
 * @extends React.Component
 */
export default class LandmarkContainer extends React.Component {
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
      e.preventDefault();
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

    return (
      <div className={containerStyle} id={data.century}>
        <div className="landmark-text">
          {century}

          <h1 className="landmark-year">{data.year}</h1>

          <LandmarkInfo {...data} openModal={this.openModal} />
        </div>

        <div className="landmark-line" />

        <LandmarkHexagon
          className="landmark"
          adjust={data.adjust}
          id={data.id}
          image={data.image}
          openModal={this.openModal}
        />
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
      <a
        href={props.url}
        target="_blank"
        className="landmark-heading"
        onClick={props.openModal}
      >
        {props.heading}
      </a>
      <p className="landmark-description">{props.description}</p>
      <a href={props.url} className="landmark-link">
        Read More <i className="fas fa-chevron-right" />
      </a>
    </div>
  );
};
