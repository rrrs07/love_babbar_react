import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaXTwitter />
          </a>

          <a href="" className="footer__social-link">
            <FaGithub />
          </a>

          <a href="" className="footer__social-link">
            <FaLinkedin />
          </a>
        </div>

        <p className="footer__copyright text-cs">&copy; 2024 All Rights Reserved
            
        </p>
        <p className="footer__copyright text-cs">
            <span>RRRS07</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
