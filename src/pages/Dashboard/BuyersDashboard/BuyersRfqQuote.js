import React, { useState } from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import BuyersSidebar from "../../Dashboard/BuyersDashboard/BuyersComponent/BuyersSidebar"
import Ellipse from "../../../assets/img/Ellipse.png";
import "../Dashboard.css";
import tablepic from "../../../assets/img/tablepic.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const BuyersRfqQuote = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="grid-container">
        <header className="header">
          <div className="header__message">
            <h2>
              <button>
                <IoIosArrowBack size={30} />
              </button>
              RFQ ID: 12345
            </h2>
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

        <BuyersSidebar />

        <main className="main">
          <div className="chat-main">
            <div className="main-overview">
              <div className="overview-card-buyers-info">
                <div className="buyer-info-container">
                  <div className="buyer-info-pic">
                    <img src={Ellipse} alt="" />
                    <h4>Fashion & co Traders</h4>
                  </div>
                </div>

                <div className="buyer-info-details">
                  <h6>Audrey Oluchi Oji</h6>

                  <div className="buyer-info">
                    <span>
                      <CgSmartHomeWashMachine />
                    </span>
                    <p>Dory Enterprises</p>
                  </div>
                  <div className="buyer-info">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <p>Audreycasn@outlook.com</p>
                  </div>
                  <div className="buyer-info">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <p>+234 700 5000 500</p>
                  </div>
                  <div className="buyer-info">
                    <span>
                      <GrLocation />
                    </span>
                    <p>Lagos, Nigeria</p>
                  </div>

                  <div className="buyer-info messageseller">
                    <span>
                      <AiOutlineMessage />
                    </span>
                    <button>View Sellers Page</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-overview">
              <div className="overview-card no-padding">
                <div className="product-info">
                  <p className="product-info-title">Product Name</p>
                  <p className="product-info-description">Fresh Mint leaves</p>
                </div>
                <div className="product-info">
                  <p className="product-info-title">Quantity</p>
                  <p className="product-info-description">50 MT</p>
                </div>
                <div className="product-info">
                  <p className="product-info-title">Shipping Terms</p>
                  <p className="product-info-description">FOB</p>
                </div>
                <div className="product-info">
                  <p className="product-info-title">Destination</p>
                  <p className="product-info-description">Nigeria</p>
                </div>

                <div className="product-requirement">
                  <p>Product Requirement</p>
                  <p>
                    How much will 20 metric tonnes of fresh mint leaves cost?
                    What’s your best price for that quantity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <>
            <h4>Recieved Quotes</h4>
            <div className="product-quote">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product Image</th>
                      <th scope="col">Request Info</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Prompt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={tablepic}
                              alt="..."
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <p>Fresh Mint</p>
                        <p>Quote ID: No.12345</p>
                      </td>
                      <td>50MT</td>
                      <td>
                        <p>Dory Enterprise</p>
                        <p>Lagos Nigeria</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          style={{ borderRadius: "20px" }}
                          onClick={handleShow}
                        >
                          Start Order
                        </button>
                        <p className="buyerviewquote">
                          <Link to="">View Quote</Link>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              className="table-product-img"
                              src={tablepic}
                              alt="..."
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <p>Fresh Mint</p>
                        <p>Quote ID: No.12345</p>
                      </td>
                      <td>50MT</td>
                      <td>
                        <p>Dory Enterprise</p>
                        <p>Lagos Nigeria</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          style={{ borderRadius: "20px" }}
                          onClick={handleShow}
                        >
                          Start Order
                        </button>
                        <p className="buyerviewquote">
                          <Link to="">View Quote</Link>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                size="lg"
                keyboard={false}
              >
                <Modal.Body>
                  <Modal.Header closeButton></Modal.Header>
                  <div className="quote-modal">
                    <div className="rfq-details buyerrfqdetails">
                      <p>Quote Details</p>
                      <div className="buyer-quotedetails">
                        <p>RFQ ID</p>
                        <input placeholder="No: 12345"></input>
                      </div>
                      <div className="buyer-quotedetails">
                        <p>Product Name</p>
                        <input placeholder="Fresh Mint Leave"></input>
                      </div>
                      <div className="buyer-quotedetails">
                        <p>Incoterms</p>
                        <input placeholder="FOB"></input>
                      </div>
                      <div className="buyer-quotedetails">
                        <p>Destination</p>
                        <input placeholder="Nigeria"></input>
                      </div>
                      <div className="buyer-quotedetails">
                        <p>Destination</p>
                        <input placeholder="Nigeria"></input>
                      </div>
                      <div className="form-group supplier-form-group">
                        <div className="quote-product-requirement">
                          <h6>Product Requirement</h6>
                          <p>
                            How much will 20 metric tonnes of fresh mint leaves
                            cost? What’s your best price for that quantity
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="supplier-response">
                      <p>Supplier's Response</p>

                      <div className="buyer-price">
                        <p>Price</p>
                        <input></input>
                      </div>
                      <div className="buyer-price">
                        <p>Price</p>
                        <input></input>
                      </div>
                      <div className="buyer-price">
                        <p>Price</p>
                        <input></input>
                      </div>
                      <div className="buyer-price">
                        <p>Price</p>
                        <input></input>
                      </div>
                      <div className="form-group supplier-form-group">
                        <div className="buyersformgroup">
                          <h6>Additional Notes:</h6>
                          <p>
                            Yes i can sell that quantity to you at $532 per
                            Metric tonne, it’ll be $305 for shipping. message me
                            for more details.
                          </p>
                        </div>
                      </div>

                      <Modal.Footer>
                        <div className="buyer-modal-footer">
                          <Button
                            variant="secondary"
                            className="buyerchangepassword"
                            onClick={handleClose}
                          >
                            Send Quote
                          </Button>
                          <Button
                            variant="secondary"
                            className="buyersavechanges"
                            onClick={handleClose}
                          >
                            Manage Supplier
                          </Button>
                        </div>
                      </Modal.Footer>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </>
        </main>
      </div>
    </>
  );
};

export default BuyersRfqQuote;
