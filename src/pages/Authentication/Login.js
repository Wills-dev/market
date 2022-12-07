import React from "react";
import { Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "./Authentication.css";
import SiteLogo from "../../assets/img/logo.png";

const Login = () => {
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
              <p>Don't have an account? <Link to="/authentication" className="user-link">Register</Link></p>
            </div>
            <div className="auth-rhs-content d-flex align-items-center">
              <div className="rhs-inner">
                <h2 className="mb-4">Login to continue</h2>
                <div className="auth-account-wrap">
                <form className="auth-form">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <div className="d-flex justify-content-between">
                      <label className="form-check-label" for="exampleCheck1">Remember me</label>
                      <span className="forgot-pwd"><Link to="/forgot-password" className="user-link-doc">Forgot Password?</Link></span>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-danger">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {/* Login */}
                  </button>
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

export default Login;
