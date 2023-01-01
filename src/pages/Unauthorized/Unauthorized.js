import React from "react";
import "./unauthorized.css";
import vector from "../../assets/img/Vectorerror.png";
import square from "../../assets/img/square.png";
import oval from "../../assets/img/oval.png";
import hand2 from "../../assets/img/hand2.png";
import hand from "../../assets/img/hand.png";
const Unauthorized = () => {
  return (
    <>
      <div className="unauthorized-container">
        <div className="container">
          <p className="nf-text">404 not Found</p>
          <div className="unauthorized-box">
            <div className="unauthorized-content">
              {" "}
              <h2>Oh No! There’s nothing here</h2>
              <p>
                It looks like this page has been lost or is temporarily
                unavailable. Let’s help you find your way back
              </p>
              <button>Back to homepage</button>
            </div>
            <div className="unauthorized-image-container">
              <div className="unauthorized-image">
                <div className="vector">
                  <img src={vector} alt="..." />
                </div>
                <div className="square">
                  <img src={square} alt="..." />
                  <div className="notfound">
                    <h2>404</h2>
                    <p>PAGE NOT FOUND</p>
                  </div>
                </div>

                <div className="unathorized-oval">
                  <div className="oval">
                    <img src={oval} alt="..." />
                  </div>
                </div>
              </div>
              <div className="hands">
                <div className="hand2">
                  <img src={hand2} alt="" />
                </div>
                <div className="hand1">
                  <img src={hand} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unauthorized;
