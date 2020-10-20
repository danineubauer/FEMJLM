import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <a className="  page-footer font-small blue pt-4">
        <a className="container-fluid text-center text-md-left">
          <a className="row">
            <a className="col-lg-12 col-md-12 mt-md-12 mt-12">
              <h5 className=" text-uppercase text-center">FEM JLM</h5>
              <p className=" text-center">
                JERUSALEM'S WOMEN IN TECH & ENTREPRENEURSHIP COMMUNITY
              </p>
              <p className=" text-center">
                مجتمع التكنولوجيا والريادة المقدسي للسيدات
              </p>
              <p className=" text-center">
                קהילה של נשים בהייטק ויזמות בירושלים
              </p>
            </a>
          </a>
          <ul className="nav d-flex justify-content-center">
            <li className=" sm d-flex nav-item p-2">
              <a
                className="nav-link active"
                href="https://www.facebook.com/FemJLM/"
                target="_blank"
                class="fa fa-facebook"
              ></a>
            </li>
            <li className="sm d-flex nav-item p-2">
              <a
                className="nav-link active"
                href="https://www.instagram.com/fem.jlm/"
                target="_blank"
                class="fa fa-instagram"
              ></a>
            </li>
            <li className="sm d-flex nav-item p-2">
              <a
                className="nav-link active"
                href="https://www.linkedin.com/company/fem-jlm/"
                target="_blank"
                class="fa fa-linkedin"
              ></a>
            </li>
          </ul>

          <a className="footer-copyright text-center py-3">
            © 2020 Copyright
            <a
              href="https://www.linkedin.com/in/danielle-neubauer-2b00a3110/"
              target="_blank"
            >
              {" "}
              Danielle Neubauer
            </a>
          </a>
        </a>
      </a>
    </div>
  );
}

export default Footer;
