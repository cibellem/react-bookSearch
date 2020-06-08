import React from "react";
import "./assets/style.css";
function Hero() {
  return (
    <div className="container hero-container">
      <div className="row">
        <div className="col-md-6 hero-text d-flex align-items-center  col-sm-12">
          <h4>
            <q>
              {" "}
              You don’t have to burn books to destroy a culture. Just get people
              to stop reading them.
            </q>
            <small> Ray Bradbury</small>
          </h4>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            className="reader-img img-responsive"
            src={require("./assets/reader.svg")}
            alt="Reader Svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
