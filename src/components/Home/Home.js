import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="title">Welcome</div>
        <div className="content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            maximus ante at arcu tempor accumsan vel at est. Nullam ac sapien
            neque. Ut leo dui, vehicula quis auctor nec, molestie quis enim.
            Donec placerat, orci vitae eleifend tristique, turpis mauris maximus
            risus, in bibendum leo libero nec risus. Morbi tellus nisi, dictum
            id euismod luctus, varius non purus. Ut id lacus tellus. Donec
            volutpat justo in consectetur placerat. Vivamus in lectus nibh. In
            pretium iaculis libero, vel maximus neque pellentesque in. Aenean
            gravida mattis iaculis. Donec tincidunt pharetra dui, eget aliquet
            erat gravida non. Cras laoreet arcu erat, vitae tristique est
            aliquam non. Curabitur tincidunt, dolor nec laoreet elementum, nunc
            nisl laoreet mi, a dignissim mi felis id augue. Fusce id hendrerit
            quam.
          </div>
          <div>
            Sed hendrerit tempor urna vel pretium. Sed id laoreet dui. Morbi
            velit eros, volutpat non euismod in, tempor ac mauris. Donec at
            tristique augue. Fusce imperdiet dui vitae libero viverra imperdiet.
            Sed a tellus sed dui dignissim finibus. Nulla cursus suscipit
            faucibus. Maecenas quis ex nulla. Nunc elementum sit amet neque eget
            hendrerit. Suspendisse vel luctus eros. Cras ac arcu a eros
            imperdiet interdum. Aenean nec fermentum sem, vitae tristique dolor.
            Maecenas rutrum sagittis tristique. Donec at tempor lorem. Phasellus
            sollicitudin vel erat in congue.
          </div>
        </div>
      </div>
    );
  }
}
