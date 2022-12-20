import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import BuyersSidebar from "../BuyersDashboard/BuyersComponent/BuyersSidebar";
import { BsThreeDotsVertical } from "react-icons/bs";

const BuyersRfqs = () => {
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

        <BuyersSidebar />

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
                <div className="orderspan">
                  <h2>Awaiting Responses </h2>
                  <span className="orderspan">
                    <BsThreeDotsVertical />
                  </span>
                </div>

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
                <div className="orderspan">
                  <h2>Recieved Quotes </h2>
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                </div>
                
                <p className="order-p">
                  Detailed transaction history is on the order page
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>55</h3>
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
                      <th scope="col">Expected Price</th>
                      <th scope="col">Country of origin</th>
                      <th scope="col">No of recieved Quotes</th>
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
                      <td>215</td>
                      <td>$725 (USD)</td>
                      <td>Cameroon</td>
                      <td>10</td>
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
                      <td>215</td>
                      <td>$725 (USD)</td>
                      <td>Senegal</td>
                      <td>0</td>
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
                      <td>215</td>
                      <td>$725 (USD)</td>
                      <td>Cote d'ivoire</td>
                      <td>2</td>
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
                      <td>215</td>
                      <td>$725 (USD)</td>
                      <td>South Africa</td>
                      <td>5</td>
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

export default BuyersRfqs;
