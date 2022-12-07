import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "./Authentication.css";
import SiteLogo from "../../assets/img/logo.png";

const SellersRegistration = () => {
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
              <p>Already have an account? <Link to="/login" className="user-link">Login</Link></p>
            </div>
            <div className="auth-rhs-content d-flex align-items-center">
              <div className="rhs-inner">
                <h2>Register as a Seller</h2>
                <p>You are a few steps away from creating your account</p>
                <div className="auth-account-wrap">
                <form className="auth-form">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Phone number</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">How did you hear about us?</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input custom-checkbox" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">I agree to the <Link className="user-link-doc">Terms & Conditions</Link> and <Link className="user-link-doc">Privacy Policy</Link></label>
                  </div>
                  <Link to="/phone-verification">
                    <button type="submit" className="btn btn-danger">
                      {/* <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
                      Signup
                    </button>
                  </Link>
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

export default SellersRegistration;
