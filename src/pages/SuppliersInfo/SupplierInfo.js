import React, { useState } from "react";
import "./SupplierInfo.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import brosweproduct from "../../assets/img/browseproduct.png";
import { BiArrowBack } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductImg from "../../assets/img/spi.png";
import ProductImg2 from "../../assets/img/spi2.png";
import ProductImg3 from "../../assets/img/spi3.png";
import ProductImg4 from "../../assets/img/spi4.png";
import ProductImg5 from "../../assets/img/spi5.png";
import thumbnail1 from "../../assets/img/thumbnail1.png";
import thumbnail2 from "../../assets/img/thumbnail2.png";
import thumbnail3 from "../../assets/img/thumbnail3.png";

const SupplierInfo = () => {
  const TabItems = [
    {
      title: "Company Summary",
      icon: <CgDanger />,
    },
    {
      title: "Certifications & Awards",
      icon: <CgDanger />,
    },
    {
      title: "Top Transactions",
      icon: <AiFillLock />,
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <>
      <Header />
      <div>
        <div className="supplier-info-container">
          <div className="Browse-Product">
            <div className="container">
              <button className="back-btn">
                {" "}
                <BiArrowBack /> Browse Product
              </button>
              <div className="Browse-product-info-container">
                <div className="">
                  <div className="Browse-Product-image">
                    <img src={brosweproduct} alt="" className="d-block w-100" />
                  </div>
                  <div className="thumbnail-images">
                    <img src={thumbnail1} alt="..." />
                    <img src={thumbnail2} alt="..." />
                    <img src={thumbnail3} alt="..." />
                    <img src={thumbnail1} alt="..." />
                    <img src={thumbnail2} alt="..." />
                  </div>
                </div>
                <div className="Browse-Product-info-box">
                  <div className="Browse-Product-info">
                    <div className="">
                      <div className="browse-info-details">
                        <p>Company Name</p>
                        <h6>Fusion & Co Traders</h6>
                      </div>
                      <div className="browse-info-details">
                        <p>Email Address</p>
                        <h6>ErhunAbbe123@outlook.com</h6>
                      </div>
                      <div className="browse-info-details">
                        <p>Phone Number</p>
                        <h6>+234-814694-3456</h6>
                      </div>
                      <div className="browse-info-details">
                        <p>Country</p>
                        <h6>Nigeria</h6>
                      </div>
                      <div className="browse-info-details">
                        <p>Products Listed</p>
                        <h6>12</h6>
                      </div>
                    </div>
                  </div>
                  <div className="browse-info-buttons">
                    <button className="browse-message">Message Supplier</button>
                    <button className="browse-share">Share Contact</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="Company-information-container">
              <div className="container">
                <div className="Company-information-box">
                  {TabItems.map((tabItem, i) => (
                    <ul className="all-information" key={i}>
                      <li className="Company-info">
                        {tabItem.title}
                        <span style={{ color: "#D92727", marginLeft: "10px" }}>
                          {tabItem.icon}
                        </span>
                      </li>
                    </ul>
                  ))}
                </div>

                <div className="Description">
                  <ul>
                    <li>
                      Colombian coffee exporter of green and roasted coffee,
                      dedicated to specialty coffee. Currently exporting to
                      Taiwan, Japan, the US, Germany, Korea, etc.{" "}
                    </li>
                    <li>
                      All their single-origin coffee is grown in The Cafe
                      Triangle, Colombia.
                    </li>
                    <li>
                      They work with several coffee varieties, including
                      Castillo, Caturra, Colombia, and Tabi.
                    </li>
                    <li>
                      They use two types of drying technique: washed and dried
                      in the fruit. Finally, they age coffee beans in oak
                      barrels used to age different types of liquors.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Listed-Products">
                <div className="container">
                  <h4>Listed Products</h4>
                  <div className="product-wrap">
                    <div className="product-card">
                      <div className="product-card-img">
                        <img src={ProductImg} className="" alt="..." />
                      </div>
                      <div className="product-card-info">
                        <h3 className="seller-name">Viet Delta</h3>
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
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
                        <h2 className="Lp-product-name">Java Peanuts</h2>
                        <p className="Lp-product-price">
                          <span className="Lp-currency">USD</span> 500 - 600{" "}
                          <span className="p-unit">/MT</span>
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="response-quote-box">
                  <div className="container">
                    <div className="response-quote">
                      <div className="quote-text">
                        <h5>Get Multiple Response to Single Quote</h5>
                        <p>
                          Are you interested in this market? Get a quote now.
                        </p>
                      </div>
                      <div className="request-quote">
                        <button className="request-quotebtn">
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupplierInfo;
