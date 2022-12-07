import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "../../Dashboard.css";
import "./SellerSidebar.css";

const SellersSidebar = () => {

  return (
    <>
      <aside id="seller" className="sidenav">
        <div className="sidenav__close-icon">
          <i className="fas fa-times sidenav__brand-close"></i>
        </div>

        <div className="user-area">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 user-area-art">
              E
            </div>
            <div className="flex-grow-1 ms-2">
              <p>Erhun Abbe</p>
            </div>
          </div>
        </div>

        <h2 className="sidenav_title">Dashboard</h2>

        <div className="switch-wrap">
          <div className="switch d-flex justify-content-between">
            <div className="switch-lhs">
              <Link to="/buyer/dashboard">Buy</Link>
            </div>
            <div className="switch-rhs">
              <Link to="/seller/dashboard">Sell</Link>
            </div>
          </div>
        </div>

        <ul class="sidenav__list">
          <Link className="sidenav-link" to="/seller/dashboard">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Home"
                set="light"
                size="small"
              />
              Overview
            </li>
          </Link>

          <Link className="sidenav-link" to="/seller/orders">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Paper"
                set="light"
                size="small"
              />
              My Orders
            </li>
          </Link>

          <Link className="sidenav-link" to="/seller/products">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Category"
                set="light"
                size="small"
              />
              My Products
            </li>
          </Link>

          <Link className="sidenav-link" to="/seller/message-center">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon position-relative"
                name="Message"
                set="light"
                size="small"
              />
              Message Center
              <span className="icon-notification position-absolute"></span>
            </li>
          </Link>

          <Link className="sidenav-link" to="/seller/rfqs">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Folder"
                set="light"
                size="small"
              />
              My RFQs
            </li>
          </Link>

          <Link className="sidenav-link" to="/seller/settings">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="Setting"
                set="light"
                size="small"
              />
              Settings
            </li>
          </Link>

          <Link className="sidenav-link" to="/">
            <li className="sidenav__list-item">
              <Iconly
                className="nav-icon"
                name="Logout"
                set="line"
                size="small"
                style={{ marginRight: "15px" }}
              />
              Logout
            </li>
          </Link>
        </ul>

        <ul class="sidenav__list mt-auto">
          <Link className="sidenav-link" to="/">
            <li className="sidenav__list-item">
              <Iconly
                className="list_icon"
                name="ArrowLeft"
                set="light"
                size="small"
              />
               Marketplace
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default SellersSidebar;