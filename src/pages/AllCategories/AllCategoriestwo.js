import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineFilter } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Categories1 from "../../assets/img/allcategories1.png";
import categories2 from "../../assets/img/allcategories2.png";
import categories3 from "../../assets/img/allcategories3.png";
import categories4 from "../../assets/img/allcategories4.png";
import categories5 from "../../assets/img/allcategories5.png";
import categories6 from "../../assets/img/allcategories6.png";
import categories7 from "../../assets/img/allcategories7.png";
import categories8 from "../../assets/img/allcategories8.png";
import "./AllCategories.css";
const AllCategoriestwo = () => {
  return (
    <>
      <Header />
      <div>
        <div className="allCategories-container">
          <div className="categories-cat-list">
            <div className="container">
              <ul className="product-cat-list">
                <li className="product-cat allcatactive">
                  <Link>
                    Filter{" "}
                    <span>
                      <AiOutlineFilter style={{ color: "#DD4F05" }} />
                    </span>
                  </Link>
                </li>
                <li className="product-cat">
                  <Link>
                    <span>
                      <MdOutlineLocationOn
                        style={{ color: "#DD4F05", marginRight: "5px" }}
                      />
                    </span>
                    From Where{" "}
                    <span>
                      <AiOutlineDown
                        style={{ color: "#DD4F05", marginLeft: "5px" }}
                      />
                    </span>
                  </Link>
                </li>
                <li className="product-cat">
                  <Link>Grains, Cereal & Legumes</Link>
                </li>
                <li className="product-cat">
                  <Link>Nuts & Seeds</Link>
                </li>
                <li className="product-cat">
                  <Link>Herbs, Spices & Seasonings</Link>
                </li>
                <li className="product-cat">
                  <Link>Cocoa Products</Link>
                </li>
                <li className="product-cat">
                  <Link>Packaged Foods</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="allcategories-card">
            <div className="container">
              <div className="categories-crumb">
                <button className="back-btn">
                  {" "}
                  <BiArrowBack /> Home / Categories
                </button>
              </div>

              <div className="allCategories-wrap">
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={Categories1} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Food & Beverage</h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories2} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Packaging & Supplies</h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories3} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Construction Materials</h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories4} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Beauty & Personal Care </h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories5} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Agriculture</h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories6} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Minerals & Mettalurgy </h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories7} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Apparel (2355)</h4>
                    <p>(2355 Products)</p>
                  </div>
                </div>
                <div className="categoties-card">
                  <div className="categories-card-img">
                    <img src={categories8} className="" alt="..." />
                  </div>
                  <div className="categories-card-info">
                    <h4 className="categories-name">Home & Furniture </h4>
                    <p>(2355 Products)</p>
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
export default AllCategoriestwo;
