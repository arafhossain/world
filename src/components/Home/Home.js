import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="title">Welcome to My Portfolio</div>
        <div className="content">
          <p>
            Hi, I'm [Your Name], a passionate and dedicated [Your Profession]
            with a keen eye for detail and a love for creating beautiful,
            functional, and user-friendly digital experiences. With [number]
            years of experience in [Your Field/Skills], I have honed my skills
            in [list key skills, e.g., web development, UI/UX design, etc.], and
            I'm always eager to learn and explore new technologies and
            methodologies.
          </p>
          <p>
            Throughout my career, I have worked on a variety of projects ranging
            from [type of projects, e.g., websites, mobile apps, etc.] to
            [another type of projects], always striving to deliver the best
            possible results for my clients and collaborators. My portfolio
            showcases a selection of my favorite projects, highlighting my
            skills, creativity, and attention to detail.
          </p>
          <p>
            When I'm not working, you can find me [mention a hobby or interest],
            exploring new places, or spending quality time with family and
            friends. Feel free to browse through my work, and don't hesitate to
            get in touch if you have any questions or would like to discuss a
            potential project.
          </p>
          <p>
            Thank you for visiting, and I look forward to connecting with you!
          </p>
        </div>
      </div>
    );
  }
}
