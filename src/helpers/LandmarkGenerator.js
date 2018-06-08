// react
import * as React from "react";

// components
import Landmark from "../components/Landmark.jsx";

// data
import landmarks from "../data/landmarks.json";

export default class LandmarkGenerator {
  /**
   * This method returns an array of Landmark components
   * based on the value of this.landmarks
   */
  getLandmarks = () => {
    let landmarksArr = [];

    // map over landmarks
    // landmarks are expected to have a
    // year, century, url, image, heading, and description key/value pair
    landmarks.map((curr, i, landmarks) => {
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

      curr.key = key;
      curr.prev = landmarks[i - 1]
        ? landmarks[i - 1]
        : landmarks[landmarks.length - 1];

      curr.next = landmarks[i + 1] ? landmarks[i + 1] : landmarks[0];

      let landmark = <Landmark {...curr} className={className} />;

      return landmarksArr.push(landmark);
    });

    return landmarksArr;
  };
}
