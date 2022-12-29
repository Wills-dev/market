import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";
import sellerlanding1 from "../../assets/img/sellerlanding1.png";
import sellerlanding2 from "../../assets/img/sellerlanding2.png";
import sellerlanding3 from "../../assets/img/sellerlanding3.png";
import oldmutual1 from "../../assets/img/oldmutual1.png";
import oldmutual2 from "../../assets/img/oldmutual2.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDownloadForOffline } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import nicee1 from "../../assets/img/nicee1.png";
import "./OldMutual.css";

const OldMutualSupplierLandingPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="seller-landing-box">
          <div className="container">
            <div className="oldmutual-landing-register">
              <div className="seller-landing-connect">
                <h2>
                  <span>Connect and Trade</span> With Suppliers of Food and
                  Agriculture
                </h2>

                <p>
                  Take your business to the next level by becoming a seller on
                  the supplier’s marketplace.
                </p>
                <Button className="changepassword">Register Now</Button>
              </div>

              <div className="seller-landing-images-container">
                <div className="seller-landing-images">
                  <div className="Sld-sideimageone">
                    <div className="sellerlandingdots">
                      <TbGridDots size={80} style={{ color: "#B4E1FF" }} />
                      <TbGridDots size={80} style={{ color: "#B4E1FF" }} />
                    </div>

                    <img
                      src={sellerlanding1}
                      alt=""
                      className="sellerlandingimg"
                    />
                    <div className="sellerlandingdotstwo">
                      <TbGridDots size={80} style={{ color: "#FFBD9B" }} />
                    </div>
                  </div>
                  <div className="Sld-sideimagetwo">
                    <div className="sellerlandingone">
                      <img src={sellerlanding3} alt="" />
                    </div>

                    <div className="sellerlandingtwo">
                      <img src={sellerlanding2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why-sell">
          <div className="container">
            <div className="Why-sell-title">
              <h2>Why Sell on MarketPlace</h2>
              <p>
                Learn the basics, Here's what you need to know to start selling.
              </p>
            </div>

            <div className="Why-sell-cards">
              <div className="Why-sell-card">
                <p className="why-sell-number">1</p>
                <h5>List your item</h5>
                <p className="Why-sell-text">
                  You can list new products and pay affordable fees. Learn more
                  about our pricing plans here.
                </p>
              </div>
              <div className="Why-sell-card">
                <p className="why-sell-number">2</p>
                <h5>Get seller protection</h5>
                <p className="Why-sell-text">
                  We ensure that all buyers are both credible and legitimate .
                  This ensures that all deals carried out on the platform are
                  secure and reliable.
                </p>
              </div>
              <div className="Why-sell-card">
                <p className="why-sell-number">3</p>
                <h5>List your item</h5>
                <p className="Why-sell-text">
                  You can list new products and pay affordable fees. Learn more
                  about our pricing plans here.
                </p>
              </div>
              <div className="Why-sell-card">
                <p className="why-sell-number">4</p>
                <h5>Promotions and marketing</h5>
                <p className="Why-sell-text">
                  You can Benefit from our promotions and marketing get
                  visibility from our campaigns/promotions and insight on best
                  selling products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="oldmutual-become-supplier">
          <div className="container">
            <div className="oldmutual-become-supplier-box">
              <div className="old-mutual-supplier-image">
                <div className="oldmutual1">
                  <img src={oldmutual2} alt="..." />
                </div>
                <div className="oldmutual2">
                  <img
                    src={oldmutual1}
                    alt="..."
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>
              <div className="oldmutualsuppliersteps">
                <h4>Become A Supplier in Three Steps</h4>
                <ul>
                  <li>
                    <p>
                      Step 1: Register under 5 minutes: fill the registration
                      form and submit the required documents
                    </p>
                  </li>
                  <li>
                    <p>
                      Step 2: Become an Agro-ecommerce expert: complete the
                      dedicated new seller onboarding video & activate your
                      seller center account to manage your shop Step
                    </p>
                  </li>
                  <li>
                    <p>
                      Step 3: List your products and sell: upload products and
                      start selling by exposing your product to a wide african
                      client base on the marketplace.
                    </p>
                  </li>
                </ul>
                <div className="become-supplier-button oldmutual-becomesupplier">
                  <Button className="changepassword">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="oldmutual-plans-pricing">
          <div className="container">
            <div className="plans-pricing-title oldmutualplan-title">
              <h2>Plans & Pricing</h2>
              <p>No hidden fees, or advance fees</p>
            </div>
            <div className="plans">
              <div className="plan-types oldMutual">
                <div className="Basic-plan oldmutualbasicplan">
                  <AiOutlineLoading3Quarters style={{ color: "blue" }} />
                  <h6>Basic Plan</h6>
                  <p>The perfect Plan for starters</p>
                  <h5>FREE</h5>
                  <p>No cost on this plan</p>

                  <div className="plans-details">
                    <div className="plan-destails-item">
                      <AiOutlineCheck />
                      <p>Commission: 5%</p>
                    </div>
                    <div className="plan-destails-item">
                      <AiOutlineCheck />
                      <p>Number of Products: 5</p>
                    </div>
                    <div className="plan-destails-item">
                      <AiOutlineCheck />
                      <p>Number of Pictures: 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="oldmutual-complianceExclusion-box">
          <div className="container">
            <div className="oldmutual-compliance-exclusion">
              <div className="oldmutualexclusioncontainer">
                <h3>Our Supplier Complainces</h3>
                <div className="product-exclusion oldmutualexclusion">
                  <div className="product-exclusion-text">
                    <p>
                      All compliances on the suppliers marketplace must be
                      adhered to. Failure to do so will be considered as a
                      breach in our agreements and sanctions will be imposed.
                      Kindly view the document below.
                    </p>
                  </div>
                </div>
                <div className="download-pdf">
                  <MdDownloadForOffline style={{ color: "#979797" }} />
                  <p>Download the Supplier Complainces.pdf</p>
                </div>
              </div>

              <div className="oldmutualexclusioncontainer">
                <h3>Our Product Exclusions</h3>
                <div className="oldmutualexclusion">
                  <div className="product-exclusion-text">
                    <p>
                      Certain products are prohibited from being listed on the
                      suppliers marketplace. Kindly view the document of
                      excluded products in order to be made aware and abstain
                      from such acts.
                    </p>
                  </div>
                </div>
                <div className="download-pdf">
                  <MdDownloadForOffline style={{ color: "#979797" }} />
                  <p>Download the Product Exclusions.pdf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="oldmutual-right-marketplace">
          <div className="container">
            <div className="rm-pricing-title">
              <h2>Use the supplier’s Marketplace the right way</h2>
              <p>
                Learn the essential ways to successfully maximize the
                marketplace for a successful trade.
              </p>
            </div>
            <div className="right-marketplace-image">
              <img src={nicee1} alt="..." />
              <button>
                <AiOutlinePlayCircle size={20} /> Play Video Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer className="seller-landing-footer" />
    </>
  );
};

export default OldMutualSupplierLandingPage;
