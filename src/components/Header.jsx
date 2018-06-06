// react
import * as React from "react";

// components
import Navigation from "./Navigation";

/**
 * Functional header component.
 * Returns the heading, subheading, and navigation.
 */
const Header = () => {
  return (
    <header>
      <div className="wrapper" id="header-wrapper">
        <h1 className="heading">Landmarks Timeline</h1>
        <p className="subheading">
          Click the years to check out the history of chemistry
        </p>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
