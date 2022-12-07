import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SiteLogo from "../../assets/img/logo.png";
import ChevronDown from "../../assets/img/chevron-down-icon.svg";
import MenuBtn from "../../assets/img/menu.svg";
import WaIcon from "../../assets/img/whatsapp.png";
import { Iconly } from "react-iconly";

const Header = () => {
  return (
    <>
      {/* <Link to="/">Tofa </Link>
      <br />
      <Link to="/sellers-landing-page">Seller's Landing Page </Link> <br />
      <Link to="/product-listing">Product Listing </Link>
      <br />
      <Link to="/authentication">Authenication </Link>
      <br />
      <Link to="/buyer/dashboard">Buyer Dashboard </Link>
      <br />
      <Link to="/seller/dashboard">Sellers Dashboard </Link>
      <br /> */}

      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-4">
              <p><Link><img src={WaIcon} className="topbar-icon" alt="..." />Chat with us on WhatsApp</Link></p>
            </div>
            <div className="col-lg-8 col-8" align="right">
              <ul className="tb-menu">
                <li><Link to="/all-product">Browse Products</Link></li>
                <li><Link>Explore RFQs</Link></li>
                <li><Link>Become a Seller</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar sticky-top shadow-sm">
        <div className="container">
          <div className="nav-wrap">
            <div className="d-flex align-items-center">
              <div className="logo">
                <Link to="/"><img src={SiteLogo} /></Link>
              </div>
              <div className="dropdown main-menu-icon-wrap">
                <Link href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" className=""><img className="main-menu-icon" src={MenuBtn} alt="" /></Link>
                <div className="dropdown-menu animate slideIn">
                  kkk
                </div>
              </div>
            </div>
            <div className="search">
              <input type="text" className="search" id="search" placeholder="Search for Products and Suppliers..." />
              <button className="btn btn-danger">Search</button>
              
            </div>
            <div className="menu">
            <ul class="nav-menu">
              <li className=" mobile-search"><Link><Iconly className="nav-icon" name="Search" set="light" size="medium" /><span>Search</span></Link></li>
                <li className="dropstart">
                  <Link href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Iconly className="nav-icon" name="User" set="line" size="medium" /><span>My Account<img className="dropdown-icon" src={ChevronDown} alt="" /></span></Link>
                  <ul className="dropdown-menu custom-top animate slideIn" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/login">
                        <button className="btn btn-danger navbar-btn">Login</button>
                      </Link>
                    </li>
                    <li><hr class="dropdown-divider"/></li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        <Iconly
                          className="nav-icon"
                          name="Paper"
                          set="line"
                          primaryColor="#282828"
                          size="small"
                        />
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        <Iconly
                          className="nav-icon"
                          name="Message"
                          set="line"
                          primaryColor="#282828"
                          size="small"
                        />
                        Message Center
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        <Iconly
                          className="nav-icon"
                          name="Folder"
                          set="line"
                          primaryColor="#282828"
                          size="small"
                        />
                        Inquiries
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        <Iconly
                          className="nav-icon"
                          name="Logout"
                          set="line"
                          primaryColor="#282828"
                          size="small"
                        />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              <li className=""><Link><span>Support</span></Link></li>
            </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
