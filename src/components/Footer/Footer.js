import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Iconly } from "react-iconly";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-btm">
        <div className="container">
          <div className="fb-wrap">
            <p className="copyright">©2022 Traders of Africa. All Rights Reserved</p>
            <ul>
              <li><Link>Terms & Conditions</Link></li>
              <li><Link>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
