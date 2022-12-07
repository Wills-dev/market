import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "./Authentication.css";
import SiteLogo from "../../assets/img/logo.png";

const ForgotPassword = () => {
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
                <h2>Forgot Password</h2>
                <p>Enter registered email address to reset your password</p>
                <div className="auth-account-wrap">
                <form className="auth-form">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <Link to="/reset-password/:resetToken">
                    <button type="submit" className="btn btn-danger">
                      {/* <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
                      Reset Password
                    </button>
                  </Link>
                  <p>Remember your password? <Link to="/login" className="user-link">Login here</Link></p>
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

export default ForgotPassword;
