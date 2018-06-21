// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

// config
import * as variables from "../config/variables.js";

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
        <button onClick={this.closeModal} id="close">
          <i className="fas fa-times" />
        </button>
        <div className="modal-body">
          <button id="prev" onClick={this.previous}>
            <i className="fas fa-chevron-left" />
          </button>
          <div className="modal-img-container hexagon">
            <img src={data.image} alt={data.description} />
          </div>
          <div className="modal-body-text">
            <p className="modal-landmark-year">{data.year}</p>
            <h1 className="modal-landmark-heading">{data.heading}</h1>
            <p className="modal-landmark-descrip">{data.description}</p>
            <a href={data.url} className="modal-landmark-link">
              Read More <i className="fas fa-chevron-right" />
            </a>
          </div>
          <button id="next" onClick={this.next}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}
