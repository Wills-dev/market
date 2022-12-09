import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import SellersSidebar from "./SellersComponent/SellersSidebar";
import Avatar from "@mui/material/Avatar";
import passport from "../../../assets/img/passport.jpg";


const SellersMessageCenter = () => {
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            <h2>Message Center</h2>
          </div>
          <div className="header__search">
            <form>
              <div className="custom__search">
                <Iconly
                  name="Search"
                  set="light"
                  primaryColor="#5C5C5C"
                  size="medium"
                />
                <input
                  type="text"
                  className="form-control custom-style"
                  id=""
                  placeholder="Search for orders, inquiries and more"
                />
              </div>
            </form>

            <div className="notify-wrap position-relative">
              <Iconly
                name="Notification"
                set="bulk"
                primaryColor="#282828"
                size="medium"
              />
              <span className="seller icon-notification position-absolute"></span>
            </div>
          </div>
        </header>

        <SellersSidebar />

        <main className="main">
          <div className="chat-main">
            <div className="main-overview">
              <div className="overview-card-userlist">
                <form>
                  <div className="custom__search">
                    <Iconly
                      name="Search"
                      set="light"
                      primaryColor="#5C5C5C"
                      size="medium"
                    />
                    <input
                      type="text"
                      className="form-control custom-style"
                      id=""
                      placeholder="Search for orders, inquiries and more"
                    />
                  </div>
                </form>
                <div className="userlist">
                  <div className="userlist-pic">
                    <Avatar
                      alt="Remy Sharp"
                      src={passport}
                      sx={{ width: 100, height: 100 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-overview">
              <div className="overview-card"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellersMessageCenter;
