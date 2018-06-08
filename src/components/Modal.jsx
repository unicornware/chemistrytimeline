// react
import * as React from "react";
import ReactDOM from "react-dom";

// jquery
import $ from "jquery";

const MODAL_ROOT = document.getElementById("modal-root");

/**
 * Modal component.
 * The modal features a close button, previous and next arrows
 * to navigate to other landmark modals,
 * a title and description for the landmark, and a read more link.
 */
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props };
  }

  closeModal = () => {
    $("#modal-root")
      .removeClass("show")
      .addClass("hide");
    $("body").css("overflow", "scroll");
    ReactDOM.unmountComponentAtNode(MODAL_ROOT);
  };

  previous = () => {
    this.setState({ data: this.state.data.prev });
  };

  next = () => {
    this.setState({ data: this.state.data.next });
  };

  componentDidMount() {
    $(window).resize(() => {
      if ($(window).width() <= 768) {
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
            <img src={this.props.image} alt="" />
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
