// react
import * as React from "react";

// react router
import { NavHashLink as NavLink } from "react-router-hash-link";

// jquery
import $ from "jquery";

// routes
import ROUTES from "../config/routes.js";

/**
 * Navigation component that features
 * four routes - 1600, 1700, 1800, and 1900
 */
export default class Navigation extends React.Component {
  componentDidMount() {
    console.log($(".landmark").data("century"));
  }
  render() {
    return (
      <nav id="navigation">
        {/* iterates over the routes array and create four navigation links */}
        {ROUTES.map((route, i) => {
          let id = "nav-link" + route.link;
          return (
            <NavLink key={id} id={id} className="nav-link" to={route.link}>
              {route.name}
            </NavLink>
          );
        })}
      </nav>
    );
  }
}
