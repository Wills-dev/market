import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import SellersSidebar from "./SellersComponent/SellersSidebar";


const SellersOrder = () => {
  return (
    <>
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
              <span className="seller icon-notification position-absolute"></span>
            </div>
          </div>
        </header>

        <SellersSidebar />

        <main className="main">
         
          <div className="main-overview">
            <div className="overview-card">
              <div>
                <h2>New Orders</h2>
                <p className="order-p">
                  Detailed transaction history is on the order page
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>10</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Pending Orders</h2>
                <p className="order-p">
                  Detailed transaction history is on the transactions list
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>22</h3>
                </div>
              </div>
            </div>
            <div className="overview-card">
              <div>
                <h2>Completed Orders</h2>
                <p className="order-p">
                  Detailed transaction history is on the order page
                  
                </p>
                <div class="d-flex justify-content-between mt-4">
                  <h3>5</h3>
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
                      <th scope="col">Order No</th>
                      <th scope="col">Product Info</th>
                      <th scope="col">Product Cost</th>
                      <th scope="col">Shipping Terms</th>
                      <th scope="col">Payment Terms</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0123456543</td>
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
                      <td>0123456543</td>
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
                      <td>0123456543</td>
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
                      <td>0123456543</td>
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
                      <td>0123456543</td>
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
                      <td>0123456543</td>
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
    </>
  );
};

export default SellersOrder;
