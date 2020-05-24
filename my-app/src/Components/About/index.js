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

function About() {

  return (
    <div>
      <br></br><hr></hr><br></br>

      <div className="container">

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">

            <div className="jumbotron jumbotron-header ">
              <h2 className=" header display-4  ">Where the women of Jerusalem meet.</h2>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="jumbotron jumbotron-about">
              <h5>About us</h5>
              <p className="lead">We foster a diverse community for females in tech across Jerusalem to support women in their careers.
              We address topics that center around women in tech .
              Join us to network. do our workshops, get inspired at our events and xpand our the community of women in tech and entrepreneurship in Jerusalem and Israel.
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

          <div className='container'>
            <p className="lead">
              <h6>Get all the news fist!</h6>
              <a className="btn btn-primary btn-lg" href="#" role="button">Join our mailing list
              <input type="text" class="form-control" placeholder="Your email" aria-label="email-news" aria-describedby="basic-addon1"></input>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
