import React from "react";
import { Link } from "react-router-dom";
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
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
