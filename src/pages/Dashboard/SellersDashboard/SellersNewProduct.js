import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import SellersSidebar from "./SellersComponent/SellersSidebar";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import Form from "react-bootstrap/Form";

const SellersNewProducts = () => {
  return (
    <>
      <div>
        <div className="grid-container">
          <header className="header">
            <div className="header__message">
              <h2>Create New Products</h2>
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
            <div className="main-overview new-product-container">
              <div>
                <p className="new-product-container-title">
                  Product information
                </p>
                <p>
                  To List a new product fill all the neccessary information and
                  follow the prompts
                </p>
                <div className="overview-card new-product">
                  <div className="product-row">
                    <div className="product-row-info productname">
                      <label>Product Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="fullname"
                        placeholder="Specify product Name"
                      />
                    </div>
                    <div className="product-row-info productorigin">
                      <label>Country of Origin</label>
                      <Form.Select size="md">
                        <option>
                          <p>Country of origin</p>{" "}
                        </option>
                      </Form.Select>
                    </div>
                    <div className="product-row-info productprice">
                      <label>Price</label>
                      <div className="productpricediv">
                        <p>In USD |</p>
                        <p>Metric Tons</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-row ">
                    <div className="product-row-info productcapacity">
                      <label>Supply Capacity</label>
                      <input
                        className="form-control"
                        type="text"
                        id="supply capacity"
                        placeholder="Purchase Quantity e.g. 100 | Metric ton"
                      />
                    </div>
                    <div className="product-row-info productleadtimemin">
                      <label>Lead Time [Min] </label>
                      <input
                        className="form-control"
                        type="text"
                        id="lead time max"
                      />
                    </div>
                    <div className="product-row-info productleadtimemax">
                      <label>Lead Time [Max]</label>
                      <input
                        className="form-control"
                        type="text"
                        id="lead time min"
                      />
                    </div>
                  </div>

                  <div className="product-row">
                    <div className="product-row-info">
                      <label>Product Specification</label>
                      <p>
                        Click on the plus or minus sign to add new types/ values
                      </p>

                      <div className="productspecification">
                        <input
                          className="form-control"
                          type="text"
                          id="type"
                          placeholder="Type of product"
                        />
                        <input
                          className="form-control"
                          type="text"
                          id="value"
                          placeholder="+ -"
                        />
                      </div>
                    </div>

                    <div className="product-row-info">
                      <label>Minimum Order</label>
                      <p>
                        Click on the plus or minus sign to add new types/ values
                      </p>
                      <input
                        className="form-control"
                        type="text"
                        id="minimum order"
                        placeholder="metric tons "
                      />
                    </div>
                  </div>
                  <p>Product Description</p>
                  <div className="product-info-description">
                    State the Product description
                  </div>
                </div>
                <p>Featured Image</p>
                <p>
                  You are allowed to upload a maximum of 4 images to display
                </p>
                <div className="overview-card image-upload">
                  <p> Drop Image here</p>
                  <p>Or Browse Images from your device here</p>
                </div>
              </div>

              <div className="categories">
                <div className="overview-card categorieslist-container">
                  <div className="categorieslist">
                    <CgSmartHomeRefrigerator />
                    <p>Construction Material</p>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <CgSmartHomeRefrigerator />
                    <p>Construction Material</p>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <CgSmartHomeRefrigerator />
                    <p>Construction Material</p>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <CgSmartHomeRefrigerator />
                    <p>Construction Material</p>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <CgSmartHomeRefrigerator />
                    <p>Construction Material</p>
                    <Form.Check aria-label="option 1" />
                  </div>
                </div>
                <p>Sub Categories</p>
                <Form.Select size="sm">
                  <option>Large select</option>
                </Form.Select>

                <button className="categories-button">Select</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SellersNewProducts;
