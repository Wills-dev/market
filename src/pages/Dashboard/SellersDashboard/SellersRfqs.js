import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import SellersSidebar from "./SellersComponent/SellersSidebar";

const SellersRfqs = () => {
  return (
    <>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            <h2>My RFQ's</h2>
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
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>All RFQ's</h2>
                <p className="order-p">
                  Scroll down for Detailed RfQ’s history
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>10</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Sent Responses</h2>
                <p className="order-p">
                  Click to view detailed responses you’ve sent to RFQ’s
                  suppliers posted
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>22</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Awaiting Responses</h2>
                <p className="order-p">
                  Detailed transaction history is on the order page
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>5</h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">All RFQ's</h1>
          <div className="main-overview">
            <div className="overview-card no-padding">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Enquiry Info</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Shipping Terms</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <a href="">Ground Cashew</a>
                            <p>No 12345</p>
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
                            <a href="">Ground Cashew</a>
                            <p>No 12345</p>
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
                            <a href="">Ground Cashew</a>
                            <p>No 12345</p>
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
                            <a href="">Ground Cashew</a>
                            <p>No 12345</p>
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
                            <a href="">Ground Cashew</a>
                            <p>No 12345</p>
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
                            <a href="">Ground Cashew</a>
                            <p>No 12345</p>
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
    </>
  );
};

export default SellersRfqs;
