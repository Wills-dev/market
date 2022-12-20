import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import BuyersSidebar from "../BuyersDashboard/BuyersComponent/BuyersSidebar";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

const BuyersOrderInfo = () => {
  return (
    <>
      <div>
        <div className="grid-container seller-order-info-container">
          <BuyersSidebar />

          <main className="main sellerinfomain">
            <div className="main-overview sellerInfoOrder">
              <div className="Seller-order-info">
                <div className="Seller-order-info-header">
                  <p>
                    <button>
                      <IoIosArrowBack size={20} />
                    </button>
                    Order Info
                  </p>
                  <button className="Seller-order-info-completed">
                    Completed
                  </button>
                </div>
                <div className="overview-card">
                  <div className="product-info">
                    <p className="product-info-title">Product Name</p>
                    <p>Dried Hibiscus</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Order Number</p>
                    <p>USD 1200</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Supplier's Name</p>
                    <p>Devani Limited</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Payment Type</p>
                    <p>Letter of Credit</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Date Sent</p>
                    <p>12/09/2022</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Payment Type</p>
                    <p>Deposit Against Payment</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Origin</p>
                    <p>Cameroon</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Destination</p>
                    <p>Nigeria</p>
                  </div>

                  <div className="product-info">
                    <p className="product-info-title">Port of Discharge</p>
                    <p>Port de Naiva</p>
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Notes</p>
                    <p>
                      Order for 50MT of Dried Hibicus has been delivered to Port
                      de Naiva in Cameroon
                    </p>
                  </div>
                </div>
              </div>
              <div className="Seller-order-complete">
                <p className="order-complete-title">Order Completed</p>
      
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{ color: "#4AAE4E" }} />
                    <p>Order Recieved</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                    <div className="respose-content-text">
                      <p>
                        Placed Order for 50MT of Dried Hibicus to be delivered
                        to Port de Naiva in Cameroon
                      </p>
                      <p className="response-content-date">25th of June 2022</p>
                    </div>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{ color: "#4AAE4E" }} />
                    <p>Response Sent to Buyer</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                    <div className="respose-content-text">
                      <p>
                        A response was sent and further conversation about the
                        transaction was carried out between the buyer and the
                        supplier on the message center. Terms were agred to on
                        both sides.
                      </p>
                      <p className="response-content-date">25th of June 2022</p>
                    </div>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{ color: "#4AAE4E" }} />
                    <p>Payment Successful</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                    <div className="respose-content-text">
                      <p>
                        Uploaded and processed requirements in the payment type
                        of Deposit against Payment with the supplier and it has
                        been confirmed
                      </p>
                      <p className="response-content-date">25th of June 2022</p>
                    </div>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{ color: "#4AAE4E" }} />
                    <p>Order Shipped</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                    <div className="respose-content-text">
                      <p>
                        POrder for 50MT of Dried Hibicus has been shipped to
                        buyer
                      </p>
                      <p className="response-content-date">25th of June 2022</p>
                    </div>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{ color: "#4AAE4E" }} />
                    <p>Order Delivered</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                    <div className="respose-content-text">
                      <p>
                        Placed Order for 50MT of Dried Hibicus to be delivered
                        to Port de Naiva in CameroonOrder for 50MT of Dried
                        Hibicus has been delivered to Port de Naiva in Cameroon
                        and confirmed by buyer
                      </p>
                      <p className="response-content-date">25th of June 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default BuyersOrderInfo;
