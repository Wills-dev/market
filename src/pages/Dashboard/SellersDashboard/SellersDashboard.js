import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "../Dashboard.css";
import SellersSidebar from "./SellersComponent/SellersSidebar";
import card1 from "../../../assets/img/card1.png"
import card2 from "../../../assets/img/card2.png";

const SellersDashboard = () => {
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            <h2>Hello Thomas</h2>
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
          <h1 className="section-title">Activity Summary</h1>
          <div className="main-overview">
            <div className="overview-card-right">
              <div>
                <h2>Track it all</h2>
                {/* <p>Detailed transaction history is on the order page</p> */}
                <div class="d-flex justify-content-between mt-4">
                  <p>
                    Track it all! Keep track of all your RfQ’s and transactions
                    activities here in your Dashboard
                  </p>
                  <img src={card1} alt="" />
                </div>
              </div>
            </div>
            <div className="overview-card-left">
              <div>
                <h2>Monitor your Rfq's</h2>

                <div class="d-flex justify-content-between mt-4">
                  <p>
                    Keep track of all your RfQ’s and transactions activities
                    here in your order tab on the dashboard
                  </p>
                  <img src={card2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <h1 className="section-title">Activity Summary</h1>
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>Total Products</h2>
                <p>Dashboard history is on the Product page</p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>25</h3>
                  <Link>
                    <button className="viewall">View all</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>All Rfq's</h2>
                <p>Detailed history is on the Rfq's page</p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>22</h3>
                  <Link>
                    <button className="viewall">View all</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Total Orders</h2>
                <p>Detailed history is on the order page</p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>5</h3>
                  <Link>
                    <button className="viewall">View all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">Latest Orders</h1>
          <div className="main-overview">
            <div className="overview-card no-padding">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product Info</th>
                      <th scope="col">Buyer Info</th>
                      <th scope="col">Shipping Term</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src=""
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>FOB</td>
                      <td>Letter of Credit</td>
                      <td>
                        <div className="text-warning">Pending</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src=""
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>CIF</td>
                      <td>Letter of Credit</td>
                      <td>
                        <div className="text-primary">Processing</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src=""
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                          </div>
                        </div>
                      </td>
                      <td>XAF 20,000,000</td>
                      <td>Local Delivery</td>
                      <td>Letter of Credit</td>
                      <td>
                        <div className="text-success">Shipped</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src=""
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>CFR</td>
                      <td>Letter of Credit</td>
                      <td>
                        <div className="text-success">Delivered</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src=""
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>CFR</td>
                      <td>Letter of Credit</td>
                      <td>
                        <div className="text-success">Delivered</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src=""
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                          </div>
                        </div>
                      </td>
                      <td>USD 40,000</td>
                      <td>CFR</td>
                      <td>Letter of Credit</td>
                      <td>
                        <div className="text-success">Delivered</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellersDashboard;
