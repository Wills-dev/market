
import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="Newsletter-Container">
        <div className="Updates">
          <h4>Never miss an important update</h4>
          <p>Subscribe to get latest information and best deals directly</p>
        </div>
        <div className="subscribe-form">
          <form>
            <input Placeholder="Enter Full Name" />
            <input Placeholder="Enter Email Address" />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
