// react
import * as React from "react";

// react router
import { NavHashLink as NavLink } from "react-router-hash-link";

// jquery
import $ from "jquery";

// routes
import * as routes from "../config/routes.js";

/**
 * Navigation component that features
 * four routes - 1600, 1700, 1800, and 1900
 */
export default class Navigation extends React.Component {
  componentDidMount() {
    console.log($(".nav-link"));
  }
  render() {
    return (
      <nav id="navigation">
        <NavLink
          className="nav-link"
          id="nav-link-1600"
          to={routes.SIXTEEN_HUNDRED}
        >
          1600
        </NavLink>
        <NavLink
          className="nav-link"
          id="nav-link-1700"
          to={routes.SEVENTEEN_HUNDRED}
        >
          1700
        </NavLink>
        <NavLink
          className="nav-link"
          id="nav-link-1800"
          to={routes.EIGHTEEN_HUNDRED}
        >
          1800
        </NavLink>
        <NavLink
          className="nav-link"
          id="nav-link-1900"
          to={routes.NINETEEN_HUNDRED}
        >
          1900
        </NavLink>
      </nav>
    );
  }
}
