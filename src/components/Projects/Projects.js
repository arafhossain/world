import React, { Component } from "react";
import "./Projects.css";

import con from "../../assets/construction.jpg";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={con}
            style={{ height: "250px", width: "450px" }}
            alt="Under construction"
          />
        </div>
      </div>
    );
  }
}
