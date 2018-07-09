// react
import * as React from "react";

// react router
import { NavHashLink as NavLink } from "react-router-hash-link";

// routes
import routes from "../config/routes.js";

/**
 * Functional Navigation component that produces
 * four navigation options - 1600, 1700, 1800, and 1900
 */
const Navigation = () => {
  return (
    <nav id="navigation">
      {/* maps over routes from routes.js file. returns four routes */}
      {routes.map((route, i) => {
        // route.to has a pound symbol (#) before the corresponding route.
        // starting at index at 1 to remove the #
        let id = "nav-link-" + route.to.substring(1, route.to.length);
        return (
          <NavLink key={id} className="nav-link" id={id} to={route.to} smooth>
            {route.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
