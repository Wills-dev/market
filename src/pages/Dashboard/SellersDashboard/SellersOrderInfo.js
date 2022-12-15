import React from "react";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import SellersSidebar from "./SellersComponent/SellersSidebar";
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosArrowBack } from 'react-icons/io';

const SellersOrderInfo = () => {
  return (
    <>
      <div>
        <div className="grid-container seller-order-info-container">

          <SellersSidebar />

          <main className="main sellerinfomain">
            <div className="main-overview sellerInfoOrder">
              <div className="Seller-order-info">
                <div className="Seller-order-info-header">
                  <p><button><IoIosArrowBack size={20}/></button>Order Info</p>
                  <button className="Seller-order-info-completed">Completed</button>
                </div>
                <div className="overview-card">
                  <div className="product-info">
                    <p className="product-info-title">Buyer</p>
                    <div className="product-info-title-user">
                      <p>Erhun Abbe</p>
                      <Link to="#"><button className="product-info-name">View Info</button></Link>
                    </div>
                    
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Product Name</p>
                    <p>Dried Hibiscus</p>
                  
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Order Number</p>
                    <p>Fresh Mint leaves</p>
                   
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Product Name</p>
                    <p>No. 12345</p>
                   
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Amount Spent</p>
                    <p>USD 12000</p>
                 
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
                    <p>Deposit Against Payment</p>
                   
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Payment Type</p>
                    <p>Nigeria</p>
                   
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Port of Discharge</p>
                    <p>Port de Naiva</p>
                   
                  </div>
                  <div className="product-info">
                    <p className="product-info-title">Notes</p>
                    <p>I need the Hibicus to be truly of a top grade.</p>
                   
                  </div>
                </div>
              </div>
              <div className="Seller-order-complete">
               <p className="order-complete-title">Order Completed</p>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{color:"#4AAE4E"}}/>
                    <p>Order Recieved</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                      <p>Placed Order for 50MT of Dried
                      Hibicus to be delivered to Port de Naiva in Cameroon</p>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{color:"#4AAE4E"}}/>
                    <p>Order Recieved</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                      <p>Placed Order for 50MT of Dried
                      Hibicus to be delivered to Port de Naiva in Cameroon</p>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{color:"#4AAE4E"}}/>
                    <p>Response Sent to Buyer</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                      <p>A response was sent and further conversation about the transaction was 
                        carried out between the buyer and the supplier on the message center. 
                        Terms were agred to on both sides.
                      </p>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{color:"#4AAE4E"}}/>
                    <p>Payment Successful</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                      <p>Uploaded and processed requirements in the payment type of Deposit against 
                        Payment with the supplier and it has been confirmed
                      </p>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{color:"#4AAE4E"}}/>
                    <p>Order Shipped</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border"></div>
                      <p>POrder for 50MT of Dried Hibicus has been shipped to buyer</p>
                  </div>
                </div>
                <div className="order-complete-responses">
                  <div className="response-title">
                    <GoPrimitiveDot size={30} style={{color:"#4AAE4E"}}/>
                    <p>Order Delivered</p>
                  </div>
                  <div className="response-content">
                    <div className="response-border last"></div>
                      <p>Placed Order for 50MT of Dried
                      Hibicus to be delivered to Port de Naiva in CameroonOrder for 
                      50MT of Dried Hibicus has been delivered to Port de Naiva in Cameroon and confirmed by buyer
                      </p>
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

export default SellersOrderInfo;
