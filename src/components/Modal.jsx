// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

const MODAL_ROOT = document.getElementById("modal-root");

let PLACEHOLDER_IMG =
  "https://www.coopsandcages.com.au/blog/oe-content/uploads/2015/09/ferret_1.jpg";

/**
 * Modal component.
 * The modal features a close button, previous and next arrows
 * to navigate to other landmark modals,
 * a title and description for the landmark, and a read more link.
 */
export default class Modal extends React.Component {
  closeModal = () => {
    $("#modal-root")
      .removeClass("show")
      .addClass("hide");
    ReactDOM.unmountComponentAtNode(MODAL_ROOT);
  };

  previous = () => {
    ReactDOM.render(<Modal {...this.props.prev} />, MODAL_ROOT);
  };

  next = () => {
    this.setState({ data: this.state.data.next });
  };

  render() {
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
            <img src={PLACEHOLDER_IMG} alt="" />
          </div>
          <div className="modal-body-text">
            <p className="modal-landmark-year">{this.props.year}</p>
            <h1 className="modal-landmark-heading">{this.props.heading}</h1>
            <p className="modal-landmark-descrip">{this.props.description}</p>
            <a href={this.props.url} className="modal-landmark-link">
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
