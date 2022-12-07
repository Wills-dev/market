import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "./Authentication.css";
import SiteLogo from "../../assets/img/logo.png";

const PhoneVerification = () => {
  return (
    <>
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
                <h2><span>Welcome</span> Adamu Garba</h2>
                <h3>Verify your phone number</h3>
                <p className="phone-v-inst">Please enter the verification code that was sent to<br/><span>+234 00 000 0000</span></p>
                <div className="auth-account-wrap">
                <form className="auth-form">
                  <div class="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter 6 Digit Code"/>
                  </div>
                  <Link to="/reset-password/:resetToken">
                    <button type="submit" className="btn btn-danger">
                      {/* <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
                      Continue
                    </button>
                  </Link>
                  <p>Didn't get a code? <Link to="/login" className="user-link">Resend code</Link></p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PhoneVerification;
