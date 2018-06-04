// react
import * as React from "react";

// components
import Landmark from "../components/Landmark.jsx";

export default class LandmarkGenerator {
  /**
   * The LandmarkGenerator takes an array.
   * @param {array} landmarks - array of landmarks w/ timeline information
   */
  constructor(landmarks) {
    this.landmarks = landmarks;
  }

  /**
   * This method returns an array of Landmark components
   * based on the value of this.landmarks
   */
  getLandmarks = () => {
    let landmarksArr = [];

    // map over this.landmarks
    // landmarks are expected to have a
    // year, century, url, image, heading, and description key/value pair
    this.landmarks.map((curr, i, landmarks) => {
      let key = "landmark-" + i;

      let className = "";

      if (i < 2) {
        className = i === 0 ? "bttm special" : "top single";
      } else if (i === 2) {
        className = "top";
      } else if (i === 3) {
        className = "bttm";
      } else if ((i + 1) % 3 === 0) {
        className = "bttm";
      } else if (i % 3 === 0) {
        className = "top";
      } else if ((i + 1) % 3 !== 0) {
        className = i % 2 === 0 ? "top single" : "bttm single";
      }

      let landmark = (
        <Landmark
          key={key}
          id={i}
          prev={
            landmarks[i - 1]
              ? landmarks[i - 1]
              : landmarks[landmarks.length - 1]
          }
          next={landmarks[i + 1] ? landmarks[i + 1] : landmarks[0]}
          {...curr}
          className={className}
        />
      );

      return landmarksArr.push(landmark);
    });

    return landmarksArr;
  };
}
