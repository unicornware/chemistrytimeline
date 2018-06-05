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
  constructor(props) {
    super(props);
    this.state = { data: this.props };
  }

  closeModal = () => {
    $("#modal-root")
      .removeClass("show")
      .addClass("hide");
    ReactDOM.unmountComponentAtNode(MODAL_ROOT);
  };

  render() {
    const { data } = this.state;

    return (
      <div className="modal" id={"modal-" + data.id}>
        <button onClick={this.closeModal} id="close">
          <i className="fas fa-times" />
        </button>
        <div className="modal-body">
          <button id="prev">
            <i className="fas fa-chevron-left" />
          </button>
          <div className="modal-img-container hexagon">
            <img src={PLACEHOLDER_IMG} alt="" />
          </div>
          <div className="modal-body-text">
            <p className="landmark-year">{data.year}</p>
            <h1 className="landmark-heading">{data.heading}</h1>
            <p className="landmark-descrip">{data.description}</p>
            <a href={data.url} className="landmark-readmore">
              Read More <i className="fas fa-chevron-right" />
            </a>
          </div>
          <button id="next">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}
