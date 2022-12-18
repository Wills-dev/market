import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import SellersSidebar from "./SellersComponent/SellersSidebar";
import Button from "react-bootstrap/Button";
import cashew from "../../../assets/img/Cashew.png";
import cash1 from "../../../assets/img/cash1.png";
import cash2 from "../../../assets/img/cash2.png";
import cash3 from "../../../assets/img/cash3.png";
import cash4 from "../../../assets/img/cash4.png";
import cash5 from "../../../assets/img/cash5.png";

const SellersProductDescription = () => {
  return (
    <>
      <div>
        <div className="grid-container">
          <header className="header">
            <div className="header__message">
              <h2>Fresh Avocado W320</h2>
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
            <div className="product-description-button">
              <div className="Edit-Delete">
                <button className="edit-product">Edit profile</button>
                <button className="delete-product">Delete Product</button>
              </div>
            </div>
            <div className="main-overview">
              <div className="overview-card product-description-container">
                <div className="Product-description-image">
                  <h4></h4>
                  <div className="Product-description-mainimage">
                    <img src={cashew} alt=""></img>
                  </div>
                  <div className="Product-description-subimage">
                    <div className="Product-description-thumbimage">
                      <img src={cash1} alt=""></img>
                    </div>
                    <div className="Product-description-thumbimage">
                      <img src={cash2} alt=""></img>
                    </div>
                    <div className="Product-description-thumbimage">
                      <img src={cash3} alt=""></img>
                    </div>
                    <div className="Product-description-thumbimage">
                      <img src={cash4} alt=""></img>
                    </div>
                    <div className="Product-description-thumbimage">
                      <img src={cash5} alt=""></img>
                    </div>
                  </div>
                </div>
                <div className="Product-description-information-box">
                  <h6 className="Product-description-information-box-title">
                    Product Information
                  </h6>
                  <div className="Product-description-information-container">
                    <div className="Product-description-information">
                      <div className="Product-description-information-listitem">
                        <p>Price</p>
                        <h6 className="product-desc-details">USD 500</h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>MOQ</p>
                        <h6 className="product-desc-details">100MT</h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Country of Origin</p>
                        <h6 className="product-desc-details">Uganda</h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Lead Time [Min]</p>
                        <h6 className="product-desc-details">2 weeks</h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Lead Time [Max]</p>
                        <h6 className="product-desc-details">4 weeks</h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Supply capacity</p>
                        <h6 className="product-desc-details">
                          10,000 MT / Monthly
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Product-description-information-box">
                  <h6 className= "Product-description-information-box-title">
                    Available Specificication
                  </h6>
                  <div className="Product-description-information-container">
                    <div className="Product-description-specification">
                      <div className="Product-description-information-listitem">
                        <p>Type</p>
                        <h6 className="product-desc-details">
                          Scorched, Sun Scorched
                        </h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Colour</p>
                        <h6 className="product-desc-details">
                          Creamy-white, Light yellow
                        </h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Grade</p>
                        <h6 className="product-desc-details">
                          W180, 240, 320, 450
                        </h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Moisture</p>
                        <h6 className="product-desc-details">10%</h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Category</p>
                        <h6 className="product-desc-details">
                          Food & Beverage
                        </h6>
                      </div>
                      <div className="Product-description-information-listitem">
                        <p>Sub-category</p>
                        <h6 className="product-desc-details">Fresh Fruits</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-information-description">
              <h4>Product Description</h4>
              <div className="product-description-line"></div>
              <div className="product-information-description-text">
                <p>
                  ToFa has developed partnerships with Vietnam’s top suppliers
                  to provide high-quality cashew nuts to markets worldwide.
                  Vietnam has been producing cashews throughout the country
                  since the early 1980s. Cashew nuts are grown in various
                  regions in Vietnam, including Binh Phuoc, Dak Nong, Dong Nai,
                  Binh Duong provinces. Particularly, Binh Phuoc province is
                  known as the leading region for the growth of cashew nuts,
                  constituting over 50% of the entire cashew nuts production in
                  Vietnam. Tridge can provide two types of cashew nuts for
                  export: kernel and processed nuts. With kernel cashew nuts,
                  there are various sizes ranging from W180 to W500. For
                  processed nuts, salt-roasted cashew is most popular. Moreover,
                  Tridge can provide organic cashew kernel, which is gaining
                  popularity in the market. he cashew nuts in Vietnam are based
                  on size, color, and degree of rupture.. Tridge can provide two
                  types of cashew nuts for export: kernel and processed nuts.
                  With kernel cashew nuts, there are various sizes ranging from
                  W180 to W500. For processed nuts, salt-roasted cashew is most
                  popular. Moreover, Tridge can provide organic cashew kernel,
                  which is gaining popularity in the market. The cashew nuts in
                  Vietnam are based on size, color, and degree of rupture.
                  Cashew nuts are grown in various regions in Vietnam, including
                  Binh Phuoc, Dak Nong, Dong Nai, Binh Duong provinces.
                  Particularly, Binh Phuoc province is known as the leading
                  region for the growth of cashew nuts, constituting over 50% of
                  the entire cashew nuts production in Vietnam.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SellersProductDescription;
