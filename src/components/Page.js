import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import { Waves } from "./Waves/Waves";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "Home",
    };
  }
  clickRoute = (route) => {
    this.setState({ route });
  };
  render() {
    return (
      <div>
        <NavBar clickRoute={this.clickRoute} currentRoute={this.state.route} />
        {this.state.route === "Home" && <Home />}
        {this.state.route === "Projects" && <Projects />}
        <Waves />
      </div>
    );
  }
}
