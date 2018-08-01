// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

// config
import * as variables from "../config/variables.js";

// components
import LandmarkHexagon from "./LandmarkHexagon.jsx";

/**
 * Class representing a modal. Users can view the landmark information
 * and navigate to other modals.
 *
 * @class Modal
 * @extends React.Component
 */
export default class Modal extends React.Component {
  /**
   * Creates an instance of Modal, and ties the state to props.
   *
   * @param {any} props year, url, image, heading, description
   * @memberof Modal
   */
  constructor(props) {
    super(props);
    this.state = { data: props };
  }

  /**
   * Method to close the modal by removing .show from the modal
   * and adding .hide. The modal is then unmounted from div#modal-root.
   *
   * @memberof Modal
   */
  closeModal = () => {
    $("#modal-root")
      .removeClass("show")
      .addClass("hide");
    $("body").css("overflow", "scroll");
    ReactDOM.unmountComponentAtNode(variables.MODAL_ROOT);
  };

  /**
   * This method allows the user to view the previous landmark's data.
   *
   * @memberof Modal
   */
  previous = () => {
    this.setState({ data: this.state.data.prev });
  };

  /**
   * This method allows the user to view the next landmark's data.
   *
   * @memberof Modal
   */
  next = () => {
    this.setState({ data: this.state.data.next });
  };

  openLink = () => {
    window.open(this.state.data.url, "_blank");
  };

  /**
   * When the modal is mounted onto div#modal-root,
   * a resize listener is attached to the window.
   * If the modal is open, and the window width is less than or equal
   * to variables.FIRST_BREAK, the modal will be closed.
   *
   * @return {void}@memberof Modal
   */
  componentDidMount() {
    $(window).resize(() => {
      if ($(window).width() <= variables.FIRST_BREAK) {
        this.closeModal();
      }
    });
  }

  render() {
    let { data } = this.state;

    return (
      <div className="modal">
        <ModalButton close onClick={this.closeModal} />

        <div className="modal-body">
          <ModalButton id="prev" onClick={this.previous} direction="left" />

          <LandmarkHexagon
            className="modal-img-container"
            adjust={data.adjust}
            id={data.id}
            image={data.image}
            openLink={this.openLink}
          />

          <div className="modal-body-text">
            <p className="modal-landmark-year">{data.year}</p>
            <a
              href={data.url}
              target="_blank"
              className="modal-landmark-heading"
            >
              {data.heading}
            </a>
            <p className="modal-landmark-descrip">{data.description}</p>
            <a href={data.url} target="_blank" className="modal-landmark-link">
              Read More <i className="fas fa-chevron-right" />
            </a>
          </div>

          <ModalButton id="next" onClick={this.next} direction="right" />
        </div>
      </div>
    );
  }
}

const ModalButton = props => {
  let button;

  if (props.close) {
    button = (
      <button onClick={props.onClick} id="close">
        <i className="fas fa-times" />
      </button>
    );
  } else {
    button = (
      <button id={props.id} onClick={props.onClick ? props.onClick : null}>
        <i className={"fas fa-chevron-" + props.direction} />
      </button>
    );
  }
  return button;
};
