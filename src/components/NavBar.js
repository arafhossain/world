import React from "react";
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
      <nav className="navbar navbar-expand-lg transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
            onClick={()=>{this.toggleCollapse()}}
          >
            <svg
              viewBox="0 0 100 80"
              width="30"
              height="30"
              style={{ fill: "white", border: "none" }}
            >
              <rect width="80" height="5"></rect>
              <rect y="30" width="80" height="5"></rect>
              <rect y="60" width="80" height="5"></rect>
            </svg>
          </button>
          <div
            className={`${this.state.collapse ? "collapse" : "expand"} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <span className={`${this.props.currentRoute === 'Home' ? 'active' : ''} nav-link`} onClick={()=>{this.props.clickRoute('Home')}}>Home</span>
              <span className={`${this.props.currentRoute === 'Projects' ? 'active' : ''} nav-link`} onClick={()=>{this.props.clickRoute('Projects')}}>Projects</span>
              <span className={`${this.props.currentRoute === 'Blog' ? 'active' : ''} nav-link`} onClick={()=>{this.props.clickRoute('Blog')}}>Blog</span>
              <span className={`${this.props.currentRoute === 'Contact' ? 'active' : ''} nav-link`} onClick={()=>{this.props.clickRoute('Contact')}}>Contact</span>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
