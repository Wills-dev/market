import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import BuyersSidebar from "../BuyersDashboard/BuyersComponent/BuyersSidebar";
import driedhibiscus from "../../../assets/img/Dried Hibiscus.png";

const BuyersOrders = () => {
  return (
    <div>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            <h2>My Orders</h2>
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
          <h1 className="section-title">Activity Summary</h1>
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>Total Orders:</h2>
                <p>Detailed transaction history is on the order page</p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>125</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Completed Orders:</h2>
                <p>Detailed transaction history is on the order page</p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>22</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Cancelled Orders:</h2>
                <p>Detailed transaction history is on the transactions list</p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>55</h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="section-title">All Orders</h1>
          <div className="main-overview">
            <div className="overview-card no-padding">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product Info</th>
                      <th scope="col">Incoterm</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Amount Spent</th>
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
                              src={driedhibiscus}
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p>Grade WW32</p>
                          </div>
                        </div>
                      </td>
                      <td>FOB</td>
                      <td>Devani Limited</td>
                      <td>USD 5000</td>
                      <td>
                        <div className="text-warning">Ongoing</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={driedhibiscus}
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p>Grade WW32</p>
                          </div>
                        </div>
                      </td>
                      <td>FOB</td>
                      <td>Devani Limited</td>
                      <td>USD 5000</td>
                      <td>
                        <div className="text-success">Completed</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={driedhibiscus}
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p>Grade WW32</p>
                          </div>
                        </div>
                      </td>
                      <td>FOB</td>
                      <td>Devani Limited</td>
                      <td>USD 5000</td>
                      <td>
                        <div className="text-danger">Cancelled</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={driedhibiscus}
                              alt="..."
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p>Dried Hibiscus</p>
                            <p>Grade WW32</p>
                          </div>
                        </div>
                      </td>
                      <td>FOB</td>
                      <td>Devani Limited</td>
                      <td>USD 5000</td>
                      <td>
                        <div className="text-success">Completed</div>
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

export default BuyersOrders;
