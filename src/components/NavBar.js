import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
<nav className="navbar navbar-expand-lg transparent">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{border: 'none'}}>
      <svg viewBox="0 0 100 80" width="30" height="30" style={{fill: 'white', border: 'none'}}>
        <rect width="80" height="5"></rect>
        <rect y="30" width="80" height="5"></rect>
        <rect y="60" width="80" height="5"></rect>
      </svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
  }
}
 
export default NavBar;