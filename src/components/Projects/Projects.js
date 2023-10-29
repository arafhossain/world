import React, { Component } from "react";

import con from "../../assets/construction.jpg";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div>What I'm currently working on:</div>
        <div>
          <img src={con} style={{ height: "250px", width: "250px" }} />
        </div>
      </div>
    );
  }
}
