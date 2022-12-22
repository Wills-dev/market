import React from "react";
import "./ProductListing.css";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NewsLetter from "../../components/Newsletter/NewsLetter";
import ProductImg from "../../assets/img/spi.png";
import ProductImg2 from "../../assets/img/spi2.png";
import ProductImg3 from "../../assets/img/spi3.png";
import ProductImg4 from "../../assets/img/spi4.png";
import ProductImg5 from "../../assets/img/spi5.png";
import blank from "../../assets/img/Blank.png";

const ProductListing = () => {
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
      <section id="product-listing">
        <div className="container">
          <div className="d-flex justify-content-end mb-3">
            <Iconly
              onClick={() => scroll(-275)}
              className="me-4  chev-left carousel-nav"
              name="ChevronLeft"
              set="light"
              size="medium"
              color="#282828"
            />
            <Iconly
              onClick={() => scroll(275)}
              className="chev-right carousel-nav"
              name="ChevronRight"
              set="light"
              size="medium"
              color="#282828"
            />
          </div>
          <ul className="product-cat-list" ref={ref}>
            <li className="product-cat active">
              <Link>All Categories</Link>
            </li>
            <li className="product-cat">
              <Link>
                <span>Fruits</span>
              </Link>
            </li>
            <li className="product-cat">
              <Link>Herbs and Spices</Link>
            </li>
            <li className="product-cat">
              <Link>Grains, Cereal & Legumes</Link>
            </li>
            <li className="product-cat">
              <Link>Nuts & Seeds</Link>
            </li>
            <li className="product-cat">
              <Link>Cocoa Products</Link>
            </li>
            <li className="product-cat">
              <Link>Packaged Foods</Link>
            </li>
            <li className="product-cat">
              <Link>Dairy Products</Link>
            </li>
            <li className="product-cat">
              <Link>Cereals</Link>
            </li>
            <li className="product-cat">
              <Link>Animal Feed</Link>
            </li>
            <li className="product-cat">
              <Link>Fats & Oils</Link>
            </li>
            <li className="product-cat">
              <Link>Dairy Products</Link>
            </li>
            <li className="product-cat">
              <Link>Cereals</Link>
            </li>
            <li className="product-cat">
              <Link>Animal Feed</Link>
            </li>
            <li className="product-cat">
              <Link>Fats & Oils</Link>
            </li>
          </ul>
          <div>
            <div className="section-head">
              <h2>All Products</h2>
              <div className="mobile-carousel-nav">
                <Iconly
                  onClick={() => scroll2(-275)}
                  className="me-4 carousel-nav"
                  name="ChevronLeft"
                  set="light"
                  size="medium"
                  color="#282828"
                />
                <Iconly
                  onClick={() => scroll2(275)}
                  className="carousel-nav"
                  name="ChevronRight"
                  set="light"
                  size="medium"
                  color="#282828"
                />
              </div>
            </div>
            <div className="product-wrap" ref={ref1}>
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
            </div>
          </div>

          <div className="product-empty-card">
            <div className="product-empty-card-img">
              <img src={blank} alt="" />
            </div>
          </div>

          <div className="product-wrap" ref={ref1}>
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
          </div>
          <NewsLetter />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductListing;
