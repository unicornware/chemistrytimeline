// react
import * as React from "react";

// components
import LandmarkContainer from "../components/LandmarkContainer.jsx";

// data
import landmarks from "../data/landmarks.json";

/**
 * This class represents a Landmark generator.
 * It creates Landmark objects and associates new data to them,
 * data of which will be used in other classes.
 *
 * @class LandmarkGenerator
 */
export default class LandmarkGenerator {
  constructor() {
    this.landmarkData = landmarks;
    this.needsAdjustment = [
      "landmark-1",
      "landmark-3",
      "landmark-8",
      "landmark-11",
      "landmark-15",
      "landmark-21",
      "landmark-15",
      "landmark-21",
      "landmark-22",
      "landmark-25",
      "landmark-26",
      "landmark-34",
      "landmark-35",
      "landmark-37",
      "landmark-38",
      "landmark-40",
      "landmark-42",
      "landmark-45",
      "landmark-52",
      "landmark-56",
      "landmark-60",
      "landmark-70"
    ];
  }

  /**
   * This method generates the landmarks
   * and associates a key, prev, and next property with each one.
   *
   * @memberof LandmarkGenerator
   * @return {array} landmarks with added properties
   */
  getLandmarks = () => {
    let landmarksArr = [];

    this.landmarkData.map((curr, i, landmarkData) => {
      let key = "landmark-" + i;
      let adjust = this.adjustment(key);

      curr.key = key;
      curr.id = curr.key;

      this.link(curr, i, landmarkData);

      let landmark = (
        <LandmarkContainer
          {...curr}
          adjust={adjust}
          className={this.getClassName(i)}
        />
      );

      return landmarksArr.push(landmark);
    });

    return landmarksArr;
  };

  /**
   * This method takes an object, index, and an array as arguments.
   * It assigns a prev and next value to curr based on the index argument.
   *
   * @param {Object} curr current object
   * @param {Number} index index of object
   * @param {Array} landmarks array containing landmarks
   * @memberof LandmarkGenerator
   * @return {void}
   */
  link = (curr, index, landmarks) => {
    curr.prev = landmarks[index - 1]
      ? landmarks[index - 1]
      : landmarks[landmarks.length - 1];

    curr.next = landmarks[index + 1] ? landmarks[index + 1] : landmarks[0];
  };

  /**
   * This method takes an index number as an argument
   * and returns a class name based on the index.
   *
   * @param {Number} index index number
   * @memberof LandmarkGenerator
   * @return {String} class name
   */
  getClassName = index => {
    let className = "";

    if (index < 2) {
      className = index === 0 ? "bttm special" : "top single";
    } else if (index === 2) {
      className = "top";
    } else if (index === 3) {
      className = "bttm";
    } else if ((index + 1) % 3 === 0) {
      className = "bttm";
    } else if (index % 3 === 0) {
      className = "top";
    } else if ((index + 1) % 3 !== 0) {
      className = index % 2 === 0 ? "top single" : "bttm single";
    }

    return className;
  };

  adjustment = id => this.needsAdjustment.includes(id);
}
