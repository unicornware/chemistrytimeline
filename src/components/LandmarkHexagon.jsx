// react
import * as React from "react";

/**
 * Class representing a landmark.
 * Styled to be shaped like a hexagon,
 * it functions as a button that can open the modal
 * @class LandmarkHexagon
 * @extends React.Component
 */
export default class LandmarkHexagon extends React.Component {
  render() {
    let { url, openModal, className, id, adjust, image } = this.props;
    let patternId = id + "-image";

    return (
      <a
        href={url}
        target="_blank"
        onClick={e => openModal(e)}
        className={className + " hexagon"}
        id={id}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 200">
          <defs>
            <pattern
              id={patternId}
              height="100%"
              width="100%"
              patternContentUnits="objectBoundingBox"
            >
              <image
                height="1"
                width="1"
                preserveAspectRatio={
                  adjust ? "xMidYMin slice" : "xMidYMid slice"
                }
                href={image}
              />
            </pattern>
          </defs>

          <polygon
            points="56.25,0 168.75,0 225,100 168.75,200 56.25,200 0,100"
            fill={"url(#" + patternId + ")"}
          />
        </svg>
      </a>
    );
  }
}
