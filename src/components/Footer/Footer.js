import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-section mt-5">
          <div class="footer-info">
            <h3 class="footer-title">Amazon products</h3>
            <p class="copyright">
              Copyright &copy; 2022 Amazon products <br /> All rights reserved{" "}
              <br /> Developed by REZA
            </p>
            <div class="footer-icons">
              <a href="https://www.instagram.com/rezaul909">
                <i class="fab fa-instagram">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </i>
              </a>
              <a href="https://github.com/Rezaul909">
                <i class="fas fa-globe">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </i>
              </a>
              <a href="https://twitter.com/RezaulKarim138">
                <i class="fab fa-twitter">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </i>
              </a>
              <a href="https://www.linkedin.com/in/rezaul-karim-1877a016b/">
                <i class="fab fa-youtube">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </i>
              </a>
              <a href="https://www.facebook.com/Rezaul909">
                <i class="fab fa-facebook">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
