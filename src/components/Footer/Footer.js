import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Iconly } from "react-iconly";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-list">
          <div className="Products">
            <h5>Products</h5>

            <Link to="">
              <li>Home</li>
            </Link>
            <Link to="">
              <li>Browse Products</li>
            </Link>
          </div>
          <div className="needHelp">
            <h5>Need Help</h5>

            <Link to="">
              <li>Contact Us</li>
            </Link>

            <Link to="">
              <li>FAQ</li>
            </Link>
          </div>
          <div className="footersubscription">
            <h5>Subscription</h5>

            <Link to="">
              <li>Plans and Pricing</li>
            </Link>
          </div>
          <div className="sellers">
            <h5>Sellers</h5>

            <Link to="">
              <li>Become a seller</li>
            </Link>
            <Link to="">
              <li>RFQ's</li>
            </Link>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="">
              <p className="copyright">
                ©2022 Traders of Africa. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
