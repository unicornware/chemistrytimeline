// react
import * as React from "react";

// react router
import { NavHashLink as NavLink } from "react-router-hash-link";

// routes
import routes from "../config/routes.js";

// helpers
import "../helpers/functions.js";

/**
 * Navigation component that features
 * four routes - 1600, 1700, 1800, and 1900
 */
export default class Navigation extends React.Component {
  render() {
    return (
      <nav id="navigation">
        {routes.map((route, i) => {
          let id = "nav-link-" + route.route.substring(1, route.route.length);
          return (
            <NavLink
              key={id}
              className="nav-link"
              id={id}
              to={route.route}
              smooth
            >
              {route.name}
            </NavLink>
          );
        })}
      </nav>
    );
  }
}
