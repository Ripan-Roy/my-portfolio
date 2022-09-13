import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>lorem ipsum dolor sit amet consectetur adipisicing</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Lorem</h5>
              <small>lorem ipsum dolor sit amet consectetur adipisicing</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Lorem lorem ipsum dolor sit amet consectetur adipisicing</small>
            </article>
          </div>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam,
            quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
