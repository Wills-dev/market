import React,{useState}from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMessage } from 'react-icons/ai';
import SellersSidebar from "./SellersComponent/SellersSidebar";
import Ellipse from "../../../assets/img/Ellipse.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SellersRfqsQuote = () => {
    const [showquote, setShowQuote] = useState(false);

  const handleCloseQuote = () => setShowQuote(false);
  const handleShowQuote = () => setShowQuote(true);
  return (
    <>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            
            <h2><button><IoIosArrowBack size={30}/></button>RFQ ID: 12345</h2>
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
            <div className="chat-main">
            <div className="main-overview">
                <div className="overview-card-buyers-info">
                    <div className="buyer-info-container">
                        <div className="buyer-info-pic">
                            <img src={Ellipse} alt=""/>
                            <h4>Supplier's Marketplace</h4>
                            <p>General RFQ Listing</p>
                        </div>
                    </div>
    
                    <div className="buyer-info-details">
                    <h4>Buyer's Info</h4>
                    <div className="buyer-info">
                        <span><CgProfile/></span>
                        <p>Audrey Oluchi Oji</p>
                    </div>
                    <div className="buyer-info">
                        <span><CgSmartHomeWashMachine/></span>
                        <p>Dory Enterprises</p>
                    </div>
                    <div className="buyer-info">
                        <span><AiOutlineMail/></span>
                        <p>Audreycasn@outlook.com</p>
                    </div>
                    <div className="buyer-info">
                        <span><GrLocation/></span>
                        <p>Lagos, Nigeria</p>
                    </div>

                    <div className="buyer-info messagebuyer">
                        <span><AiOutlineMessage/></span>
                        <button>Message Buyer</button>
                    </div>
                    </div>
                </div>
                    
                
                
                </div>
                <div className="main-overview">
                    <div className="overview-card">
                        <div className="product-info">
                            <p className="product-info-title">Product Name</p>
                            <p className="product-info-description">Fresh Mint leaves</p>
                        </div>
                        <div className="product-info">
                            <p className="product-info-title">Quantity</p>
                            <p className="product-info-description">50 MT</p>
                        </div>
                        <div className="product-info">
                            <p  className="product-info-title">Shipping Terms</p>
                            <p className="product-info-description">FOB</p>
                        </div>
                        <div className="product-info">
                            <p className="product-info-title">Destination</p>
                            <p className="product-info-description">Nigeria</p>
                        </div>

                        <div className="product-requirement">
                            <p>Product Requirement</p>
                            <p>How much will 20 metric tonnes of fresh mint leaves cost?
                                What’s your best price for that quantity</p>
                        </div>
                    
                    </div>

                
                </div>
            
               

            </div>
            <div className="product-quote">
                <div className="product-info">
                    <p className="product-info-title">Price</p>
                    <p className="product-info-description">$340 / MT</p>
                </div>
                <div className="product-info">
                    <p  className="product-info-title">Additional Notes:</p>
                    <p className="product-info-description">Yes i can sell that quantity to you at $532 per Metric tonne,
                         it’ll be $305 for shipping. message me for more details.
                    </p>
                </div>

            </div>
            <Button variant="primary" className="respond-btn quote" onClick={handleShowQuote}>
                Edit your Quote
            </Button>{' '}

            <Modal
                show={showquote}
                onHide={handleCloseQuote}
                backdrop="static"
                centered
                size="lg"
                keyboard={false}
              >
               
                <Modal.Body>
                    <Modal.Header closeButton></Modal.Header>
                    <div className="quote-modal">
                        <div className="rfq-details">
                            <p>RFQ's Detail</p>
                            <div className="product-info supplier-product-info">
                                <p className="product-info-title">RFQ ID</p>
                                <p className="product-info-description">No. 12345</p>
                            </div>
                            <div className="product-info supplier-product-info">
                                <p className="product-info-title">Product Name</p>
                                <p className="product-info-description">Fresh Mint Leaves</p>
                            </div>
                            <div className="product-info supplier-product-info">
                                <p className="product-info-title">Shopping Term</p>
                                <p className="product-info-description">FOB</p>
                            </div>
                            <div className="product-info supplier-product-info">
                                <p className="product-info-title">DEstination</p>
                                <p className="product-info-description">$Nigeria</p>
                            </div>
                            <div className="product-requirement supplier-product-requirement">
                            <p>Product Requirement</p>
                            <p>How much will 20 metric tonnes of fresh mint leaves cost?
                                What’s your best price for that quantity</p>
                        </div>
                        </div>
                        <div className="supplier-response">
                            <Form>
                                <p>Supplier's Response</p>

                                <div className="form-group form-group supplier-form-group">
                                  <label>Price</label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    id="price"
                                   
                                  />
                               </div>
                                <div className="form-group supplier-form-group">
                                  <label>Additional Details</label>
                                  <textarea
                                    cols="20"
                                    className="form-control"
                                    type="text"
                                    id="additional_details"
                                   
                                  />
                               </div>
                               <Modal.Footer>
                                <Button variant="secondary" className= "respond-btn" onClick={handleCloseQuote}>
                                    Update Quote
                                  </Button>
                                </Modal.Footer>
                            </Form>
                        </div>
                    </div>
                   
                </Modal.Body>
            
            </Modal>
        </main>
      </div>
    </>
  );
};

export default SellersRfqsQuote;
