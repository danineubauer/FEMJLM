import React, { useContext } from "react";

import { Grid } from "../Grid";
import Imgone from '../Assets/Imgone.jpg';
import Imgtwo from '../Assets/Imgtwo.jpg';
import Imgthree from '../Assets/Imgthree.jpg';
import Imgfour from '../Assets/Imgfour.jpg';
import Header from '../Header/index'

import './style.css'
import Textbox from "../Textbox/index";
import Jumbotron from "../Jumbotron";
import Newsletter from "../Newsletter";

function About() {

  return (
    <div>
      <br></br><br></br><br></br>

      <div className="container">

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">

            <div className="jumbotron jumbotron-header ">
              <h2 className=" header display-4  ">Who we are</h2>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="jumbotron jumbotron-about">
              {/* <h5>About us</h5> */}

              <p className="lead">
                FemJLM is Jerusalem's tech and entrepreneurship community, established by women and for
                women, to address a known worldwide concern - the shortage of women as business leaders and
                tech executives. Our goal is to create a unified, diverse community of female entrepreneurs and
                techies in Jerusalem, whilst helping them progress in their careers in these fields. FemJLM
                focuses on 5 main areas: community building, promoting high-tech careers for women, increasing
                the number of women working in tech companies in Jerusalem, helping women progress from
                junior to senior positions in hi tech, and cultivating a culture of inclusivity in tech for female
                employees.
            </p>

            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div >

              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Imgtwo} className="carousel-img d-block w-100" alt="img"></img>
                  </div>
                  <div className="carousel-item">
                    <img src={Imgone} className="carousel-img  d-block w-100" alt="img"></img>
                  </div>
                  <div className="carousel-item">
                    <img src={Imgfour} className="carousel-img d-block w-100" alt="img"></img>
                  </div>
                  <div className="carousel-item">
                    <img src={Imgthree} className="carousel-img d-block w-100" alt="img"></img>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>
          <Newsletter></Newsletter>
        </div>
      </div>


    </div>
  );
}

export default About;
