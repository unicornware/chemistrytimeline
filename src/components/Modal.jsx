// react
import * as React from "react";

// icons
import FontAwesome from "@fortawesome/react-fontawesome";

/**
 * Modal component.
 * The modal features a close button, previous and next arrows
 * to navigate to other landmark modals,
 * a title and description for the landmark, and a read more link.
 */
export default class Modal extends React.Component {
  state = { open: false };

  closeModal = e => {
    // update state
    this.setState({ open: !this.state.open });

    // prevent default
    e.preventDefault();
  };

  render() {
    return (
      <div
        className={"modal " + this.state.open ? "modal-open" : "modal-closed"}
      >
        <div className="modal-guts">
          <div className="modal-header">
            <button onClick={this.closeModal}>
              <FontAwesome name="chevron-times" />
            </button>
          </div>
          <div className="modal-body">
            <FontAwesome name="chevron-left" />
            <div className="modal-img-container">
              <img src={this.props.img} alt="" className="hexagon" />
            </div>
            <div className="modal-body-text">
              <p className="landmark-date">{this.props.date}</p>
              <p className="landmark-title">{this.props.title}</p>
              <p className="landmark-descrip">{this.props.description}</p>
              <a href={this.props.link} className="landmark-readmore">
                Read More{" "}
                <span>
                  <FontAwesome name="chevron-left" />
                </span>
              </a>
            </div>
            <FontAwesome name="chevron-right" />
          </div>
        </div>
      </div>
    );
  }
}
