import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
  }

  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              this.toggleCollapse();
            }}
          >
            <svg
              viewBox="0 0 100 80"
              width="30"
              height="30"
              style={{ fill: "#e0e0e0" }}
            >
              <rect width="80" height="5"></rect>
              <rect y="30" width="80" height="5"></rect>
              <rect y="60" width="80" height="5"></rect>
            </svg>
          </button>
          <div
            className={`${
              this.state.collapse ? "collapse" : "expand"
            } navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  activeClassName="active"
                  className="nav-link"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="nav-link"
                >
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="nav-link"
                >
                  About
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/blog"
                  activeClassName="active"
                  className="nav-link"
                >
                  Blog
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
