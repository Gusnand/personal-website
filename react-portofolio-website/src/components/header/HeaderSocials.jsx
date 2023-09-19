import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/ketutaguscahyadinanda/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/Gusnand" target="_blank">
        <GitHubIcon />
      </a>
      <a href="https://instagram.com/floa.tint117" target="_blank">
        <InstagramIcon />
      </a>
    </div>
  );
};

export default HeaderSocials;
