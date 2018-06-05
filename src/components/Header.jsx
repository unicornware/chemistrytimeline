// react
import * as React from "react";

// components
import Navigation from "./Navigation";

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
