import React, { useState } from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import BuyersSidebar from "../../Dashboard/BuyersDashboard/BuyersComponent/BuyersSidebar";
import Ellipse from "../../../assets/img/Ellipse.png";
import "../Dashboard.css";
import logo1 from "../../../assets/img/logo1.png";
import logo2 from "../../../assets/img/logo2.png";

const BuyersRecievedQuote = () => {
  const [showquote, setShowQuote] = useState(false);

  const handleCloseQuote = () => setShowQuote(false);
  const handleShowQuote = () => setShowQuote(true);
  return (
    <>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            <h2>
              <button>
                <IoIosArrowBack size={30} />
              </button>
              RFQ ID: 12345
            </h2>
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

        <BuyersSidebar />

        <main className="main">
          <div className="seller-main">
            <div className="main-overview">
              <div className="overview-card no-padding">
                <div className="product-info">
                  <p className="product-info-title">Product Name</p>
                  <p className="product-info-description">Fresh Mint leaves</p>
                </div>
                <div className="product-info">
                  <p className="product-info-title">Quantity</p>
                  <p className="product-info-description">50 MT</p>
                </div>
                <div className="product-info">
                  <p className="product-info-title">Shipping Terms</p>
                  <p className="product-info-description">FOB</p>
                </div>
                <div className="product-info">
                  <p className="product-info-title">Destination</p>
                  <p className="product-info-description">Nigeria</p>
                </div>

                <div className="product-requirement">
                  <p>Product Requirement</p>
                  <p>
                    How much will 20 metric tonnes of fresh mint leaves cost?
                    What’s your best price for that quantity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <>
            <h4>Recieved Quotes</h4>
            <div className="product-quote">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product Image</th>
                      <th scope="col">Request Info</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Prompt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={logo1}
                              alt="..."
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <p>Fresh Mint</p>
                        <p>Quote ID: No.12345</p>
                      </td>
                      <td>50MT</td>
                      <td>
                        <p>Dory Enterprise</p>
                        <p>Lagos Nigeria</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          style={{ borderRadius: "20px" }}
                        >
                          Start Order
                        </button>
                        <p className="buyerviewquote">
                          <Link to="">View Quote</Link>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={logo2}
                              alt="..."
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <p>Fresh Mint</p>
                        <p>Quote ID: No.12345</p>
                      </td>
                      <td>50MT</td>
                      <td>
                        <p>Dory Enterprise</p>
                        <p>Lagos Nigeria</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          style={{ borderRadius: "20px" }}
                        >
                          Start Order
                        </button>
                        <p className="buyerviewquote">
                          <Link to="">View Quote</Link>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        </main>
      </div>
    </>
  );
};

export default BuyersRecievedQuote;
