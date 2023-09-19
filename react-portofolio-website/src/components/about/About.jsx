import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <EmojiEventsIcon className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years of Editing</small>
            </article>
            <article className="about__card">
              <EmojiEventsIcon className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years of Editing</small>
            </article>
            <article className="about__card">
              <EmojiEventsIcon className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years of Editing</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad
            accusantium iste voluptatibus, eos harum id quasi. Sit dolores nulla
            officia! Sequi provident mollitia ea, consequatur a vitae soluta
            libero?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
