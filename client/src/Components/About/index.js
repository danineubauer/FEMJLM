import React from "react";
import Imgone from "../Assets/Imgone.jpg";
import Imgtwo from "../Assets/Imgtwo.jpg";
import Imgthree from "../Assets/Imgthree.jpg";
import Imgfour from "../Assets/Imgfour.jpg";
import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.jpg";
import c4 from "../Assets/c4.jpg";
import c5 from "../Assets/c5.jpg";
import "./style.css";
import Newsletter from "../Newsletter";

export default function About() {
  const images = [Imgone, Imgthree, Imgfour, c1, c2, c4, c5];
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

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
              <p className="lead">
                FemJLM is Jerusalem's tech and entrepreneurship community,
                established by women and for women, to address a known worldwide
                concern - the shortage of women as business leaders and tech
                executives. Our goal is to create a unified, diverse community
                of female entrepreneurs and techies in Jerusalem, whilst helping
                them progress in their careers in these fields. FemJLM focuses
                on 5 main areas: community building, promoting high-tech careers
                for women, increasing the number of women working in tech
                companies in Jerusalem, helping women progress from junior to
                senior positions in hi tech, and cultivating a culture of
                inclusivity in tech for female employees.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators"></ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Imgtwo}
                      className="carousel-img d-block w-100"
                      alt="img"
                    ></img>
                  </div>

                  {images.map((e, i) => (
                    <div className="carousel-item">
                      <img
                        src={images[i]}
                        className="carousel-img  d-block w-100"
                        alt="img"
                      ></img>
                    </div>
                  ))}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  {/* <span className="sr-only">Previous</span> */}
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  {/* <span className="sr-only">Next</span> */}
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
