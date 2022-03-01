import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const Footer = () => {
  return (
    <footer className="section-1">
      <div class="flex-container1 ">
        <div className="socials">
          <img src={Icons.insta} className="sub" alt="Back" />
          <img src={Icons.fb} className="sub" alt="Back" />
          <img src={Icons.twitter} className="sub" alt="Back" />
        </div>
        <p>We are all Elemental</p>
        <div className="tags">
          <div className="anchors">
            <a>About Us</a>
            <a>Contact us</a>
            <a>Terms and conditions</a>
            <a>Privacy policy</a>
          </div>
          <div>
            <p className="footer-text">Designed and built by SDRS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
