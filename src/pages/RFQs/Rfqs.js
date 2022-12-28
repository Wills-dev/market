import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Rfqs.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Rfqs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <div>
        <div className="rfq-landing-container">
          <div className="container">
            <button className="back-btn">
              {" "}
              <BiArrowBack /> RFQ's
            </button>
            <div className="rfq-cards">
              <div className="rfq-list-wrap">
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="rfq-list-box">
                  <h2>Cameroon WW32 Peanuts</h2>
                  <p>Mrs, Guyelen mayenga</p>

                  <div className="rfq-list-btmitems">
                    <p>Quantity: 200 Metric Tonnes</p>
                    <p>
                      Date created: Mon 15th Aug, 2022
                      <span>
                        <Link onClick={handleShow}>View details</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="response-quote">
                <div className="quote-text">
                  <h5>Get Multiple Response to Single Quote</h5>
                  <p>Are you interested in this market? Get a quote now.</p>
                </div>
                <div className="request-quote">
                  <button className="request-quotebtn">Request Quote</button>
                </div>
              </div>
              <div className="rfq-cards">
                <div className="rfq-list-wrap">
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rfq-list-box">
                    <h2>Cameroon WW32 Peanuts</h2>
                    <p>Mrs, Guyelen mayenga</p>

                    <div className="rfq-list-btmitems">
                      <p>Quantity: 200 Metric Tonnes</p>
                      <p>
                        Date created: Mon 15th Aug, 2022
                        <span>
                          <Link onClick={handleShow}>View details</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="response-quote">
                <div className="quote-text">
                  <h5>Get Multiple Response to Single Quote</h5>
                  <p>Are you interested in this market? Get a quote now.</p>
                </div>
                <div className="request-quote">
                  <button className="request-quotebtn">Request Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Raw Cashew Kernels W320</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="rfq-modal">
                <div className="rfq-quantity">
                  <div>
                    <p>Quantity:</p>
                    <h5>40 Tonnes</h5>
                  </div>
                  <div className="cod">
                    <p>Country of Destination:</p>
                    <h5>Cameroon</h5>
                  </div>
                </div>
                <p>Specifications:</p>
                <h5>WW180, 47 KOR</h5>
                <p>Requirements:</p>
                <h5>I need to get the best quality cashew kernels urgently</h5>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Rfqs;
