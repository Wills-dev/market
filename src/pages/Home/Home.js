import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroImg from "../../assets/img/hero-img.png";
import HeroImg2 from "../../assets/img/hero-img2.png";
import SpotIcon from "../../assets/img/round-spot-icon.svg";
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



const Home = () => {

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

      {/* Home Hero Section */}
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
      {/* End of Home Hero Section */}

      

      {/* Popular Categories */}
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
      {/* End of Popular Categories */}

      {/* Featured Products */}
      <section id="featured-products">
        <div className="container">
          <div className="section-head">
            <h2>Featured Products</h2>
            <div>
              <Iconly onClick={() => scroll(-275)} className="scroll-icon me-4" name="ChevronLeft" set="light" size="medium" color="#282828" />
              <Iconly onClick={() => scroll(275)} className="scroll-icon" name="ChevronRight" set="light" size="medium" color="#282828" />
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
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg2} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg3} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg4} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg5} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-head">
            <h2>Popular Products</h2>
            <div>
              <Iconly onClick={() => scroll2(-275)} className="scroll-icon me-4" name="ChevronLeft" set="light" size="medium" color="#282828" />
              <Iconly onClick={() => scroll2(275)} className="scroll-icon" name="ChevronRight" set="light" size="medium" color="#282828" />
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
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg5} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg4} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg3} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg2} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Featured Products */}

      {/* Banner Area */}
      <section className="banner-area">
        <div className="container">
          <div className="banner-wrap">
            <img src={HeroImg} className="d-block w-100" alt="..." />
          </div>
        </div>
      </section>
      {/* End of Banner Area */}

      {/* RFQ Section */}
      <section id="rfq-list">
        <div className="container">
          <div className="section-head">
            <h2>Latest Request for Quotes</h2>
          </div>
          <div className="rfq-list-wrap">
            <div className="rfq-list-box">
              <h2>Dried Split Ginger</h2>
              <h3>Quantity: 200 Metric Tonnes</h3>
              <p>Date created: Mon 15th Aug, 2022<span><Link>View details</Link></span></p>
            </div>
            <div className="rfq-list-box">
              <h2>Dried Split Ginger</h2>
              <h3>Quantity: 200 Metric Tonnes</h3>
              <p>Date created: Mon 15th Aug, 2022<span><Link>View details</Link></span></p>
            </div>
            <div className="rfq-list-box">
              <h2>Dried Split Ginger</h2>
              <h3>Quantity: 200 Metric Tonnes</h3>
              <p>Date created: Mon 15th Aug, 2022<span><Link>View details</Link></span></p>
            </div>
            <div className="rfq-list-box">
              <h2>Dried Split Ginger</h2>
              <h3>Quantity: 200 Metric Tonnes</h3>
              <p>Date created: Mon 15th Aug, 2022<span><Link>View details</Link></span></p>
            </div>
            <div className="rfq-list-box">
              <h2>Dried Split Ginger</h2>
              <h3>Quantity: 200 Metric Tonnes</h3>
              <p>Date created: Mon 15th Aug, 2022<span><Link>View details</Link></span></p>
            </div>
            <div className="rfq-list-box">
              <h2>Dried Split Ginger</h2>
              <h3>Quantity: 200 Metric Tonnes</h3>
              <p>Date created: Mon 15th Aug, 2022<span><Link>View details</Link></span></p>
            </div>
          </div>
        </div>
      </section>
      {/* End of RFQ Section */}

      {/* Banner Area */}
      <section className="banner-area">
        <div className="container">
          <div className="banner-wrap">
            <img src={HeroImg2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </section>
      {/* End of Banner Area */}

      {/* New Products */}
      <section id="featured-products">
        <div className="container">
          <div className="section-head">
            <h2>Newly Added Products</h2>
            <div>
              <Iconly onClick={() => scroll(-275)} className="scroll-icon me-4" name="ChevronLeft" set="light" size="medium" color="#282828" />
              <Iconly onClick={() => scroll(275)} className="scroll-icon" name="ChevronRight" set="light" size="medium" color="#282828" />
            </div>
          </div>
          <div className="main-container">
            <div className="p-container">
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg2} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg3} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg4} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg5} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <img src={ProductImg} className="" alt="..." />
                </div>
                <div className="product-card-info">
                  <h3 className="seller-name">Viet Delta</h3>
                  <h2 className="product-name">Java Peanuts</h2>
                  <p className="product-price"><span className="p-currency">USD</span> 500 - 600 <span className="p-unit">/MT</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of New Products */}

      {/* Features */}

      <section id="features-wrap">
        <div className="container">
          <div className="section-head">
            <h2>What we offer on Traders of Africa</h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="feature-card">
                <h2><img src={SpotIcon} className="rspot-icon" alt="..." />Trade with confidence</h2>
                <p>We provide a supplier marketplace where suppliers can meet other suppliers and start direct </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-card">
                <h2><img src={SpotIcon} className="rspot-icon" alt="..." />Negotiations</h2>
                <p>We provide a supplier marketplace where suppliers can meet other suppliers and start direct </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-card">
                <h2><img src={SpotIcon} className="rspot-icon" alt="..." />Rfq’s</h2>
                <p>We provide a supplier marketplace where suppliers can meet other suppliers and start direct </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-card">
                <h2><img src={SpotIcon} className="rspot-icon" alt="..." />Diverse African Network</h2>
                <p>We provide a supplier marketplace where suppliers can meet other suppliers and start direct </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Features */}

      <Footer />
    </>
  );
};

export default Home;
