import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { MdDownloadForOffline } from "react-icons/md";
import HeroImg2 from "../../assets/img/hero-img2.png";
import Button from "react-bootstrap/Button";
import { BsFillXDiamondFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./OldMutual.css";
import { Iconly } from "react-iconly";
import suppliercompliance from "../../assets/img/supplierCompliance.png";
import becomeseller from "../../assets/img/steven-cleghorn-psomVjxL29Y-unsplash.jpg";
import CatImg from "../../assets/img/veg.png";
import CatImg2 from "../../assets/img/fruits.jpg";
import CatImg3 from "../../assets/img/nuts-seeds.jpg";
import CatImg4 from "../../assets/img/herbs-spices.jpg";
import CatImg5 from "../../assets/img/grain-cereal.jpg";
import CatImg6 from "../../assets/img/oil.jpg";
import ProductImg from "../../assets/img/spi.png";
import ProductImg2 from "../../assets/img/spi2.png";
import ProductImg3 from "../../assets/img/spi3.png";
import ProductImg4 from "../../assets/img/spi4.png";
import ProductImg5 from "../../assets/img/spi5.png";
import journey from "../../assets/img/alex-hudson-m3I92SgM3Mk-unsplash.jpg";

const OldMutualSupplierMainLandingPage = () => {
  
  const ref = React.useRef(null);

  const ref1 = React.useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const scroll2 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
  };

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
        <section id="popular-cat">
          <div className="container">
            <div className="section-head">
              <h2>Popular Categories</h2>
            </div>
            <div className="cat-wrap">
              <Link>
                <div className="cat-box">
                  <img src={CatImg2} className="" alt="..." />
                  <h3>Fruits</h3>
                </div>
              </Link>
              <Link>
                <div className="cat-box">
                  <img src={CatImg} className="" alt="..." />
                  <h3>Vegetables</h3>
                </div>
              </Link>
              <Link>
                <div className="cat-box">
                  <img src={CatImg3} className="" alt="..." />
                  <h3>Vegetables</h3>
                </div>
              </Link>
              <Link>
                <div className="cat-box">
                  <img src={CatImg4} className="" alt="..." />
                  <h3>Herbs & Spices</h3>
                </div>
              </Link>
              <Link>
                <div className="cat-box">
                  <img src={CatImg6} className="" alt="..." />
                  <h3>Fats & Oil</h3>
                </div>
              </Link>
              <Link>
                <div className="cat-box">
                  <img src={CatImg5} className="" alt="..." />
                  <h3>Grains & Cereal</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="oldmutual-featured-product">
        <section id="featured-products">
          <div className="container">
            <div className="section-head">
              <h2>Featured Products</h2>
              <div>
                <Iconly
                  onClick={() => scroll(-275)}
                  className="scroll-icon me-4"
                  name="ChevronLeft"
                  set="light"
                  size="medium"
                  color="#282828"
                />
                <Iconly
                  onClick={() => scroll(275)}
                  className="scroll-icon"
                  name="ChevronRight"
                  set="light"
                  size="medium"
                  color="#282828"
                />
              </div>
            </div>
            <div className="main-container">
              <div className="p-container" ref={ref}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg2} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg3} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg4} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg5} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-head">
              <h2>Popular Products</h2>
              <div>
                <Iconly
                  onClick={() => scroll2(-275)}
                  className="scroll-icon me-4"
                  name="ChevronLeft"
                  set="light"
                  size="medium"
                  color="#282828"
                />
                <Iconly
                  onClick={() => scroll2(275)}
                  className="scroll-icon"
                  name="ChevronRight"
                  set="light"
                  size="medium"
                  color="#282828"
                />
              </div>
            </div>
            <div className="main-container">
              <div className="p-container" ref={ref1}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg3} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg5} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg4} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg3} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg2} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={ProductImg} className="" alt="..." />
                  </div>
                  <div className="product-card-info">
                    <h3 className="seller-name">Viet Delta</h3>
                    <h2 className="product-name">Java Peanuts</h2>
                    <p className="product-price">
                      <span className="p-currency">USD</span> 500 - 600{" "}
                      <span className="p-unit">/MT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="begin-journey-container">
        <div className="container">
          <div className="begin-journey-box">
            <div className="begin-journey-image">
              <img src={journey} alt="..." />
            </div>
            <div className="begin-journey-content">
              <h4>Ready to Begin your Journey?</h4>
              <p>
                join the safest and most trusted Agri-trading platform in
                Africa.
              </p>
              <button className="startselling-button">Start Selling</button>
            </div>
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
