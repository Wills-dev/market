import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "./Authentication.css";
import SiteLogo from "../../assets/img/logo.png";

const Authentication = () => {
  return (
    <>
      {/* <Link to="/email-verification/:email">Email verification</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/buyers-registration">Buyer registration</Link>
      <br />
      <Link to="/sellers-registration">Sellers registration</Link>
      <br />
      <Link to="/forgot-password">Forgot Password</Link>
      <br />
      <Link to="/reset-password/:resetToken">Rest Password</Link>
      <br />

      <div>Authentication</div> */}
      <div>
        <section className="auth">
          <div className="auth-lhs">
            <div className="auth-lhs-header">
              <img className="site-logo" src={SiteLogo}/>
            </div>
          </div>
          <div className="auth-rhs">
            <div className="auth-rhs-header d-flex justify-content-between">
              <img className="site-logo mobile-only" src={SiteLogo}/>
              <p><Link><Iconly className="support-icon me-2" name="InfoCircle" set="light" size="medium" />Customer Support</Link></p>
            </div>
            <div className="auth-rhs-content d-flex align-items-center">
              <div className="rhs-inner">
                <h2>Choose your type of account</h2>
                <p>You are a few steps away from creating your account</p>
                <div className="auth-account-wrap">

                  <Link to="/buyers-registration">
                  <div className="auth-account d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="d-flex align-items-center">
                        <Iconly className="auth-user-icon" name="User" set="bulk" size="large" />
                      </div>
                      <div>
                        <h3>Buyer</h3>
                        <p>Access African Suppliers and Products</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Iconly className="auth-cta-icon" name="ArrowRight" set="light" size="medium" />
                    </div>
                  </div>
                  </Link>
                  
                  <Link to="/sellers-registration">
                  <div className="auth-account d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="d-flex align-items-center">
                        <Iconly className="auth-user-icon" name="Work" set="bulk" size="large" />
                      </div>
                      <div>
                        <h3>Seller</h3>
                        <p>Access global markets for your products</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Iconly className="auth-cta-icon" name="ArrowRight" set="light" size="medium" />
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Authentication;
