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

      let landmark = (
        <Landmark
          key={key}
          id={key}
          prev={
            landmarks[i - 1]
              ? landmarks[i - 1]
              : landmarks[landmarks.length - 1]
          }
          next={landmarks[i + 1] ? landmarks[i + 1] : landmarks[0]}
          {...curr}
        />
      );

      landmarksArr.push(landmark);
    });

    return landmarksArr;
  };
}
