import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div>
      <section className="bgimage d-flex align-content-center flex-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="text font-weight-bold text-white col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1>FEM JLM</h1>
              <h4>JERUSALEM'S WOMEN IN TECH & ENTREPRENEURSHIP COMMUNITY</h4>

              <h4>مجتمع التكنولوجيا والريادة المقدسي للسيدات</h4>
              <h4>קהילת נשות ההייטק והיזמות בירושלים</h4>
              <br></br>
              {/* <h4><a href="#" className="btn btn-primary btn-large">Learn more »</a></h4> */}
              <button
                href="https://airtable.com/shrvxB1TmF1TSuDDv"
                className="joinBtn  btn-large"
              >
                Join the Fem
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Jumbotron;
