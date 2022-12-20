import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import BuyersSidebar from "../BuyersDashboard/BuyersComponent/BuyersSidebar";

const BuyersQuote = () => {
  return (
    <>
      <div>
        <div className="grid-container">
          <header className="header">
            <div className="header__message">
              <h2>Received Quotes</h2>
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
                <span className="buyer icon-notification position-absolute"></span>
              </div>
            </div>
          </header>

          <BuyersSidebar />

          <main className="main">
            <div className="main-overview">
              <div className="overview-card"></div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default BuyersQuote;
