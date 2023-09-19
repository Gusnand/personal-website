import React from "react";
import "./experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Dev.</h3>
          <div className="experience__content">
            <article className="experience__details">
              <VerifiedIcon />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <h4>ReactJS</h4>
              <small className="text-light">Moderate</small>
            </article>
          </div>
        </div>
        {/* DIVIDER */}

        <div className="experience__editor">
          <h3>Editor.</h3>
          <div className="experience__content">
            <article className="experience__details">
              <VerifiedIcon />
              <h4>Adobe Premiere Pro CC</h4>
              <small className="text-light">Expert</small>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <h4>Adobe After Effects CC</h4>
              <small className="text-light">Expert</small>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <h4>Figma</h4>
              <small className="text-light">Expert</small>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <h4>Adobe Photoshop CC</h4>
              <small className="text-light">Expert</small>
            </article>
            <article className="experience__details">
              <VerifiedIcon />
              <h4>Corel Draw</h4>
              <small className="text-light">Expert</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
