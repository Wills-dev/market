import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import SellersSidebar from "../SellersDashboard/SellersComponent/SellersSidebar";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdOutlineLocalPizza } from "react-icons/md";
import { BsScissors } from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";
import { AiOutlineRocket } from "react-icons/ai";
import { MdOutlineAgriculture } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";

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
                        <option></option>
                        <option>
                          <p>Country of origin</p>{" "}
                        </option>
                      </Form.Select>
                    </div>
                    <div className="product-row-info productprice">
                      <label>Price</label>
                      <div className="productpricediv">
                        <input placeholder="In Usd" />
                        <p>Metric Tons</p>
                        <div className="productprice-button">
                          <button>
                            <AiOutlinePlus size={8} />
                          </button>
                          <button>
                            <AiOutlineMinus size={8} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-row ">
                    <div className="product-row-info productcapacity">
                      <label>Supply Capacity</label>
                      <div className="supplycapacitydiv">
                        <input placeholder="Purchase Quantity e.g. 100" />
                        <p>Metric Tons</p>
                      </div>
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
                    <div className="product-row-info productspecificationcontainer">
                      <label>Product Specification</label>
                      <p>
                        Click on the plus or minus sign to add new types/ values
                      </p>

                      <div className="productspecification">
                        <div className="productspecification-type">
                          <input
                            className="form-control"
                            type="text"
                            id="type"
                            placeholder="Type of product"
                          />
                        </div>

                        <div className="productspecification-value">
                          <input
                            className="form-control"
                            type="text"
                            id="type"
                            placeholder="value"
                          />
                          <button>
                            <AiOutlinePlus size={8} />
                          </button>
                          <button>
                            <AiOutlineMinus size={8} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="product-row-info minimumordercontainer">
                      <label>Minimum Order</label>
                      <p>
                        Click on the plus or minus sign to add new types/ values
                      </p>
                      <div className="minimum-order">
                        <div className="minimumorderdiv">
                          <input />
                          <p>Metric Tons</p>
                          <div className="productprice-button">
                            <button>
                              <AiOutlinePlus size={8} />
                            </button>
                            <button>
                              <AiOutlineMinus size={8} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <label>Product Description</label>
                  <div className="product-info-description">
                    <textarea
                      className="form-control"
                      type="text"
                      id="text"
                      cols="20"
                      placeholder="State the product description"
                    />
                  </div>
                </div>
              </div>

              <div className="categories">
                <h6>Categories</h6>
                <div className="overview-card categorieslist-container">
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <MdOutlineLocalPizza />
                      </span>
                      <p>Food & Beverage</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <BsScissors />
                      </span>
                      <p>Apparel</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <BiPackage />
                      </span>
                      <p>Packaging & Supplies</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <MdOutlineMapsHomeWork />
                      </span>
                      <p>Home & Furniture</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <AiOutlineSmile />
                      </span>
                      <p>Beauty & Personal Care</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <AiOutlineRocket />
                      </span>
                      <p>Minerals & Mettalurgy</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="categorieslist">
                    <div className="categoriesdescription">
                      <span>
                        <MdOutlineAgriculture />
                      </span>
                      <p>Agriculture</p>
                    </div>
                    <Form.Check aria-label="option 1" />
                  </div>
                </div>

                <h6 className="sub-categories">Sub Categories</h6>

                <Form.Select size="sm">
                  <option></option>
                  <option>Large select</option>
                </Form.Select>
              </div>
            </div>
            <div className="categories-footer">
              <div className="featured-image">
                <label>Featured Image</label>
                <p>
                  You are allowed to upload a maximum of 4 images to display
                </p>
                <div className="overview-card image-upload">
                  <span>
                    <BsCloudUpload />
                  </span>
                  <h6> Drop Image here</h6>
                  <p>
                    Or Browse Images from your device<Link to=""> here</Link>{" "}
                  </p>
                </div>
              </div>
              <div className="categories-footer-button">
                <button>List New Products</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SellersNewProducts;
