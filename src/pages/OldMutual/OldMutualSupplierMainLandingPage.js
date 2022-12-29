import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { MdDownloadForOffline } from "react-icons/md";
import HeroImg2 from "../../assets/img/hero-img2.png";
import Button from "react-bootstrap/Button";
import { BsFillXDiamondFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./OldMutual.css";
import suppliercompliance from "../../assets/img/supplierCompliance.png";
import becomeseller from "../../assets/img/steven-cleghorn-psomVjxL29Y-unsplash.jpg";
import productimg1 from "../../assets/img/Produtimageveg.png";
import productimg2 from "../../assets/img/Produtimageveg.png";
import productimg3 from "../../assets/img/Produtimagenut.png";
import productimg4 from "../../assets/img/Produtimageherb.png";
import productimg5 from "../../assets/img/Produtimageoil.png";
import productimg6 from "../../assets/img/Produtimagegrain.png";
import featured1 from "../../assets/img/featured1.png";
import featured2 from "../../assets/img/featured2.png";
import featured3 from "../../assets/img/featured3.png";
import featured4 from "../../assets/img/featured4.png";
import featured5 from "../../assets/img/featured5.png";
import featured6 from "../../assets/img/featured6.png";
import journey from "../../assets/img/alex-hudson-m3I92SgM3Mk-unsplash.jpg";

const OldMutualSupplierMainLandingPage = () => {
  return (
    <>
      <Header />
      <section id="main-hero-section" className="mt-4">
        <div className="container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={HeroImg2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={HeroImg2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={HeroImg2} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="main-why-sell-container">
        <div className="container">
          <h4>Why Join the MarketPlace</h4>
          <div className="main-why-sell">
            <div className="main-why-sell-content">
              <h5>
                <AiOutlineLoading3Quarters
                  size={12}
                  style={{ color: "#8DC63F", marginRight: "10px" }}
                />
                Secured Trade
              </h5>
              <p>
                TOFA is the safest and most trusted trading platform in Africa.
                We ensures safety & security of buyers and sellers.
              </p>
            </div>
            <div className="main-why-sell-content">
              <h5>
                <AiOutlineLoading3Quarters
                  size={12}
                  style={{ color: "#8DC63F", marginRight: "10px" }}
                />
                Low Commissions
              </h5>
              <p>
                Our commission fees are as low as 5%, and you only pay when you
                successfully sell your product on the marketplace.
              </p>
            </div>
            <div className="main-why-sell-content">
              <h5>
                <AiOutlineLoading3Quarters
                  size={12}
                  style={{ color: "#8DC63F", marginRight: "10px" }}
                />
                24/7 Support
              </h5>
              <p>
                We provide various tools to increase your success including: a
                personalised dashboard and our dedicated support team.
              </p>
            </div>
            <div className="main-why-sell-content">
              <h5>
                <AiOutlineLoading3Quarters
                  size={12}
                  style={{ color: "#8DC63F", marginRight: "10px" }}
                />
                Diverse Network
              </h5>
              <p>
                Network with over 16,000 Sellers across Africa and over 1
                million + buyers from all over the world when you sign up.
              </p>
            </div>
          </div>
        </div>
        <div className="oldmutual-main-becomeseller">
          <div className="container">
            <div className="oldmutual-main-becomeseller-box">
              <div className="main-become-seller-image">
                <img src={becomeseller} alt="..." />
              </div>
              <div className="main-become-seller-content">
                <div className="main-become-seller-content-list">
                  <h4>Become a seller in 3 easy steps</h4>
                  <ul>
                    <li>
                      <BsFillXDiamondFill
                        style={{ color: "#8DC63F", marginRight: "20px" }}
                      />
                      Fill the registration form, and create your account.
                    </li>
                    <li>
                      <BsFillXDiamondFill
                        style={{ color: "#8DC63F", marginRight: "20px" }}
                      />
                      Add Business information and submit the required
                      documents.
                    </li>
                    <li>
                      <BsFillXDiamondFill
                        style={{ color: "#8DC63F", marginRight: "20px" }}
                      />
                      List your products and start selling to both Local and
                      foreign buyers.
                    </li>
                  </ul>
                </div>
                <div className="main-become-seller-content-button">
                  <button>Start Selling Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oldmutual-main-suppliercompliance-container">
        <div className="container">
          <div className="oldmutual-main-suppliercompliance">
            <div className="oldmutual-main-suppliercompliance-image">
              <img src={suppliercompliance} alt="" />
            </div>
            <div className="oldmutual-main-suppliercompliance-infobox">
              <div className="oldmutual-main-suppliercompliance-info">
                <p>
                  All compliances on the suppliers marketplace must be adhered
                  to. Failure to do so will be considered as a breach in our
                  agreements and sanctions will be imposed. Kindly view the
                  document below.
                </p>
                <p className="om-download">
                  <span>
                    <MdDownloadForOffline style={{ color: "black" }} />
                  </span>
                  Download the Supplier Complainces.pdf
                </p>
              </div>
              <div className="oldmutual-main-suppliercompliance-info">
                <p>
                  Certain products are prohibited from being listed on the
                  suppliers marketplace. Kindly view the document of excluded
                  products in order to be made aware and abstain from such acts.
                </p>
                <p className="om-download">
                  <span>
                    <MdDownloadForOffline style={{ color: "black" }} />
                  </span>
                  Download the Supplier Complainces.pdf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oldmutual-explore-categories">
        <div className="container">
          <div className="explore-cat-box">
            <div className="explore-cat-box-heading">
              <p>Explore Categories</p>
              <button>All Categories</button>
            </div>
            <div className="explore-cat-box-images">
              <div className="explore-cat-box-image">
                <img src={productimg1} alt="..." />
                <p>Fruits</p>
              </div>
              <div className="explore-cat-box-image">
                <img src={productimg2} alt="..." />
                <p>Vegetables</p>
              </div>
              <div className="explore-cat-box-image">
                <img src={productimg3} alt="..." />
                <p>Nut & seeds</p>
              </div>
              <div className="explore-cat-box-image">
                <img src={productimg4} alt="..." />
                <p>Herbs & Spice</p>
              </div>
              <div className="explore-cat-box-image">
                <img src={productimg5} alt="..." />
                <p>Oil & Fats</p>
              </div>
              <div className="explore-cat-box-image">
                <img src={productimg6} alt="..." />
                <p>Grain & Cereal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oldmutual-featured-product">
        <div className="container">
          <div className="feature-prod-box">
            <div className="featured-prod-box-heading">
              <p>Featured Products</p>
              <button>View More</button>
            </div>
            <div className="feature-cat-box-images">
              <div className="feature-cat-box-image">
                <img src={featured1} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured2} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured3} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured4} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured5} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured6} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span>/ MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured1} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
              <div className="feature-cat-box-image">
                <img src={featured2} alt="..." />
                <p>Viet Delta</p>
                <div className="fp-info">
                  <p>Java Peanuts</p>
                  <p>
                    USD <span>500 - 650</span> / MT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="begin-journey-container">
        <div className="container">
          <div className="begin-journey-box">
            <div className="begin-journey-image">
              <img src={journey} alt="..." />
            </div>
          </div>
          <div className="begin-journey-content">
            <h4>Ready to Begin your Journey?</h4>
            <p>
              join the safest and most trusted Agri-trading platform in Africa.
            </p>
            <button className="startselling-button">Start Selling</button>
          </div>
        </div>
      </div>
      <div className="begin-journey-footer">
        <div className="container">
          <div className="begin-journey-footer-box">
            <p> © 2022 Traders of Africa in partnership with Old Mutual</p>
            <p>Terms and Conditions | Privacy Policy </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OldMutualSupplierMainLandingPage;
